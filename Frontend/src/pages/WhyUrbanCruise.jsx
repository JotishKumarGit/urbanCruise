import React from 'react';
import why1 from '../assets/why-1.jpg';
import why2 from '../assets/why-2.jpg';
import why3 from '../assets/why-3.jpg';
import why4 from '../assets/why-4.jpg';
import why5 from '../assets/why-5.jpg';
import why6 from '../assets/why-6.jpg';

const WhyUrbanCruise = () => {

    return (
        <div className="container-fluid py-4" style={{ backgroundColor: '#E6FCD2' }}>
            <div className="container">
                <div className="text-center mb-4">
                    <h4 className="text-warning" style={{backgroundColor:''}}>WHY URBAN CRUISE</h4>
                    <h2 className="fw-bold">IS THE BEST CHOICE</h2>
                    <p className="text-muted">
                        A Reliable & Trusted Brand for Bus Rental Services in India. Our Customer First Policy helps us to create Innovative Products & Services
                    </p>
                </div>

                <div className="row text-center">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4"  >
                        <div className="card h-100 shadow-lg " style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }} >
                            <img src={why1} alt="Bus" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body" >
                                <h5 className="fw-bold">Widest Range of Vehicles</h5>
                                <ul className="text-start">
                                    <li>5 seater to 50 seater Premium & Royal Class Vehicles</li>
                                    <li>Designed for Superior Travel Comfort</li>
                                    <li>Luxurious Amenities – Individual A/c Vents, Ambient Lighting, Mobile Charging Points</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow" style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }}>
                            <img src={why2} alt="Driver" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">Experienced Drivers</h5>
                                <ul className="text-start">
                                    <li>Trained for Defensive & Safe Driving and Google Maps</li>
                                    <li>Experienced, Polite & Courteous Drivers</li>
                                    <li>Drivers arrive on Time for Pick-up at your Door Step</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow" style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }}>
                            <img src={why3} alt="Customer Support" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">24×7 Customer Support</h5>
                                <ul className="text-start">
                                    <li>Our Travel Advisors will assist you in Vehicle Selection</li>
                                    <li>Get the Exact vehicle & Same Amenities as shown in Vehicle Brochure</li>
                                    <li>Our Customer Care Team will be there at every step</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow" style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }}>
                            <img src={why4} alt="Customer Support" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">Transparent Pricing</h5>
                                <ul className="text-start">
                                    <li>No Hidden Cost- Rate Quotation shows all charges</li>
                                    <li>No Over Pricing- Final Billing as per Rate Quotation only.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow" style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }}>
                            <img src={why5} alt="Customer Support" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">COVID SAFETY SHIELD</h5>
                                <ul className="text-start">
                                    <li>Sanitised & Deep Vacuum Cleaned Vehicles</li>
                                    <li>Vaccinated Drivers</li>
                                    <li>Driver Isolation Partition in Vehicle.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card h-100 shadow" style={{ borderRadius: '20px', borderRight: '3px solid grey', borderBottom: '3px solid grey' }}>
                            <img src={why6} alt="Customer Support" className="card-img-top" style={{ borderRadius: '20px 20px 0 0px' }} />
                            <div className="card-body">
                                <h5 className="fw-bold">No Last Minute Cancellations</h5>
                                <ul className="text-start">
                                    <li>Once your booking is confirmed by us, rest assured about vehicle & service.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyUrbanCruise;
