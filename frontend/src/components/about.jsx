import React, { useEffect } from 'react';
import '../css/about.css'; 
import cupcakes from '../imgs/cupcakes.jpg';

export const About = () => {
  useEffect(() => {
    const navbarHeight = document.getElementById('navbar')?.offsetHeight;
    document.querySelector('.flex-container').style.marginTop = navbarHeight + 'px';
  }, []);

  return (
    <div className="about-page">
      <div className="flex-container">
      <div className="image-section">
          <img src={cupcakes} alt="Cupcakes" />
        </div>
        <div className="about-us-container">
          <div className="about-us-text">
            <h1>About Master Bake</h1>
            <p>
              Master Bake is a leading bakery factory producing a wide range of treats.
              Our journey started with the passion for creating delicious and quality baked goods
              that bring joy to our customers. From cookies to cakes, we ensure every product is made
              with the finest ingredients and utmost care. A good day starts with Master Bake!
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};
