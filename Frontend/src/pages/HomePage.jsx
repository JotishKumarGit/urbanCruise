import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Homepage1 from '../assets/1-Home-Page-2.jpg';
import Homepage2 from '../assets/1-Home-Page-3.jpg';
import bus1 from '../assets/bus-1.jpg';
import bus2 from '../assets/bus-2.jpg';
import bus3 from '../assets/bus-3.avif';
import bus4 from '../assets/bus-4.jpg';
import bus5 from '../assets/bus-5.avif';


function HomePage() {
    return (
        <>
            <Carousel style={{position:'relative', zIndex:'0'}}>
                <Carousel.Item>
                    <img className="d-block w-100" src={bus1} alt="First slide" style={{ height: '87vh' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block " src={bus2} alt="First slide" style={{ height: '87vh' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 " src={bus3} alt="Second slide" style={{ height: '87vh' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100 " src={bus4} alt="First slide" style={{ height: '87vh' }} />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={bus5} alt="Second slide" style={{ height: '87vh' }} />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default HomePage;
