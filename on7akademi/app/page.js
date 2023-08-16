import styles from './page.module.css';
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsGithub } from "react-icons/bs";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerRight}>
        <Link href="/">
          <img
            className={styles.logo}
            src='https://media.licdn.com/dms/image/C560BAQG50mwENt9gSQ/company-logo_400_400/0/1632727910976?e=2147483647&v=beta&t=0w36fnGQ37PWTm253SLL0PVTr2ziC_mzcyO71DlLIDc'
            alt='logo'
          />
          <h1 className={styles.headerTitle}>Ferhat Sümer</h1>
        </Link>
      </div>
      <nav>
        <div className={styles.navRight}>
          <Link href="https://www.linkedin.com/" target="_blank">
            <AiFillLinkedin  />
            <h4>Linkedin</h4>
          </Link>
          <Link href="https://github.com/" target="_blank">
            <BsGithub  />
            <h4>GitHub</h4>
          </Link>
          <Link href="https://www.instagram.com/" target="_blank" >
            <BsInstagram />
            <h4>Instagram</h4>
          </Link>
        </div>
      </nav>
    </div>
  );
}
