import React, { useEffect } from 'react';
import '../css/about.css'; 
import factoryimg from '../imgs/factoryimg.jfif';
import directorPhoto from '../imgs/directorPhoto.jpg'; // Assuming you have a director photo

export const About = () => {
  useEffect(() => {
    const navbarHeight = document.getElementById('navbar')?.offsetHeight;
    document.querySelector('.flex-container').style.marginTop = navbarHeight + 'px';
  }, []);

  return (
    <div className="about-page">
      <div className="flex-container">
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
        <div className="image-section">
          <img src={factoryimg} alt="Cupcakes" />
        </div>
      </div>
      <div className="board-of-director">
        <div className="meet-directors-heading">
          <h2>Meet Our Directors</h2>
        </div>
        <div className="director-photo">
          <img src={directorPhoto} alt="Board of Directors" />
        </div>
        <div className="director-details">
          <h2>Narayan Pantha</h2>
          <p className="board-of-director-text">Board of Director</p>
          <p>Narayan Pantha is a visionary leader with years of experience in the baking industry. He has been instrumental in driving Master Bake towards excellence and innovation.</p>
        </div>
      </div>
      <div className="vision-container">
        <h2>Our Vision</h2>
        <p>
          At Master Bake, our vision is to redefine the bakery experience by consistently delivering
          exceptional quality products while fostering innovation and sustainability in all aspects
          of our operations.
        </p>
        {/* Add more vision statements or related content here */}
      </div>
    </div>
  );
};
