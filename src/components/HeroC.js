import React from 'react';
import styles from '../moduleCSS/HeroC.module.css';
import HeroImage from '../assets/room.jpg'
import buttonImage from '../assets/atom.png';

const HeroC = ({ changeHero }) => {
  return (
    <header
      className={styles.hero}
      style={{ backgroundImage: `url(${HeroImage})` }}
    >
      <div className={styles.content}>
        <button onClick={() => changeHero('D')} className={styles.heroButton}> <img src={buttonImage} alt='nexticon'/> </button>
      </div>
    </header>
  );
};

export default HeroC;
