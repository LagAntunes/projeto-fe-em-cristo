import React from "react";
import { Link } from "react-scroll";
import styles from "./styles.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <ul className={styles.headerList}>
          <li>
            <Link
              to="dailyVerseContainer"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.headerListLink}
            >
              Versículo do dia
            </Link>
          </li>

          <li>
            <Link
              to="fiveColoursContainer"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.headerListLink}
            >
              As cinco cores
            </Link>
          </li>

          <li>
            <Link
              to="visitUsContainer"
              spy={true}
              smooth={true}
              offset={50}
              duration={1000}
              className={styles.headerListLink}
            >
              Visite nossa Igreja
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
