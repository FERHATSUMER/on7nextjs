import React from "react";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import { BsInstagram, BsGithub } from "react-icons/bs";
import styles from "../styles/Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <img
          src="https://media.licdn.com/dms/image/D4D03AQFMfnp5H1M-vA/profile-displayphoto-shrink_800_800/0/1667210919849?e=2147483647&v=beta&t=SL-bp4f4k3ElkP3ot_ahz2KSGT-uH9OeKbtvYwBTajw"
          alt="Ferhat"
        />
      </Link>
      <nav className={styles.nav}>
        <div>
          <AiFillLinkedin />
          <Link href="https://www.linkedin.com/in/ferhatsumer/" target="_blank">
            <h4>Linkedin</h4>
          </Link>
          <BsGithub />
          <Link href="https://github.com/FERHATSUMER" target="_blank">
            <h4>GitHub</h4>
          </Link>
          <BsInstagram />
          <Link href="https://www.instagram.com/ferhatsumer_/" target="_blank">
            <h4>Instagram</h4>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
