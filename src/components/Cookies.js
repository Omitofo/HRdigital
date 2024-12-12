import React, { useState, useRef, useEffect } from 'react';
import Cookie1 from '../assets/Cookies/cookies1.jpg';
import styles from '../moduleCSS/Cookies.module.css';
import CookieHeader from './CookieHeader';

const Cookies = ( {changeHero}) => {
    const [active, setActive] = useState(0);
    const sliderRef = useRef(null);

    const cookiesData = [
        {
            name: 'Chocolate Chip',
            image: Cookie1,
            ingredients: 'Flour, Sugar, Butter, Chocolate Chips',
            description: 'A delicious chocolate chip cookie made with love.',
        },
        {
            name: 'Oatmeal Raisin',
            image: Cookie1,
            ingredients: 'Oats, Raisins, Flour, Butter',
            description: 'A healthy oatmeal raisin cookie with a chewy texture.',
        },
        {
            name: 'Peanut Butter',
            image: Cookie1,
            ingredients: 'Peanut Butter, Sugar, Eggs',
            description: 'A soft peanut butter cookie with a rich flavor.',
        },
        {
            name: 'Double Chocolate',
            image: Cookie1,
            ingredients: 'Cocoa, Chocolate Chips, Butter',
            description: 'A double dose of chocolate for the chocolate lover.',
        },
        {
            name: 'Snickerdoodle',
            image: Cookie1,
            ingredients: 'Cinnamon, Sugar, Flour, Butter',
            description: 'A soft and chewy cookie with a cinnamon-sugar coating.',
        },
        {
            name: 'White Chocolate',
            image: Cookie1,
            ingredients: 'White Chocolate Chips, Flour, Sugar, Butter',
            description: 'A creamy white chocolate cookie that melts in your mouth.',
        },
    ];

    const handleNext = () => {
        if (active < cookiesData.length - 1) {
            setActive((prev) => prev + 1);
        }
    };

    const handlePrev = () => {
        if (active > 0) {
            setActive((prev) => prev - 1);
        }
    };

    useEffect(() => {
        if (sliderRef.current) {
            sliderRef.current.style.transform = `translateX(-${active * 100}%)`;
        }
    }, [active]);

    return (
        <section className={styles.cookiesContainer}>
            <CookieHeader changeHero={changeHero} />
            <div className={styles.tituloCabezera}><h1>Monster Cookies</h1></div>
            <div className={styles.cookiesContent}>
                {/* Image and Text Carousel */}
                <div className={styles.carouselSection}>
                    <div className={styles.cookiesSliderWrapper}>
                        <div className={styles.cookiesSlider} ref={sliderRef}>
                            {cookiesData.map((cookie, index) => (
                                <div
                                    key={index}
                                    className={`${styles.cookiesSlide} ${index === active ? styles.active : ''}`}
                                >
                                    <div className={styles.slideContent}>
                                        <img
                                            src={cookie.image}
                                            alt={cookie.name}
                                            className={styles.cookiesImage}
                                        />
                                        
                                        <div className={styles.textInfo}>
                                        <h2 className={styles.cookiesName}>{cookie.name}</h2>
                                            <div className={styles.cookiesIngredients}>
                                                <h3>Ingredients</h3>
                                                <p>{cookie.ingredients}</p>
                                            </div>
                                            <div className={styles.cookiesDescription}>
                                                <h3>Description</h3>
                                                <p>{cookie.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <button
                        className={`${styles.cookiesArrow} ${styles.left}`}
                        onClick={handlePrev}
                        disabled={active === 0}
                    >
                        {'<'}
                    </button>
                    <button
                        className={`${styles.cookiesArrow} ${styles.right}`}
                        onClick={handleNext}
                        disabled={active === cookiesData.length - 1}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cookies;
