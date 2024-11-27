import React from 'react';
import styles from '../moduleCSS/HeroA.module.css';
import handRight from '../assets/plus.png';
import HeroImage from '../assets/HeroSky.jpg'

const HeroA = ({ changeHero }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className={styles.content}>
        <h1>Atrevete a soñar</h1>
        <p>Separate de la competencia y alcanza nuevas alturas</p>
        <button onClick={() => changeHero('B')} className={styles.heroButton}>
          <img src={handRight} alt="Go to Hero B" />
        </button>
      </div>
    </header>
  );
};

export default HeroA;
