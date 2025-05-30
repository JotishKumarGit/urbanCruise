// SocialMediaBar.js
import React from 'react';
import { FaFacebookF, FaXTwitter, FaLinkedinIn, FaYoutube, FaInstagram } from 'react-icons/fa6';

const SocialMediaBar = () => {
  return (
    <div
      className="position-fixed top-50 start-0 translate-middle-y d-flex flex-column align-items-center"
      style={{ zIndex: 1000 }}
    >
      <a href="https://facebook.com" className="btn btn-primary rounded-circle m-1" style={{ width: '40px', height: '40px' }}>
        <FaFacebookF />
      </a>
      <a href="https://x.com" className="btn btn-dark rounded-circle m-1" style={{ width: '40px', height: '40px' }}>
        <FaXTwitter />
      </a>
      <a href="https://linkedin.com" className="btn btn-info rounded-circle m-1 text-white" style={{ width: '40px', height: '40px' }}>
        <FaLinkedinIn />
      </a>
      <a href="https://youtube.com" className="btn btn-danger rounded-circle m-1" style={{ width: '40px', height: '40px' }}>
        <FaYoutube />
      </a>
      <a href="https://instagram.com" className="btn rounded-circle m-1 text-white" style={{ width: '40px', height: '40px', background: 'linear-gradient(45deg, #feda75, #d62976, #962fbf)' }}>
        <FaInstagram />
      </a>
    </div>
  );
};

export default SocialMediaBar;
