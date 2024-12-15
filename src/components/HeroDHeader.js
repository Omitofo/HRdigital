import React, { useState } from 'react';
import styles from '../moduleCSS/HeroDHeader.module.css';
import HomeIcon from '../assets/home.png';
import InfoIcon from '../assets/atom.png';
import CartIcon from '../assets/exit2red.png';
import ExitIcon from '../assets/exit.png';

const HeaderHeroD = ({ changeHero }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className={styles.headerHeroD}>
      {/* Desktop Header */}
      <div className={styles.desktopHeader}>
        <div className={styles.navLinks}>
          <h2>HOME</h2>
          <h2>SERVERS</h2>
          <h2>SHOP</h2>
        </div>
        <div className={styles.navButtons}>
          <button className={styles.navButton} onClick={() => changeHero('E')}>
            <img src={CartIcon} alt="Cookies" className={styles.iconImage} />
          </button>
          <button className={styles.navButton}>
            <img src={ExitIcon} alt="Exit" className={styles.iconImage} />
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className={styles.mobileHeader}>
        <button className={styles.navButton} onClick={toggleDropdown}>
          <img src={HomeIcon} alt="Home" className={styles.iconImage} />
        </button>
        <button className={styles.navButton}>
          <img src={InfoIcon} alt="Info" className={styles.iconImage} />
        </button>
        <button className={styles.navButton} onClick={() => changeHero('E')}>
          <img src={CartIcon} alt="Cookies" className={styles.iconImage} />
        </button>
        <button className={styles.navButton}>
          <img src={ExitIcon} alt="Exit" className={styles.iconImage} />
        </button>
      </div>

      {/* Dropdown Menu */}
      {isDropdownOpen && (
        <div className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.active : ''}`}>
          <h3 onClick={() => alert('Navigating to Home...')}>HOME</h3>
          <h3 onClick={() => alert('Navigating to Servers...')}>SERVERS</h3>
          <h3 onClick={() => alert('Navigating to Shop...')}>SHOP</h3>
        </div>
      )}
    </header>
  );
};

export default HeaderHeroD;
