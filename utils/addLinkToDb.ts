export const addLinkToDb = async (link: string) => {
  return await fetch("/api/links", {
    method: "POST",
    body: JSON.stringify({ link }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
