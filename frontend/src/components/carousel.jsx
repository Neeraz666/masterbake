import React, { useEffect, useState } from 'react';
import '../css/carousel.css';
// import '../css/menu.css';
// import '../css/offers.css';
import xpimg1 from '../imgs/xp.jpg';
import xpimg2 from '../imgs/xp2.jpg';
import chef from '../imgs/chef.png';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [xpimg1, xpimg2, chef];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    return (
        <>
            <div className='ourproduct'>
                <h1>Our Products</h1>
            </div>
            <div className="carousel">
                <button className="prev" onClick={goToPrevSlide}>Prev</button>
                <div className="card">
                    <img src={images[currentIndex]} alt="jbasj" className="card__image" />
                    <div className="card__content">
                        <h2 className="card__title">Hello</h2>
                        <p className="card__description">sakjasbf</p>
                    </div>
                </div>
                <button className="next" onClick={goToNextSlide}>Next</button>
            </div>
        </>
    );
};
