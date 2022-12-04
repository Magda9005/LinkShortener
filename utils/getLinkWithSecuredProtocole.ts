export const getLinkWithSecuredProtocole = (link: string): string => {
  const first4letters: string = link.slice(0, 4).toLowerCase();
  const first5letters: string = link.slice(0, 5).toLowerCase();
  const securedProtocole: string = "https://";
  if (first5letters === "https") {
    return link;
  } else if (first4letters === "http") {
    return link.replace("http", "https");
  } else {
    return securedProtocole + link;
  }
};
