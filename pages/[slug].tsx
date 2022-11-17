import { prisma } from "../constants";
import { Link, IParams } from "../interfaces";
import { GetServerSideProps } from "next";

export const Component = () => <></>;

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
