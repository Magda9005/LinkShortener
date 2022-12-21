import { prisma } from "../database/prisma";
import { Link } from "../utils/interfaces";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface ShortenedPageQuery extends ParsedUrlQuery {
  slug: string;
}

export const Component = () => null;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as ShortenedPageQuery;
  const link: Link | null = await prisma.links.findFirst({
    where: {
      shortLink: slug,
    },
  });

  if (link !== null) {
    return {
      redirect: {
        destination: `${link.fullLink}`,
        permanent: false,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default Component;
