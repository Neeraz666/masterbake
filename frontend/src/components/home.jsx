import React, { useEffect } from 'react';
import '../css/home.css';
// import '../css/menu.css';
// import '../css/offers.css';
import xpimg1 from '../imgs/xp.jpg';
import xpimg2 from '../imgs/xp2.jpg';
import chef from '../imgs/chef.png';
import { Carousel } from './carousel';

export const Home = () => {
    useEffect(() => {
        const images = document.querySelectorAll('.gallery img');
        const dots = document.querySelectorAll('.dot');

        if (images.length === 0 || dots.length === 0) {
            console.error('Gallery images or dots not found.');
            return;
        }

        let currentIndex = 0;
        const totalImages = images.length;

        function showImage(index) {
            if (!images[currentIndex] || !dots[currentIndex]) return;
            images[currentIndex].classList.remove('active');
            dots[currentIndex].classList.remove('active');
            currentIndex = index;
            images[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        function showNextImage() {
            const nextIndex = (currentIndex + 1) % totalImages;
            showImage(nextIndex);
        }

        const intervalId = setInterval(showNextImage, 3500);

        dots.forEach(dot => {
            dot.addEventListener('click', () => {
                const index = parseInt(dot.getAttribute('data-index'), 10);
                showImage(index);
            });
        });

        // Cleanup function to clear the interval when the component unmounts
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="gallery">
                <img src={xpimg1} alt="Delicious dish" className="active" />
                <img src={xpimg2} alt="Another delicious dish" />
                <img src={chef} alt="Chef preparing food" />
                {/* <!-- Add more images as needed --> */}
                <div className="pagination">
                    <span className="dot active" data-index="0"></span>
                    <span className="dot" data-index="1"></span>
                    <span className="dot" data-index="2"></span>
                    {/* <!-- Add more dots corresponding to images --> */}
                </div>
            </div>
            <Carousel />
        </>
    );
};
