import React from 'react';
import backgroundpic from '../assets/two.png';
import Space from '../assets/abyss.jpg';
import styles from '../moduleCSS/HeroD.module.css';

const HeroD = ({ changeHero }) => {
    return (
        <>
        <div className={styles.banner}>

            <div className={styles.space}><img src={Space} alt="space" /></div>
            <button onClick={() => changeHero('A')} className={styles.heroButton}> Únete a la lucha </button>

            <div className={styles.slider}>
               
                <div className={styles.item} style={{ '--position': 2 }}><h2 className={styles.words}>Welcome</h2></div>
               
                <div className={styles.item} style={{ '--position': 4 }}><h2 className={styles.words}>Bienvenido</h2></div>
                
                <div className={styles.item} style={{ '--position': 6 }}><h2 className={styles.words}>欢迎 </h2></div>
                
                <div className={styles.item} style={{ '--position': 8 }}><h2 className={styles.words}>Willkommen</h2></div>
              
                <div className={styles.item} style={{ '--position': 10 }}><h2 className={styles.words}>ようこそ</h2></div>
              
                <div className={styles.item} style={{ '--position': 12 }}><h2 className={styles.words}>Maligayang pagdating </h2></div>
            
                <div className={styles.item} style={{ '--position': 14 }}><h2 className={styles.words}>환영합니다</h2></div>
               {/* <div className={styles.item} style={{ '--position': 15 }}><img src={Planet1} alt="planet" /></div>*/}
            </div>

            <div className={styles.content}>
                <h1 className={styles.ache1} data-content="HR">
                    HR
                </h1>
                <div className={styles.author}>
                    <p className={styles.parrafo}>Desarrollo Web</p>
                </div>
                <div className={styles.parrafo2}>
                    <p>En un rincón olvidado del universo, donde las estrellas cuentan secretos a quienes saben escuchar, las ciudades flotan entre las nubes de gas y las razas más extrañas comparten mercados intergalácticos. Pero algo se avecina, una sombra que amenaza con borrar todo lo que conocemos...</p>
                </div>
                <div className={styles.model} style={{ backgroundImage: `url(${backgroundpic})` }}></div>
            </div>

        </div>

       
        
        </>
    );
};

export default HeroD;
