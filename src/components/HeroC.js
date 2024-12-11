import React from 'react';
import styles from '../moduleCSS/HeroC.module.css';
import HeroImage from '../assets/room.jpg'


const HeroC = ({ changeHero }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className={styles.content}>
        <h1>Bienvenido a mi estudio</h1>
        <p>cuéntame, ¿qué quieres diseñar?</p>
        <button onClick={() => changeHero('D')} className={styles.heroButton}> - </button>
      </div>
    </header>
  );
};

export default HeroC;
