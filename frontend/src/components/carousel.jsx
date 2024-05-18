import React, { useEffect, useState } from 'react';
import '../css/carousel.css';
import xpimg1 from '../imgs/xp.jpg';
import xpimg2 from '../imgs/xp2.jpg';
import chef from '../imgs/chef.png';
import bake from '../imgs/bake.png';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const images = [xpimg1, xpimg2, chef, bake];

    const totalImages = images.length;
    const cardsToShow = 3;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % totalImages);
        }, 4000);

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, [totalImages]);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? totalImages - cardsToShow : prevIndex - cardsToShow + totalImages) % totalImages);
    };

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % totalImages);
    };

    const getDisplayedImages = () => {
        const indices = [];
        for (let i = 0; i < cardsToShow; i++) {
            indices.push((currentIndex + i) % totalImages);
        }
        return indices;
    };

    return (
        <>
            <div className='ourproduct'>
                <h1>Our Products</h1>
            </div>
            <div className="carousel">
                <button className="prev" onClick={goToPrevSlide}>Prev</button>
                <div className="cards-container">
                    {getDisplayedImages().map(index => (
                        <div className="card" key={index}>
                            <img src={images[index]} alt={`Image ${index}`} className="card__image" />
                            <div className="card__content">
                                <h2 className="card__title">Hello</h2>
                                <p className="card__description">Description for image {index}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="next" onClick={goToNextSlide}>Next</button>
            </div>
        </>
    );
};
