import type { NextApiRequest, NextApiResponse } from "next";
import { getLinkWithProtocole } from "../../helperFunctions";
import { Results } from "../../interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const link: string = getLinkWithProtocole(req.body.link);
    const short: string = req.body.short;

    const newRecord = await prisma.links.create({
      data: {
        shortLink: short,
        fullLink: link,
      },
    });
    return res.json(newRecord);
  }

  if (req.method === "GET") {
    const allData = await prisma.links.findMany();

    const page: number = Number(req.query.page);
    const limit: number = Number(req.query.limit);
    const startIndex: number = (page - 1) * limit;
    const endIndex: number = page * limit;

    const results: Results = {};

    if (endIndex < allData.length) {
      results.next = {
        page: page + 1,
        limit: limit,
      };
    }

    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit,
      };
    }

    results.results = allData.slice(startIndex, endIndex);

    return res.json(results);
  }
}
