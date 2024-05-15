import React from "react";
import styles from "./styles.module.css";

import Slider from "../slider";

function visitUs() {
  return (
    <div className={styles.visitUs} id="visitUsContainer">
      <div className={styles.visitUsWrapper}>
        <Slider />

        <div className={styles.visitUsText}>
          <strong className={styles.visitUsTextTitle}>
            Acompanhe nossos horários e nos faça uma visita:
          </strong>

          <ul className={styles.visitUsTextList}>
            <li className={styles.visitUsTextListItem}>
              Quarta-feira:{" "}
              <span className={styles.visitUsTextListSpan}>19:30 - 21:30</span>
            </li>
            <li className={styles.visitUsTextListItem}>
              Sábado (Clube Bíblico):{" "}
              <span className={styles.visitUsTextListSpan}>14:00 - 16:00</span>
            </li>
            <li className={styles.visitUsTextListItem}>
              Domingo:{" "}
              <span className={styles.visitUsTextListSpan}>09:30 - 11:00</span>{" "}
              e{" "}
              <span className={styles.visitUsTextListSpan}>19:00 - 21:00</span>
            </li>
            <li className={styles.visitUsTextListItemAdress}>
              Endereço:{" "}
              <span className={styles.visitUsTextListSpan}>
                R. Jardim Olinda, 40 - Sítio Cercado, Curitiba - PR, 81935-020
              </span>
            </li>
            <li className={styles.visitUsTextListItem}>
              Telefone: <a href="tel:(41) 99921-8701" className={styles.visitUsTextListLink}>(41) 99921-8701</a>
            </li>
            <li className={styles.visitUsTextListItem}>
              Redes sociais: <a href="https://www.facebook.com/igrejabatistadafeemcristo/" target="_blank" className={styles.visitUsTextListLink}>Acesse nosso Facebook clicando aqui</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default visitUs;
