import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Homepage1 from '../assets/1-Home-Page-2.jpg';
import Homepage2 from '../assets/1-Home-Page-3.jpg';
import bus1 from '../assets/bus-1.jpg';
// import bus2 from '../assets/bus-2.jpg';
// import bus3 from '../assets/bus-3.avif';
// import bus4 from '../assets/bus-4.jpg';
import bus5 from '../assets/bus-5.avif';
import '../pages/Commoncss.css';

function HomePage() {
    return (
        <>
            <Carousel style={{ position: 'relative', zIndex: '0' }}>
                <Carousel.Item>
                    <img className="d-block w-100" src={bus1} alt="First slide" style={{ height: '87vh', objectFit: 'cover' }} />
                    <Carousel.Caption className="custom-caption">
                        <h2> <span className="highlight"> Creating Happy Memories</span></h2>
                        <h4 className="sub-heading fw-bold">India's Most Preferred Bus Rental Company</h4>
                        <p className='fs-3 fw-bold'>Experience our Premium & Royal Class Cars, SUVs, Tempo Travellers, MiniBus & Bus for a memorable Ride...</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Add caption on more slides if needed */}
                <Carousel.Item>
                    <img className="d-block w-100" src={bus5} alt="Second slide" style={{ height: '87vh', objectFit: 'cover' }} />
                    <Carousel.Caption className="custom-caption">
                        <h2> <span className="highlight"> Welcome to Urban Cruise</span></h2>
                        <h4 className="sub-heading fw-bold">India's Most Preferred Bus Rental Company</h4>
                        <p className='fs-3 fw-bold'>Experience our Premium & Royal Class Cars, SUVs, Tempo Travellers, MiniBus & Bus for a memorable Ride...</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default HomePage;
