import React from 'react';
import '../css/form.css'; // Import your CSS file for form styling
import facebookLogo from '../imgs/facebooklogo.png';
import instaLogo from '../imgs/instalogo.png'; // Import the Instagram logo
import xLogo from '../imgs/xlogo.png'; // Import the X logo
import maillogo from '../imgs/maillogo.png';

export const Form = () => {
  return (
    <section id="contact">
      <h1 className="section-header">Any Queries ?</h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal" role="form">
          <div className="form-group">
            <input type="text" className="form-control" id="name" placeholder="Your Name" name="name" required />
          </div>
          <div className="form-group">
            <input type="email" className="form-control" id="email" placeholder="Your Email" name="email" required />
          </div>
          <div className="form-group">
            <textarea className="form-control" rows="5" placeholder="Your Message" name="message" required></textarea>
          </div>
          <button className="btn btn-primary send-button" type="submit">Send Message</button>
        </form>
        <div className="contact-info">
          <div className="contact-item">
            <p>Address: Suryabinayk, Bhaktapur</p>
          </div>
          <div className="contact-item">
            <p>Phone: +977 9851133669</p>
          </div>
          <div className="contact-item">
            <p>Email: masterbake@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};
