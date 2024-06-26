import React, { useEffect } from 'react';
import '../css/about.css';
import bakeryimg from '../imgs/bakeryimg.jpg';
import team from '../imgs/team.jpg'; // Import your team image here

export const About = () => {
  useEffect(() => {
    const navbarHeight = document.getElementById('navbar')?.offsetHeight;
    document.querySelector('.about-page').style.marginTop = navbarHeight + 'px';
  }, []);

  return (
    <div className="about-page">
      <div className="image-section">
        <img src={bakeryimg} alt="Bakery" />
      </div>
      <div className="about-us-container">
        <div className="about-us-heading">
          <h3>About Master Bake</h3>
        </div>
        <div className="about-us-text">
          <p>
            Master Bake is a leading bakery factory producing a wide range of treats.
            Our journey started with the passion for creating delicious and quality baked goods
            that bring joy to our customers. From cookies to cakes, we ensure every product is made
            with the finest ingredients and utmost care. A good day starts with Master Bake!
          </p>
        </div>
      </div>
      <div className="team-image-section">
        <img src={team} alt="Team" />
      </div>
      <div className="team-heading-section">
        <h3>Meet Our Team</h3>
      </div>
      <div className="team-paragraph-section">
        <p>
        Meet the incredible individuals who make Master Bake a success. Our team is comprised of passionate bakers, creative thinkers, and dedicated professionals, all working together to bring you the finest baked goods. With years of experience and a commitment to excellence, we continually. 
        </p>
      </div>
    </div>
  );
};
