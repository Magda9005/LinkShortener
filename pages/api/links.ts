import type { NextApiRequest, NextApiResponse } from "next";
import { getLinkWithSecuredProtocol } from "../../utils/getLinkWithSecuredProtocol";
import { getSlug } from "../../utils/slugGeneratorFunctions";
import { prisma } from "../../database/prisma";

const addDbEntry = async (link: string, slug: string) => {
  return await prisma.links.create({
    data: {
      shortLink: slug,
      fullLink: link,
    },
  });
};

const getEntriesFromDb = async (page: number, limit: number) => {
  return await prisma.links.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (typeof req.body.link !== "string") {
      return res.status(400).json({ message: "Bad request" });
    }
    const link = getLinkWithSecuredProtocol(req.body.link);
    const slug = getSlug();
    const newRecord = await addDbEntry(link, slug);
    return res.json(newRecord);
  }

  if (req.method === "GET") {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    if (Number.isNaN(page) || Number.isNaN(limit) || limit <= 0 || page <= 0) {
      return res.status(400).json({ message: "Bad request" });
    }
    const links = await getEntriesFromDb(page, limit);

    return res.json(links);
  }
}
