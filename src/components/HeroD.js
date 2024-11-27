import React from 'react';
import HeroAPic from '../assets/HeroSky.jpg';
import backgroundpic from '../assets/minus.png';
import styles from '../moduleCSS/HeroD.module.css';

const HeroD = ({ changeHero }) => {
    return (
        <div className={styles.banner}>
            <button onClick={() => changeHero('A')} className={styles.heroButton}></button>
            <div className={styles.slider} > 
                <div className={styles.item} style={{ '--position': 1 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 2 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 3 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 4 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 5 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 6 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 7 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 8 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 9 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
                <div className={styles.item} style={{ '--position': 10 }}><img src={HeroAPic} alt='skyscrapers' /></div> 
            </div>
            <div className={styles.content}>
                <h1 className={styles.ache1} data-content="HR" >HR</h1>
                <div className={styles.author}>
                    <h2 className={styles.ache2}>Henrique Rodriguez</h2>
                    <p>Desarrollo Web</p>
                </div>
                <div className={styles.model} style={{ backgroundImage: `url(${backgroundpic})`}}></div>
            </div>
        </div>
    );
};

export default HeroD;


       