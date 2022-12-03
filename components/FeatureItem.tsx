import Image from "next/image";
import styles from "./FeatureItem.module.scss";

interface FeatureItemProps {
  url: string;
  alt: string;
  description: string;
  name: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  url,
  alt,
  description,
  name,
}) => (
  <div className={styles.container}>
    <Image priority={false} src={url} alt={alt} width={60} height={60} />
    <span className={styles.featureName}> {name} </span>
    <div className={styles.description}> {description} </div>
  </div>
);

export default FeatureItem;
