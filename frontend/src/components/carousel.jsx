import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/carousel.css';

export const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [data, setData] = useState([]);
    const cardsToShow = 3;

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/product/category');
                setData(response.data.results);
            } catch (error) {
                console.error('Error fetching data: ', error);
            }
        };
        fetchData();
    }, []);

    const totalImages = data.length;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + cardsToShow) % totalImages);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, [totalImages, cardsToShow]);

    const goToPrevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - cardsToShow + totalImages) % totalImages);
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
        <div className='carouselcontainer'>
            <div className='ourproduct'>
                <h1>Our Products</h1>
            </div>
            <div className="carousel">
                <button className="prev" onClick={goToPrevSlide}>Prev</button>
                <div className="cards-container">
                    {getDisplayedImages().map(index => (
                        data[index] && (
                            <div className="card" key={index}>
                                <img src={data[index].image} alt={`Image ${index}`} className="card__image" />
                                <div className="card__content">
                                    <h2 className="card__title">{data[index].name}</h2>
                                    <p className="card__description">{data[index].description}</p>
                                </div>
                            </div>
                        )
                    ))}
                </div>
                <button className="next" onClick={goToNextSlide}>Next</button>
            </div>
            </div>
        </>
    );
};
