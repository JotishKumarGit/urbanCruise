
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import WeddingTabs2 from './WeddingTabs2';


const WeddingTravel2 = () => {

    return (
        <div className="container-fluid py-3" style={{ backgroundColor: '#fff' }}>
            <div className="container mt-5" >
                <div className="text-center vehicle-banner py-5">
                    <div className="d-inline-block px-3 py-2 vehicle-tag mb-3">
                        <span className="text-orange fw-bold fs-5">A VEHICLE</span>
                    </div>
                    <h2 className="fw-bold text-dark">FOR EVERY OCCASION</h2>
                    <p className="text-muted mt-2">Whatever is the occasion for traveling, we have the right vehicle for you!.</p>
                    <div className='text-center py-4'>
                        <WeddingTabs2 />
                    </div>
                </div>
                {/* faq */}
                <div className="contact-banner d-flex justify-content-between align-items-center">
                    <div>
                        <div className="small-text">DO YOU HAVE QUESTIONS?</div>
                        <div className="main-text">
                            VISIT OUR FAQ PAGE FOR CLARIFICATION OF YOUR QUERIES
                        </div>
                    </div>
                    <a href="#contact" className="btn contact-button">
                        FAQ
                    </a>
                </div>
            </div>
        </div>
    );
};

export default WeddingTravel2;
