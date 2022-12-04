import { prisma } from "../database/prisma";
import { Link, IParams } from "../utils/interfaces";
import { GetServerSideProps } from "next";

export const Component = () => null;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params as IParams;
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
