import React from 'react';
import { FaWhatsapp, FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';

const FloatingContactButtons = () => {
    return (
        <div style={{ position: 'fixed', top: '40%', right: '20px', zIndex: 1000, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
            <button className="btn btn-warning rounded-circle p-2">
                <FaWhatsapp color="white" className='fs-3' />
            </button>
            <button className="btn btn-warning rounded-circle p-2">
                <FaPhone color="white" className='fs-3' />
            </button>
            <button className="btn btn-warning rounded-circle p-2">
                <FaEnvelope color="white" className='fs-3' />
            </button>
        </div>
    );
};

export default FloatingContactButtons;
