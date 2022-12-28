import styles from "../components/index.module.scss";
import { useState } from "react";
import { addLinkToDb } from "../utils/addLinkToDb";
import Link from "next/link";
import Head from "next/head";
import Header from "../components/Header";
import Image from "next/image";
import FeatureItem from "../components/FeatureItem";

const Shortener: React.FC = () => {
  const [link, setLink] = useState("");
  const [shortenedLink, setShortenedLink] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const appUrl = process.env.NEXT_PUBLIC_APP_URL;

  const handleSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (link === "") {
      setErrorMessage("Please enter the link");
    } else {
      setErrorMessage("");
      setIsLoading(true);
      addLinkToDb(link)
        .then((shortcut) => setShortenedLink(shortcut.shortLink))
        .catch(() =>
          setErrorMessage("Sorry, something went wrong. Please try again ")
        )
        .finally(() => setIsLoading(false));
    }
  };

  return (
    <>
      <Head>
        <title>Link Shortener</title>
      </Head>
      <Header />
      <div className={styles.mainSectionContainer}>
        <p className={styles.instruction}>
          Paste the URL you want to get shortened and once it is done click the
          new link to visit the website or copy it to share with others.
        </p>
        <form onSubmit={handleSubmit}>
          <div className={styles.inputContainer}>
            <input
              className={styles.linkInput}
              type="text"
              value={link}
              placeholder="Enter the link here"
              onChange={(e) => {
                if (e.target.value !== "") {
                  setErrorMessage("");
                }
                setLink(e.target.value);
              }}
            />
            <div className={styles.inputIconContainer}>
              <Image
                priority={false}
                src={"/inputIcon.svg"}
                alt="logo"
                width={30}
                height={30}
              />
            </div>
            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isLoading}
            >
              Shorten URL
            </button>
          </div>
        </form>
        {isLoading && <div className={styles.loader}></div>}

        {errorMessage && (
          <p className={styles.errorMessage}> {errorMessage} </p>
        )}

        {shortenedLink && (
          <>
            <span className={styles.newLinkTitle}>Your new link is:</span>
            <div className={styles.newLinkContainer}>
              <Link href={`/${shortenedLink}`}>
                <span className={styles.newLink}>
                  {" "}
                  {appUrl}/api/{shortenedLink}{" "}
                </span>
              </Link>

              <div className={styles.inputIconContainer}>
                <Image
                  priority={false}
                  src={"/inputIcon.svg"}
                  alt="logo"
                  width={30}
                  height={30}
                />
              </div>
            </div>
          </>
        )}
      </div>
      <div className={styles.featuresContainer}>
        <FeatureItem
          alt={"thumb up icon"}
          url={"/thumbup.svg"}
          name={"Easy"}
          description={
            "Link Shortener is user friendly,easy and fast. Enter the link to get your shortened url"
          }
        />
        <FeatureItem
          alt={"hyperlink icon "}
          url={"/urlIcon.svg"}
          name={"Shortened"}
          description={
            "No matter what size, Link Shortener always shortens. Just check try it out"
          }
        />
        <FeatureItem
          alt={"devices icon"}
          url={"/devicesIcon.svg"}
          name={"Devices"}
          description={
            "Compatible with devies such as smartphones, tablets and desktop"
          }
        />
      </div>
    </>
  );
};

export default Shortener;
