import type { NextApiRequest, NextApiResponse } from "next";
import { getLinkWithSecuredProtocole } from "../../utils/getLinkWithSecuredProtocole";
import { getSlug } from "../../utils/slugGeneratorFunctions";
import { limitOfRecordsPerPage } from "../../utils/constants";
import { prisma } from "../../database/prisma";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body) {
      const link: string = getLinkWithSecuredProtocole(req.body.link);
      const slug = getSlug();

      const newRecord = await prisma.links.create({
        data: {
          shortLink: slug,
          fullLink: link,
        },
      });
      return res.json(newRecord);
    } else {
      return res.status(400).json({ message: "Bad request" });
    }
  }

  if (req.method === "GET") {
    const page: number = Number(req.query.page);
    const limit: number = Number(req.query.limit);

    if (Number.isNaN(page) || Number.isNaN(limit)) {
      return res.status(400).json({ message: "Bad request" });
    }

    const recordsPerPage = await prisma.links.findMany({
      skip: page >= 1 && limit > 0 ? (page - 1) * limit : 0,
      take: limit > 0 ? limit : limitOfRecordsPerPage,
    });

    return res.json(recordsPerPage);
  }
}
