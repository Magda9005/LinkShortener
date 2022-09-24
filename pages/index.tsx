import { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import Header from "./Header";

const Shortener: React.FC = () => {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [slugGenerated, setSlugGenerated] = useState(false);
  const [showError,setShowError]=useState(false)

  const addLinkToDb = async ()=> {
    const response = await fetch("/api/links", {
      method: "POST",
      body: JSON.stringify({ link }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(res=>res.json()).then(shortcut=>setShortenedLink(shortcut));

    return response;
  };



  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if(link===""){
      setShowError(true)
    }else {
      setShowError(false)
      addLinkToDb();
      setSlugGenerated(true);
    }
    
  };

  return (
    <>
    <Head>
      <title>Link Shortener</title>
    </Head>
    <Header/>
    <div className="container">
      <div className="main-section-container">
      <p className="instruction">Paste the URL you want to be shortened:</p>
      <form onSubmit={(e) => handleSubmit(e)}>
      <div className='input-container'>
        <input 
          className='link-input'
          type="text"
          value={link}
          placeholder="Enter the link here"
          onChange={(e) => {
            if(e.target.value!==""){
              setShowError(false);
            }
            if(e.target.value==""){
              setSlugGenerated(false);
            }
            setLink(e.target.value)}
          }
        />
        <button type="submit" className="submit-btn">
          Shorten URL
        </button>

      </div>
      </form>

      {showError ?  <p className="error-message"> Please enter the link!</p>:

      <span className="new-link-title">Your new link is:</span>}      

      <div className="new-link-container">

      {slugGenerated && (
        <Link href={`/api/${shortenedLink}`}>
          <a>
            <span className="new-link">
              {" "}
              http://localhost:3000/api/{shortenedLink}{" "}
            </span>
          </a>
        </Link>
      )}
              </div>

      <p className="info">
        {" "}
        Click the link to go directly to the website or copy it and share with
        other people.
      </p>
      </div>
    </div>
    </>
  );
};

export default Shortener;


