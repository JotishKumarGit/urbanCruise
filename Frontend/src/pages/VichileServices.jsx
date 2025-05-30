import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import insta from '../assets/insta.png';
import facebook from '../assets/faceboook.png';
import google from '../assets/google.png';
import YouTube from '../assets/youtube.png';

import '../pages/Commoncss.css';
// 
import mumbai from '../assets/mumbai.png';
import jaipur from '../assets/jaipur.png';
import ahemdabad from '../assets/ahemdabad.png';
import delhi from '../assets/delhi.png';
import noida from '../assets/noida.png';
import gurugram from '../assets/gurugram.png';
import pune from '../assets/pune.png';
import thane from '../assets/thane.png';
import agra from '../assets/agra.png';
import ghaziabad from '../assets/Ghaziabad.webp';


function VichileServices() {

    return (
        <>
            <Container className="text-center my-5">
                <div className="mb-3">
                    <span className="badge  fs-4" style={{backgroundColor:'#FFE6AC', color:'#F7941D', fontWeight: 'normal'}}>MOST LIKED & HIGH RATED</span>
                </div>
                <h2 className="fw-bold mb-5">BUS RENTAL SERVICE IN INDIA</h2>

                <Row className="gy-4">
                    <Col md={3} xs={12}>
                        <img src={google} alt="Google" height="60" />
                        <div className="mt-2">
                            <strong>4.7</strong>{" "}
                            <span className="text-warning">★★★★★</span>
                            <p className="mb-0">3000+ Reviews</p>
                        </div>
                    </Col>

                    <Col md={3} xs={12}>
                        <img src={facebook} alt="Facebook" height="60" />
                        <p className="mt-3 mb-0">9000+</p>
                        <p>Page Likes & Followers</p>
                    </Col>

                    <Col md={3} xs={12}>
                        <img src={YouTube} alt="YouTube" height="60" />
                        <p className="mt-3 mb-0">400+ Subscribers</p>
                        <p>7000+ Views</p>
                    </Col>

                    <Col md={3} xs={12}>
                        <img src={insta} alt="Instagram" height="60" />
                        <p className="mt-3 mb-0">1000+</p>
                        <p>Page Likes & Followers</p>
                    </Col>
                </Row>
            </Container>

            {/*  */}
            <div className="container text-center  my-5">
                <h5 className='badge fs-4' style={{ backgroundColor:'#FFE6AC', color:'#F7941D', fontWeight: 'normal', display: 'inline-block', padding: '5px 15px', borderRadius: '5px' }}>
                    VEHICLES & SERVICES
                </h5>
                <h3 className="my-4" style={{ fontWeight: 'bold' }}>AVAILABLE IN BELOW CITIES</h3>

                <div className="row justify-content-center">
                    {[
                        { name: "Mumbai", img: mumbai },
                        { name: "Thane", img: thane },
                        { name: "Pune", img: pune },
                        { name: "Ahmedabad", img: ahemdabad },
                        { name: "Delhi", img: delhi },
                        { name: "Noida", img: noida },
                        { name: "Gurugram", img: gurugram },
                        { name: "Ghaziabad", img: ghaziabad },
                        { name: "Jaipur", img: jaipur },
                        { name: "Agra", img: agra }
                    ].map((city, index) => (
                        <div className="col-md-2 col-4 my-3" key={index}>
                            <div className="card shadow-lg " style={{ borderRadius: '15px', borderBottom: '3px solid #70e000',borderRight: '3px solid #70e000', transition: 'transform 0.2s', height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                                <div className="card-body d-flex flex-column justify-content-center align-items-center">
                                    <img src={city.img} alt={city.name} style={{ height: '70px', objectFit: 'contain' }} />
                                    <h6 className="mt-3 text-uppercase" style={{ fontWeight: '500', fontSize: '14px' }}>{city.name}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default VichileServices;
