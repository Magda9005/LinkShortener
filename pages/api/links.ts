import type { NextApiRequest, NextApiResponse } from "next";
import { protocole } from "../../slugGeneratorFunctions";
import { PrismaClient } from "@prisma/client";
import { getSlug } from "../../slugGeneratorFunctions";
import { firstPage, recordsNumber } from "../../constants";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if (req.method === "POST") {
    const link: string = protocole(req.body.link);
    let slug=getSlug();

    const newRecord = await prisma.links.create({
      data: {
        shortLink: slug,
        fullLink: link,
      },
    });

    //I return slug in order to display it on client side
    return res.json(slug)
  }

  if (req.method === "GET") {

   const page: number = Number(req.query.page);
   const limit: number = Number(req.query.limit);

    const recordsPerPage = await prisma.links.findMany({
      skip: page && page>0?(page-1)*limit:firstPage,
      take: limit && limit>0?limit:recordsNumber,
    });

    return res.json(recordsPerPage);
  }
}
