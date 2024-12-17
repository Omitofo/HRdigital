import React, { useState, useEffect } from 'react';
import { translations } from '../components/Translations';
import HeaderHeroD from './HeroDHeader';
import backgroundpic from '../assets/two.png';
import styles from '../moduleCSS/HeroD.module.css';
import US from '../assets/us.png'; // English flag
import spain from '../assets/spain.png'; // Spanish flag
import japan from '../assets/japan.png'; // Japanese flag
import korea from '../assets/southkorea.png'; // Korean flag
import philippines from '../assets/philippines.png'; // Tagalog flag
import germany from '../assets/germany.png'; // German flag

const HeroD = ({ changeHero }) => {
  const [language, setLanguage] = useState('ja'); // Default language is Japanese

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleLanguageToggle = (newLanguage) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = translations[language]; // Translations based on the selected language

  return (
    <>
      <div className={styles.banner}>
        <HeaderHeroD
          changeHero={changeHero}
          language={language} // Pass the language state to HeaderHeroD
          handleLanguageChange={handleLanguageToggle} // Pass the toggle function to HeaderHeroD
        />

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

        <h1 className={styles.ache1} data-content={t.h1Title}>
          {t.h1Title}
        </h1>

        <div className={styles.parrafo2}>
          <p>{t.description}</p>
        </div>

        <div className={styles.model} style={{ backgroundImage: `url(${backgroundpic})` }}></div>
      </div>
    </>
  );
};

export default HeroD;
