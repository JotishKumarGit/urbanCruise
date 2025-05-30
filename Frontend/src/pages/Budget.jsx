import React from 'react';
import vip from '../assets/vip.png';
import PREMIUM from '../assets/PREMIUM.png';
import ROYAL from '../assets/ROYAL.png';
import ECONOMY from '../assets/ECONOMY.png';
import '../pages/Commoncss.css';


function Budget() {


    return (
        <>
            <div className="text-center py-5 bg-white">
                <div className="mb-4">
                    <span className="badge fs-4" style={{backgroundColor:'#FFE6AC', color:'#F7941D', fontWeight: 'normal'}}>A CAR/SUV</span>
                </div>
                <h2 className="fw-bold mb-2">FOR EVERY BUDGET</h2>
                <p className="text-muted">3 Category of CARs & SUVs to suit every budget</p>

                <div className="container mt-4 ">
                    <div className="row g-4 py-5 justify-content-center" >
                        {/* ECONOMY */}
                        <div className="col-md-3 mb-5" >
                            <div className=" h-100 p-4 rounded shadow-sm position-relative" style={{ background: '#d5d628', padding: '20px' }}>
                                <img src={ECONOMY} alt="" style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '80px', borderRadius: '40px' }} />
                                <h4 className="fw-bold mt-4">ECONOMY</h4>
                                <p>Vehicles with basic Amenities for Budget Travellers.</p>
                            </div>
                        </div>
                        {/* PREMIUM */}
                        <div className="col-md-3 mb-5" >
                            <div className=" h-100 p-4 rounded shadow-sm position-relative" style={{ background: '#21EF2E', padding: '20px' }}>
                                <img src={PREMIUM} alt="" style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '80px', borderRadius: '40px' }} />
                                <h4 className="fw-bold mt-4">PREMIUM</h4>
                                <p>Vehicles with Best-in-class Amenities for Superior Passengers.</p>
                            </div>
                        </div>
                        {/* ROYAL */}
                        <div className="col-md-3 mb-5" >
                            <div className="  h-100 p-4 rounded shadow-sm position-relative" style={{ background: '#D61C67', padding: '20px' }}>
                                <img src={ROYAL} alt="" style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '80px', borderRadius: '40px' }} />
                                <h4 className="fw-bold mt-4 text-white">ROYAL</h4>
                                <p className='text-white'>Ultra Luxury Vehicles with Custom Designed Amenities for an Elite Ride.</p>
                            </div>
                        </div>
                        {/* ROYAL VIP */}
                        <div className="col-md-3 mb-5" >
                            <div className=" h-100 p-4 rounded shadow-sm position-relative" style={{ background: '#C77AE4', padding: '20px' }}>
                                <img src={vip} alt="" style={{ position: 'absolute', top: '-50px', left: '50%', transform: 'translateX(-50%)', width: '100px', height: '80px', borderRadius: '40px' }} />
                                <h4 className="fw-bold text-white mt-4">ROYAL VIP</h4>
                                <p className='text-white'>Ultra Luxury Vehicles with Custom Designed Amenities & Personal Chauffeur.</p>
                            </div>
                        </div>
                    </div>
                    <div className="contact-banner d-flex justify-content-between align-items-center">
                        <div>
                            <div className="small-text">DO YOU STILL HAVE QUESTIONS?</div>
                            <div className="main-text">
                                REACH OUT TO US FOR DETAILED CLARIFICATION OF ALL YOUR QUERIES
                            </div>
                        </div>
                        <a href="#contact" className="btn contact-button">
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Budget;


