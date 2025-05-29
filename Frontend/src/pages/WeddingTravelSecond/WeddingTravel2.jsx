
import React, { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import WeddingTabs2 from './WeddingTabs2';


const WeddingTravel2 = () => {

    return (
        <div className="container-fluid py-3" style={{ backgroundColor: '#FDEBD0' }}>
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
            </div>
        </div>

    );
};

export default WeddingTravel2;
