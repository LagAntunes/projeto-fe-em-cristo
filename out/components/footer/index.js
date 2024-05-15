import React from "react";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.footerTextWrapper}>
          <strong className={styles.footerTitle}>Projeto Fé em Cristo</strong>
          <p className={styles.footerText}>
            Feito por Luís Antonio - Todos os direitos reservados
          </p>
        </div>

        <div className={styles.footerLinkWrapper}>
          <a
            className={styles.footerGithub}
            href="https://github.com/LagAntunes"
            target="_blank"
          ></a>

          <a
            className={styles.footerLinkedin}
            href="https://www.linkedin.com/in/luis-antonio-garcia-antunes/"
            target="_blank"
          ></a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
