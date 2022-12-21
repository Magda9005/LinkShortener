import type { NextApiRequest, NextApiResponse } from "next";
import { getLinkWithSecuredProtocol } from "../../utils/getLinkWithSecuredProtocol";
import { getSlug } from "../../utils/slugGeneratorFunctions";
import { prisma } from "../../database/prisma";

const addDbEntry = async (link: string, slug: string) => {
  const newEntry = await prisma.links.create({
    data: {
      shortLink: slug,
      fullLink: link,
    },
  });
  return newEntry;
};

const getRecordsFromDb = async (page: number, limit: number) => {
  const recordsPerPage = await prisma.links.findMany({
    skip: (page - 1) * limit,
    take: limit,
  });

  return recordsPerPage;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    if (req.body) {
      const link = getLinkWithSecuredProtocol(req.body.link);
      const slug = getSlug();
      const newRecordInDb = await addDbEntry(link, slug);
      return res.json(newRecordInDb);
    } else {
      return res.status(400).json({ message: "Bad request" });
    }
  }

  if (req.method === "GET") {
    const page = Number(req.query.page);
    const limit = Number(req.query.limit);

    if (Number.isNaN(page) || Number.isNaN(limit) || limit <= 0 || page <= 0) {
      return res.status(400).json({ message: "Bad request" });
    }
    const links = await getRecordsFromDb(page, limit);

    return res.json(links);
  }
}
