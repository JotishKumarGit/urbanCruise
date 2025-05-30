// components/Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaInstagram, FaTwitter, FaFacebookF, FaYoutube, FaLinkedin } from 'react-icons/fa';
import '../HeaderFooter/css/Navbar.css';

const Footer = () => {
  return (
    <footer className="footer text-white py-5 pb-3">
      <Container>
        <Row>
          <Col md={3}>
            <img src="/logo.png" alt="Urban Cruise" className="footer-logo mb-2" />
            <p className="footer-description">
              Urban Cruise is a BUS RENTAL COMPANY providing One Stop Solution for hiring Car, SUV, Tempo Traveller, MiniBus & Luxury Bus on rent for all your Travel needs in We are available in 7 Cities of India- Mumbai, Thane, Pune, Delhi, Noida, Gurugram, Ghaziabad.
            </p>
          </Col>

          <Col md={2}>
            <h5 className="footer-heading">Company</h5>
            <ul className="list-unstyled">
              <li>ABOUT US</li>
              <li>CONTACT US</li>
              <li>CAREER</li>
              <li>PARTNER</li>
              <li>HAPPY CUSTOMERS</li>
            </ul>
          </Col>

          <Col md={2}>
            <h5 className="footer-heading">Info</h5>
            <ul className="list-unstyled">
              <li>FAQ'S</li>
              <li>BLOG</li>
              <li>NEWS & MEDIA</li>
              <li>PRIVACY</li>
              <li>TERM & CONDITIONS</li>
            </ul>
          </Col>

          <Col md={3}>
            <h5 className="footer-heading">Office Locations</h5>
            <p className="fw-bold mb-1 text-warning">URBAN CRUISE</p>
            <p className="mb-1">B-203, Laxmi Sadan, Thakur Village, Kandivali East, Mumbai – 400101</p>
            <p className="fw-bold mb-0">Phone:</p>
            <p className="mb-1">+91-836-968-1231</p>
            <p className="mb-1">+91-892-894-6056</p>
            <p className="fw-bold mb-0">Email:</p>
            <p>booking@urbancruise.in</p>
          </Col>

          <Col md={2}>
            <h5 className="footer-heading">Follow Us On</h5>
            <div className="d-flex gap-2 mt-2">
              <FaInstagram className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaFacebookF className="social-icon" />
              <FaYoutube className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </Col>
        </Row>

        <hr className="bg-light mt-4" />
        <p className="text-center mt-3 mb-0 py-5">
          © Copyright 2025 Urban Cruise | All Rights Reserved
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
