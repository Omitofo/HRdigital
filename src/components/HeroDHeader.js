import React, { useState, useEffect, useRef } from 'react';
import styles from '../moduleCSS/HeroDHeader.module.css';
import HomeIcon from '../assets/home.png';
import InfoIcon from '../assets/atom.png';
import CartIcon from '../assets/exit2red.png';
import ShoppingCart from '../assets/shoppingCart.png';
import { translations } from './Translations';

const HeaderHeroD = ({ changeHero, language, handleLanguageChange }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <header className={styles.headerHeroD}>
      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <div className={styles.navLinks}>
          <h2>{translations[language].header.home}</h2>
          <h2>{translations[language].header.servers}</h2>
          <h2>{translations[language].header.shop}</h2>
          <h2>{translations[language].header.discord}</h2>
        </div>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => changeHero('E')}>
            <img src={CartIcon} alt={translations[language].header.cookies} className={styles.iconImage} />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <button className={styles.navButton} onClick={toggleDropdown}>
          <img src={HomeIcon} alt={translations[language].header.home} className={styles.iconImage} />
        </button>
        <button className={styles.navButton}>
          <img src={InfoIcon} alt="Info" className={styles.iconImage} />
        </button>
        <button className={styles.navButton}>
          <img src={ShoppingCart} alt="Exit" className={styles.iconImage} />
        </button>
        <button className={styles.navButton} onClick={() => changeHero('E')}>
          <img src={CartIcon} alt={translations[language].header.cookies} className={styles.iconImage} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div
          className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.active : ''}`}
          ref={dropdownRef}
        >
          <h3>{translations[language].header.home}</h3>
          <h3>{translations[language].header.servers}</h3>
          <h3>{translations[language].header.shop}</h3>
          <h3>{translations[language].header.discord}</h3>
        </div>
      )}

      {/* Language Toggle Buttons */}
     
    </header>
  );
};

export default HeaderHeroD;
