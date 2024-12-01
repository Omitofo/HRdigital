import React from 'react';
import styles from '../moduleCSS/CookieHeader.module.css';

const CookieHeader = () => {
    return (
        <header className={styles.cookieHeader}>
            {/* Desktop/Tablet Header */}
            <div className={styles.desktopHeader}>
                <h2> Monster Cookies</h2>
            </div>

            {/* Mobile Header (Sticky Bottom) */}
            <div className={styles.mobileHeader}>
                <button className={styles.navButton}>🍪 Home</button>
                <button className={styles.navButton}>📜 About</button>
                <button className={styles.navButton}>📞 Contact</button>
            </div>
        </header>
    );
};

export default CookieHeader;
