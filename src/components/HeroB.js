import React from 'react';
import styles from '../moduleCSS/HeroB.module.css';
import handLeft from '../assets/minus.png';
import HeroImage from '../assets/futuristicroom.jpg'


const HeroB = ({ changeHero }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className={styles.content}>
        <h1>Descubre tu potencial</h1>
        <p>Desafiendo el presente imaginando el futuro</p>
        <button onClick={() => changeHero('C')} className={styles.heroButton}>
          <img src={handLeft} alt="Go to Hero C" />
        </button>
      </div>
    </header>
  );
};

export default HeroB;
