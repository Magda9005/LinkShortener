export const addLinkToDb = async (
  link: string,
  setShortenedLink: React.Dispatch<React.SetStateAction<string>>
) => {
  const response = await fetch("/api/links", {
    method: "POST",
    body: JSON.stringify({ link }),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((shortcut) => setShortenedLink(shortcut.shortLink));
  return response;
};
