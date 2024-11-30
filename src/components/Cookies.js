import React, { useEffect, useRef, useState } from 'react';
import Cookie1 from '../assets/Cookies/cookies1.jpg';
import Cookie2 from '../assets/Cookies/cookies2.jpg';
import styles from '../moduleCSS/Cookies.module.css';

const Cookies = ({ changeHero }) => {
    const sliderRef = useRef(null);
    const listRef = useRef(null);
    const [active, setActive] = useState(0); // First image starts active
    const [isFirstRender, setIsFirstRender] = useState(true); // Track first render

    const images = [Cookie1, Cookie2, Cookie1, Cookie2]; // Array of images

    const runCarousel = () => {
        const items = listRef.current?.children;
        if (!items) return;

        // Calculate total width of all items in the list
        const totalWidth = Array.from(items).reduce((acc, item) => acc + item.offsetWidth, 0);

        // Width of the slider container
        const sliderWidth = sliderRef.current.offsetWidth;

        // Center the active image
        const activeItem = items[active];
        const activeWidth = activeItem.offsetWidth;
        const offset = activeItem.offsetLeft + activeWidth / 2 - sliderWidth / 2;

        // Apply the transform to center the active item
        listRef.current.style.transform = `translateX(-${offset}px)`;
    };

    const handlePrev = () => {
        setActive((prev) => (prev === 0 ? prev : prev - 1));
    };

    const handleNext = () => {
        setActive((prev) => (prev === images.length - 1 ? prev : prev + 1)); // Prevent going beyond last item
    };

    useEffect(() => {
        if (isFirstRender) {
            // Initially, disable transition for the first render
            listRef.current.style.transition = 'none';
            setIsFirstRender(false); // After first render, reset
        } else {
            // Enable transition after the first render
            listRef.current.style.transition = 'transform 0.8s ease-in-out';
        }

        runCarousel();
    }, [active, isFirstRender]);

    return (
        <section className={styles.container}>
            <header className={styles.header}>
                <nav>
                    <ul className={styles.navList}>
                        <li>HOME</li>
                        <li>CONTACT</li>
                        <li>ABOUT US</li>
                    </ul>
                </nav>
                <button onClick={() => changeHero('C')} className={styles.heroButton}>
                    Inicio
                </button>
            </header>

            <div className={styles.slider} ref={sliderRef}>
                <div className={styles.list} ref={listRef}>
                    {images.map((imgSrc, index) => (
                        <div
                            key={index}
                            className={`${styles.item} ${index === active ? styles.active : ''}`}
                        >
                            <img
                                className={styles.image}
                                src={imgSrc}
                                alt="cookie"
                            />
                        </div>
                    ))}
                </div>

                <div className={styles.content}>
                    <div className={styles.title}>Monster Cookies</div>
                    <button className={styles.boton}>See more</button>
                </div>

                <div className={styles.arrows}>
                    <button
                        className={`${styles.prev} ${active === 0 ? styles.disabled : ''}`}
                        onClick={handlePrev}
                        disabled={active === 0}
                    >
                        {'<'}
                    </button>
                    <button
                        className={`${styles.next} ${active === images.length - 1 ? styles.disabled : ''}`}
                        onClick={handleNext}
                        disabled={active === images.length - 1}
                    >
                        {'>'}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Cookies;
