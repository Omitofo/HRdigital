import React, { useState, useEffect } from 'react';
import { translations } from '../components/Translations'; 
import backgroundpic from '../assets/two.png';
import styles from '../moduleCSS/HeroD.module.css';
import US from '../assets/us.png'; // English flagA
import spain from '../assets/spain.png'; // Spanish flag
import japan from '../assets/japan.png'; // Japanese flag
import korea from '../assets/southkorea.png'; // Korean flag
import philippines from '../assets/philippines.png'; // Tagalog flag
import germany from '../assets/germany.png'; // German flag

const HeroD = ({ changeHero }) => {
    const [language, setLanguage] = useState('ja'); // Default language is English

    useEffect(() => {
        // Check if there is a stored language in localStorage
        const savedLanguage = localStorage.getItem('language');
        if (savedLanguage) {
            setLanguage(savedLanguage);
        }
    }, []);

    const handleLanguageToggle = (newLanguage) => {
        // Change language and save it to localStorage
        setLanguage(newLanguage);
        localStorage.setItem('language', newLanguage);
    };

    const t = translations[language]; // Get the translations for the selected language

    return (
        <>
            <div className={styles.banner}>
            <header className={styles.arriba}>
                <div className={styles.navLeft}>
                    <h3 className={styles.navarriba}>{t.community}</h3>
                    <h3 className={styles.navarriba}>{t.servers}</h3>
                    <h3 className={styles.navarriba}>{t.blog}</h3>
                </div>
                <div className={styles.navRight}>
                    <button className={styles.authButton}>{t.logIn}</button>
                    <button className={styles.authButton}>{t.signUp}</button>
                </div>
            </header>



                {/* Language selection buttons */}
                <div className={styles.languageButtons}>
                    <button onClick={() => handleLanguageToggle('en')} className={styles.languageButton}>
                        <img src={US} alt="English" className={styles.flagIcon} />
                    </button>
                    <button onClick={() => handleLanguageToggle('es')} className={styles.languageButton}>
                        <img src={spain} alt="Español" className={styles.flagIcon} />
                    </button>
                    <button onClick={() => handleLanguageToggle('ja')} className={styles.languageButton}>
                        <img src={japan} alt="Japanese" className={styles.flagIcon} />
                    </button>
                    <button onClick={() => handleLanguageToggle('ko')} className={styles.languageButton}>
                        <img src={korea} alt="Korean" className={styles.flagIcon} />
                    </button>
                    <button onClick={() => handleLanguageToggle('tl')} className={styles.languageButton}>
                        <img src={philippines} alt="Tagalog" className={styles.flagIcon} />
                    </button>
                    <button onClick={() => handleLanguageToggle('de')} className={styles.languageButton}>
                        <img src={germany} alt="German" className={styles.flagIcon} />
                    </button>
                </div>

                <button onClick={() => changeHero('E')} className={styles.heroButton}>
                    {t.joinTheFight}
                </button>

                <div className={styles.slider}>
                    <div className={styles.item} style={{ '--position': 2 }}>
                        <h2 className={styles.words}>Welcome</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 4 }}>
                        <h2 className={styles.words}>Bienvenido</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 6 }}>
                        <h2 className={styles.words}>欢迎</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 8 }}>
                        <h2 className={styles.words}>Willkommen</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 10 }}>
                        <h2 className={styles.words}>ようこそ</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 12 }}>
                        <h2 className={styles.words}>Maligayang pagdating</h2>
                    </div>
                    <div className={styles.item} style={{ '--position': 14 }}>
                        <h2 className={styles.words}>환영합니다</h2>
                    </div>
                </div>

                <div className={styles.content}>
                    <h1 className={styles.ache1} data-content="HR">
                        HR
                    </h1>
                    <div className={styles.author}>
                        <p className={styles.parrafo}>{t.development}</p>
                    </div>
                    <div className={styles.parrafo2}>
                        <p>{t.description}</p>
                    </div>
                    <div className={styles.model} style={{ backgroundImage: `url(${backgroundpic})` }}></div>
                </div>
            </div>
        </>
    );
};

export default HeroD;
