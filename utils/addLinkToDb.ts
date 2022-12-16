export const addLinkToDb = async (link: string) => {
  const response = await fetch("/api/links", {
    method: "POST",
    body: JSON.stringify({ link }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
  return response;
};
