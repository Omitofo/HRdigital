import React from 'react';
import styles from '../moduleCSS/CookieHeader.module.css';
import HomeIcon from '../assets/home.png';
import ContactIcon from '../assets/contact.png';
import ShoppingCartIcon from '../assets/shoppingCart.png';
import exitIcon from '../assets/exit2green.png'


const CookieHeader = ( {changeHero}) => {
    return (
        <header className={styles.cookieHeader}>
            {/* Desktop/Tablet Header */}
            <div className={styles.desktopHeader}>
                <h2> HOME </h2>
                <h2> ABOUT US</h2>
                <h2> CONTACT</h2>
                <h2> ALL COOKIES</h2>
                <button className={styles.navButton}> <img src={ShoppingCartIcon} alt="Shopping Cart" className={styles.iconImage} /></button>
                <button onClick={() => changeHero('C')} className={styles.heroButton}> <img src={exitIcon} alt="exit" className={styles.iconImage}/></button>

            </div>

            {/* Mobile Header (Sticky Bottom) */}
            <div className={styles.mobileHeader}>
                <button onClick={() => changeHero('C')}  className={styles.navButton}> <img src={HomeIcon} alt="Home" className={styles.iconImage} /></button>
                <button className={styles.navButton}> <img src={ShoppingCartIcon} alt="Shopping Cart" className={styles.iconImage} /></button>
                <button className={styles.navButton}>  <img src={ContactIcon} alt="Contact" className={styles.iconImage} /></button>
                <button className={styles.navButton}>🍪</button>

            </div>
        </header>
    );
};

export default CookieHeader;
