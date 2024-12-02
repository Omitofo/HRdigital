import React from 'react';
import styles from '../moduleCSS/CookieHeader.module.css';
import HomeIcon from '../assets/home.png';
import ContactIcon from '../assets/contact.png';
import AboutIcon from '../assets/aboutUs.png';


const CookieHeader = () => {
    return (
        <header className={styles.cookieHeader}>
            {/* Desktop/Tablet Header */}
            <div className={styles.desktopHeader}>
                <h2> HOME </h2>
                <h2> ABOUT US</h2>
                <h2>CONTACT</h2>
                <h2> ALL COOKIES</h2>
            </div>

            {/* Mobile Header (Sticky Bottom) */}
            <div className={styles.mobileHeader}>
                <button className={styles.navButton}> <img src={HomeIcon} alt="Home" className={styles.iconImage} /></button>
                <button className={styles.navButton}> <img src={AboutIcon} alt="About Us" className={styles.iconImage} /></button>
                <button className={styles.navButton}>  <img src={ContactIcon} alt="About Us" className={styles.iconImage} /></button>
                <button className={styles.navButton}>🍪</button>

            </div>
        </header>
    );
};

export default CookieHeader;
