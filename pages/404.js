import styles from "../components/ErrorPage.module.scss";
import Link from "next/link";

const ErrorPage = () => (
  <div className={styles.errorPage}>
    <h1 className={styles.title}> 404 </h1>
    <h2 className={styles.subtitle}>Not found!</h2>
    <p>Sorry, we can't find what you're looking for.</p>
    <Link href={"/"} role="link">
      <span className={styles.goBackHomeLink}>Go back home</span>
    </Link>
  </div>
);

export default ErrorPage;
