// src/components/OnlineBooking.js
import React from 'react';
import video from '../assets/about-video.mp4';


const OnlineBooking = () => {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left Side: YouTube Video */}
                <div className="col-md-6 mb-4 mb-md-0">
                    <div className="ratio ratio-16x9">
                        <iframe src={video} title="Urban Cruise - 20 Seater Royal Class" allowFullScreen></iframe>
                    </div>
                </div>
                {/* Right Side: Booking Info */}
                <div className="col-md-6">
                    <span className="badge bg-warning text-dark mb-2 px-3 py-2" style={{ fontSize: '1.1rem' }}>
                        ONLINE BOOKING
                    </span>
                    <h2 className="fw-bold mb-3">ONLINE BOOKING WITH URBAN CRUISE</h2>
                    <p className="text-muted">
                        Urban Cruise is a <strong>Reliable & Trusted Brand</strong> for Bus Rental Services in India.
                        Our Customer First Policy helps us to create <strong>Innovative Products</strong> & Services…
                    </p>
                    <button className="btn px-4 py-2 mt-3 fw-bold text-white shadow-lg" style={{backgroundColor:'#6ac400',borderRadius:'10px',border:'2px solid white'}}>BOOK NOW</button>
                </div>
            </div>
        </div>
    );
};

export default OnlineBooking;
