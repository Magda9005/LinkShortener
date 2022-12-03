import Image from "next/image";
import styles from "./Header.module.scss";

const Header: React.FC = () => (
  <div className={styles.header}>
    <div className={styles.logoContainer}>
      <Image
        priority={true}
        src={"/logo.svg"}
        alt="logo"
        width={30}
        height={30}
      />
    </div>
    <h1 className={styles.title}>
      <span className={styles.whiteTitleElement}> link </span>{" "}
      <span className={styles.orangeTitleElement}>shortener</span>{" "}
    </h1>
  </div>
);

export default Header;
