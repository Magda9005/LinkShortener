import Image from "next/image";
import styles from '../styles/modules/header.module.scss'

const Header: React.FC = () => (
<div className={styles['header']}>
<div className={styles['logo-container']}>
<Image 
priority={true}
src={'/logo.svg'}
alt="logo"
width={30}
height={30}
/>
</div>
<h1 className={styles["title"]}><span className={styles['white-title-element']}> link </span> <span className={styles['orange-title-element']}>shortener</span> </h1>
</div>
)



export default Header;