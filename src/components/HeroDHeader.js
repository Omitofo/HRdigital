import React, { useState, useEffect, useRef } from 'react';
import styles from '../moduleCSS/HeroDHeader.module.css';
import HomeIcon from '../assets/home.png';
import InfoIcon from '../assets/atom.png';
import CartIcon from '../assets/exit2red.png';
import ExitIcon from '../assets/exit.png';

const HeaderHeroD = ({ changeHero }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = (event) => {
    // Evitar que el clic se propague al manejador de clics fuera
    event.stopPropagation();
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Cerrar el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    // Agregar el event listener al montar el componente
    document.addEventListener('click', handleClickOutside);

    // Limpiar el event listener al desmontar el componente
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

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
        <div
          className={`${styles.dropdownMenu} ${isDropdownOpen ? styles.active : ''}`}
          ref={dropdownRef}
        >
          <h3>HOME</h3>
          <h3>SERVERS</h3>
          <h3>SHOP</h3>
        </div>
      )}
    </header>
  );
};

export default HeaderHeroD;
