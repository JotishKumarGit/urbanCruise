
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import WeddingTabs from './WeddingTabs';



const WeddingTravel = () => {


    return (
        <div className="container-fluid py-3" style={{ backgroundColor: '#FDEBD0' }}>
            <div className="container mt-5" >
                <div className="text-center vehicle-banner py-5">
                    <div className="d-inline-block px-3 py-2 vehicle-tag mb-3">
                        <span className="text-orange fw-bold fs-5">A VEHICLE</span>
                    </div>
                    <h2 className="fw-bold text-dark">FOR EVERY GROUP SIZE</h2>
                    <p className="text-muted mt-2">Widest &amp; finest Range of Vehicles!</p>
                    <div className='text-center py-4'>
                        <WeddingTabs />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default WeddingTravel;
