import React from 'react';
import SelectVehicle from '../assets/SELECT-VEHICLE.png';
import Enquiry from '../assets/ENQUIRY.png';
import BookVehicle from '../assets/BOOK-VEHICLE.png';

function HowItWorks() {


    return (
        <div className="steps-section pt-5 pb-3" style={{ backgroundColor: "#E6FCD2" }}>
            <div className="container">
                <div className="text-center mb-5">
                    <span className="badge bg-warning text-dark fs-5 mb-2 px-3 py-2">HOW IT WORKS</span>
                    <h2 className="fw-bold text-dark">BOOK VEHICLE IN 3 STEPS</h2>
                </div>
                <div className="row g-4 text-center py-4">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100 border-0 shadow rounded-4 position-relative">
                            {/* Badge properly positioned at top-left */}
                            <div className="position-absolute top-0 start-0 translate-middle-y fs-5 px-3 text-white" style={{ zIndex: 1, marginTop: '-10px', marginLeft: '30px', backgroundColor: '#ffad0063', borderRadius: '50%', padding: '20px', width: '90px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>1</span>
                            </div>
                            <div className="card-body d-flex pt-4">
                                <div className='' style={{ height: '100%', width: '0%' }}>
                                    <img src={Enquiry} alt="Enquiry Step" className="" style={{ marginTop: '50px' }} />
                                </div>
                                <div>
                                    <h5 className="text-warning fw-bold mb-2">ENQUIRY</h5>
                                    <p className="text-muted text-start" style={{ marginLeft: '120px' }}>
                                        Share your travel plan with us through call, email, WhatsApp, or request a quote.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Step 2 */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100 border-0 shadow rounded-4 position-relative">
                            {/* Badge properly positioned at top-left */}
                            <div className="position-absolute top-0 start-0 translate-middle-y fs-5 px-3 text-white" style={{ zIndex: 1, marginTop: '-10px', marginLeft: '30px', backgroundColor: '#ffad0063', borderRadius: '50%', padding: '20px', width: '90px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>2</span>
                            </div>
                            <div className="card-body d-flex pt-4">
                                <div className='' style={{ height: '100%', width: '0%' }}>
                                    <img src={SelectVehicle} alt="Enquiry Step" className="" style={{ marginTop: '50px' }} />
                                </div>
                                <div>
                                    <h5 className="text-warning fw-bold mb-2">SELECT VEHICLE</h5>
                                    <p className="text-muted text-start" style={{ marginLeft: '120px' }}>
                                        Our team will provide the most suitable vehicle options with the best value pricing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Step 3 */}
                    <div className="col-md-4 mb-5">
                        <div className="card h-100 border-0 shadow rounded-4 position-relative">
                            {/* Badge properly positioned at top-left */}
                            <div className="position-absolute top-0 start-0 translate-middle-y fs-5 px-3 text-white" style={{ zIndex: 1, marginTop: '-10px', marginLeft: '30px', backgroundColor: '#ffad0063', borderRadius: '50%', padding: '20px', width: '90px' }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>3</span>
                            </div>
                            <div className="card-body d-flex pt-4">
                                <div className='' style={{ height: '100%', width: '0%' }}>
                                    <img src={BookVehicle} alt="Enquiry Step" className="" style={{ marginTop: '50px' }} />
                                </div>
                                <div>
                                    <h5 className="text-warning fw-bold mb-2">BOOK VEHICLE</h5>
                                    <p className="text-muted text-start" style={{ marginLeft: '120px' }}>
                                        Book our premium and royal quality vehicles on rent and enjoy a memorable journey.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowItWorks;
