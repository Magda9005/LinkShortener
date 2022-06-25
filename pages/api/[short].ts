import type { NextApiRequest, NextApiResponse } from "next";
import { Links } from "../../interfaces";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const short: string = req.query.short;

  const links: Links | null = await prisma.links.findFirst({
    where: {
      shortLink: short,
    },
  });

  if (links !== null) {
    const fullLink: string = links.fullLink;
    res.redirect(fullLink);
  }
}
