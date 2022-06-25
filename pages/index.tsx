import { useState } from "react";
import { getShort } from "../helperFunctions";
import Link from "next/link";

const Shortener: React.FC = () => {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [shortGenerated, setShortGenerated] = useState(false);
  let short: string;

  const addLinkToDb = async () => {
    const response = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({ link, short }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  };

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();
    short = getShort();
    setShortenedLink(short);
    addLinkToDb();
    setShortGenerated(true);
  };

  return (
    <div className="container">
      <h1 className="header"> Shortener </h1>
      <p className="instruction">Paste the URL you want to be shortened:</p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={link}
          placeholder="Enter the link here"
          onChange={(e) => setLink(e.target.value)}
        />
        <button type="submit" className="submit-btn">
          Shorten URL
        </button>
      </form>
      <span className="new-link">Your new link is:</span>
      {shortGenerated && (
        <Link href={`/api/${shortenedLink}`}>
          <a>
            <span className="new-link">
              {" "}
              http://localhost:3000/api/{shortenedLink}{" "}
            </span>
          </a>
        </Link>
      )}
      <p className="info">
        {" "}
        Click the link to go directly to the website or copy it and share with
        other people.
      </p>
    </div>
  );
};

export default Shortener;
