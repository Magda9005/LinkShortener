export const getLinkWithSecuredProtocol = (link: string): string => {
  const securedProtocol: string = "https://";

  if (!link.includes("://")) {
    return securedProtocol + link;
  } else {
    const URLObject = new URL(link);
    return (
      securedProtocol +
      URLObject.hostname +
      URLObject.pathname +
      URLObject.search +
      URLObject.hash
    );
  }
};
