import React from 'react';
import video from '../assets/about-video.mp4';


function AboutUs() {
    return (
        <>
            <div className='' style={{ backgroundColor: '#fff' }}>
                <div className="text-center py-4" style={{ width: "fit-content", margin: "-70px auto 0", padding: "10px 20px", position: 'relative', zIndex: '0' }}>
                    <h4 className="text-white mb-0 fw-bold" style={{backgroundColor: "#72d100", borderTopLeftRadius: "20px", borderTopRightRadius: "20px", padding: '10px' }}>GET A QUICK CALL</h4>
                    <div className="bg-white d-flex flex-wrap align-items-center justify-content-center p-3 mt-2 shadow" style={{ borderBottomLeftRadius: "20px", borderBottomRightRadius: "20px", }}>
                        <input type="text" className="form-control m-2 p-3" placeholder="Name" style={{ maxWidth: "200px" }} />
                        <div className="input-group m-2" style={{ maxWidth: "220px" }}>
                            <span className="input-group-text">
                                <img src="https://flagcdn.com/w40/in.png" alt="India" width="20" height="15" />
                            </span>
                            <input type="text" className="form-control p-3" placeholder="Phone Number" />
                        </div>
                        <button className="btn btn-warning text-white fw-bold m-2 px-5 py-3" style={{ boxShadow: "0px 2px 8px rgba(0,0,0,0.2)",border:'2px solid white' }}>SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row align-items-center">
                    {/* Left Content */}
                    <div className="col-md-6">
                        <div className="mb-3">
                            <span className="px-3 py-1 fs-4 rounded" style={{backgroundColor:'#FFE6AC',color:'#F7941D'}}>ABOUT</span>
                        </div>
                        <h2 className="fw-bold mb-3">URBAN CRUISE</h2>
                        <p style={{ color: '#5c5c5c', fontWeight: '400' }}>
                            Urban Cruise is a <strong>Bus Rental Service</strong> providing One Stop Solution for hiring Car, SUV, Tempo
                            Traveller, MiniBus & Luxury Bus on rent for all your Travel needs in We are available in <strong>in 7 Cities of India -</strong>
                            <span className="fw-bold text-warning"> Mumbai</span>, Thane, Pune, Delhi, Noida, Gurugram, Ghaziabad.
                        </p>
                        <p style={{ color: '#5c5c5c', fontWeight: '400' }}>
                            Our Fleet consists of Custom Designed & Modified <strong>Tata Winger</strong>, <strong>Tempo Traveller</strong>, <strong>MiniBus</strong> &
                            <strong> Luxury Bus</strong> with <strong>Best-in-Class Amenities</strong> for Superior Passenger Comfort. We deploy <strong>Trained & Experienced Drivers</strong>
                            for a Comfortable Ride & Peace of mind. This comes with <strong>Affordable Pricing</strong> & <strong>Hassel Free Booking</strong> backed by our
                            <strong> Reliable Customer Service</strong> at every step of your journey.
                        </p>
                        <a href="" style={{backgroundColor: "#72d100",border:"3px solid white",borderRadius:'10px'}} className="btn shadow-lg px-4 py-2 mt-3">READ MORE</a>
                    </div>

                    {/* Right Video */}
                    <div className="col-md-6 mt-4 mt-md-0">
                        <div className="ratio ratio-16x9">
                            <iframe src={video} title="Urban Cruise - Bus Rental Services" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutUs;
