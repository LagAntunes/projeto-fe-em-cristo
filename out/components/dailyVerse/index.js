import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

function DailyVerse() {
  const [verseText, setVerseText] = useState('Carregando...');
  const [verseReference, setVerseReference] = useState('');

  const fetchVerse = () => {
    fetch('https://www.abibliadigital.com.br/api/verses/acf/random')
      .then(response => response.json())
      .then(data => {
        const verseText = data.text;
        const verseReference = `${data.book.name} ${data.chapter}:${data.number}`;
        setVerseText(verseText);
        setVerseReference(verseReference);
      })
      .catch(error => {
        console.error('Erro ao obter versículo:', error);
        setVerseText('Não foi possível carregar o versículo.');
      });
  };

  useEffect(() => {
    fetchVerse();
  }, []);

  return (
    <div className={styles.dailyVerse} id='dailyVerseContainer'>
      <div className={styles.dailyVerseWrapper}>
        <strong className={styles.dailyVerseTitle}>Receba aqui a sua mensagem diária da <span className={styles.dailyVerseSpan}>Bíblia Sagrada</span> e do evangelho do nosso salvador <span className={styles.dailyVerseSpan}>Jesus Cristo</span></strong>
        <p className={styles.dailyVerseText}>{verseText}</p>
        <p className={styles.dailyVerseReference}>{verseReference}</p>
      </div>
      <button onClick={fetchVerse} className={styles.dailyVerseButton}>
        <span className={styles.dailyVerseButtonSpan}>
          Carregar Novo Versículo
        </span>
      </button>
    </div>
  );
}

export default DailyVerse;
