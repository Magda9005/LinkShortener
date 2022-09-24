import Link from "next/link";
import styles from "../styles/modules/errorPage.module.scss";

const NotFound = () => (
  <div className={styles["error-page"]}>
    <h1 className={styles["error-page-main-title"]}> 404 </h1>
    <h2 className={styles["error-page-subtitle"]}>Not found!</h2>
    <p>Sorry,we can't find what you're looking for.</p>
    <Link href={'/'} role="link">
      <button className={styles["go-back-home-btn"]} role="button">
        Go back home
      </button>
    </Link>
  </div>
);

export default NotFound;


