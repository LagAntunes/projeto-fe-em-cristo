import React, { useEffect } from "react";
import styles from "./styles.module.css";

function FiveColours() {
  useEffect(() => {
    const handleScroll = () => {
      const itemsRight = document.querySelectorAll(
        `.${styles.fiveColoursListItemRight}`
      );
      const itemsLeft = document.querySelectorAll(
        `.${styles.fiveColoursListItemLeft}`
      );

      itemsRight.forEach((item) => {
        const positionFromTop = item.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight < 0) {
          item.classList.add(styles.appear);
        }
      });

      itemsLeft.forEach((item) => {
        const positionFromTop = item.getBoundingClientRect().top;

        if (positionFromTop - window.innerHeight < 0) {
          item.classList.add(styles.appear);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.fiveColours} id="fiveColoursContainer">
      <div className={styles.fiveColoursTextWrapper}>
        <strong className={styles.fiveColoursTitle}>
          As Cinco Cores: Um Símbolo de{" "}
          <span className={styles.fiveColoursSpan}>Fé</span> e{" "}
          <span className={styles.fiveColoursSpan}>Identidade</span>
        </strong>
        <p className={styles.fiveColoursText}>
          Dentro da tradição batista, as cores assumem um papel simbólico
          significativo, representando os valores e crenças fundamentais
          compartilhadas por essa comunidade e encapsulando também os princípios
          centrais da fé cristã.
        </p>
        <p className={styles.fiveColoursText}>
          As cores - preto, vermelho, amarelo, verde e branco - carregam consigo
          significados simbólicos profundos, cada uma delas representando
          aspectos importantes da teologia e prática batista. Veja a seguir o
          que cada uma delas significa:
        </p>
      </div>

      <ul className={styles.fiveColoursList} id="fiveColoursList">
        <li className={styles.fiveColoursListItemRight}>
          <img
            className={styles.fiveColoursListItemImage}
            src="../assets/images/esqueleto.jpg"
          />

          <div className={styles.fiveColoursListItemTextWrapper}>
            <strong className={styles.fiveColoursListItemTitleBlack}>
              Preto
            </strong>

            <p className={styles.fiveColoursListItemText}>
              Inicialmente, pode parecer uma escolha sombria, mas dentro da
              perspectiva batista, ele representa a realidade do pecado e da
              escuridão que permeiam o mundo. É um lembrete da necessidade de
              redenção e salvação em Jesus Cristo.
            </p>
          </div>
        </li>

        <li className={styles.fiveColoursListItemLeft}>
          <img
            className={styles.fiveColoursListItemImage}
            src="../assets/images/cruz.jpg"
          />

          <div className={styles.fiveColoursListItemTextWrapper}>
            <strong className={styles.fiveColoursListItemTitleRed}>
              Vermelho
            </strong>

            <p className={styles.fiveColoursListItemText}>
              Simbolizando o sangue derramado de Cristo na cruz, é uma
              representação vívida do sacrifício supremo de Cristo pela
              humanidade. Essa cor destaca a centralidade da morte e
              ressurreição de Jesus como o cerne da fé cristã e a fonte de
              esperança para todos os crentes.
            </p>
          </div>
        </li>

        <li className={styles.fiveColoursListItemRight}>
          <img
            className={styles.fiveColoursListItemImage}
            src="../assets/images/garota.jpg"
          />

          <div className={styles.fiveColoursListItemTextWrapper}>
            <strong className={styles.fiveColoursListItemTitleYellow}>
              Amarelo
            </strong>

            <p className={styles.fiveColoursListItemText}>
              Brilhante e radiante, representa a luz do Evangelho. É um lembrete
              do chamado dos cristãos batistas para proclamar a mensagem
              redentora de Cristo a todas as nações, compartilhando a esperança
              e o amor de Deus com o mundo.
            </p>
          </div>
        </li>

        <li className={styles.fiveColoursListItemLeft}>
          <img
            className={styles.fiveColoursListItemImage}
            src="../assets/images/trigo.jpg"
          />

          <div className={styles.fiveColoursListItemTextWrapper}>
            <strong className={styles.fiveColoursListItemTitleGreen}>
              Verde
            </strong>

            <p className={styles.fiveColoursListItemText}>
              Simbolizando crescimento e renovação, representa o contínuo
              desenvolvimento espiritual e a busca por uma vida de discipulado e
              maturidade na fé. É um lembrete da importância do crescimento
              espiritual contínuo e da renovação na jornada cristã.
            </p>
          </div>
        </li>

        <li className={styles.fiveColoursListItemRight}>
          <img
            className={styles.fiveColoursListItemImage}
            src="../assets/images/biblia.jpg"
          />

          <div className={styles.fiveColoursListItemTextWrapper}>
            <strong className={styles.fiveColoursListItemTitleWhite}>
              Branco
            </strong>

            <p className={styles.fiveColoursListItemText}>
              Representando pureza e santidade, destaca a aspiração dos batistas
              por uma vida de retidão e conformidade com os princípios divinos.
              É um lembrete da chamada para viver em santidade e refletir a luz
              de Cristo em um mundo necessitado.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default FiveColours;
