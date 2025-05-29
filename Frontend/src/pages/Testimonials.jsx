// TestimonialSlider.js
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import test1 from '../assets/test-1.jpg';
import test2 from '../assets/test-2.jpg';
import test3 from '../assets/test-3.jpg';
import test4 from '../assets/test-4.jpg';
import test5 from '../assets/test-5.jpg';
import test6 from '../assets/test-6.jpg';
import avatar1 from '../assets/tests1.jpeg';
import avatar2 from '../assets/tests2.jpg';
import avatar3 from '../assets/avtar3.jpg';
import avatar4 from '../assets/avtar4.jpg';
import avatar5 from '../assets/avtar5.jpg';
import avatar6 from '../assets/avtar6.jpg';

const testimonials = [
    {
        image: test1,
        avatar: avatar1,
        name: 'Harshad Lad',
        role: '',
        rating: 5,
        review: 'I had booked twice (37 Seater & 49 Seater Buses) for office picnic to Lonavala. As per my previous experience this time also I had a very good experience.',
    },
    {
        image: test2,
        avatar: avatar2,
        name: 'Illa Parikh',
        role: 'Frequent Traveller',
        rating: 5,
        review: 'The Driver was very courteous, Bus was comfortable. All-in-All it was a happy Cruising with Urban Cruise.',
    },
    {
        image: test3,
        avatar: avatar3,
        name: 'Prakash Gupta',
        role: 'CEO, PPM Logistics',
        rating: 5,
        review: 'They promptly arranged the Bus at very short notice. The Bus was very neat & clean & full of amenities. Highly recommended.',
    },
    {
        image: test4,
        avatar: avatar4,
        name: 'Simone Dsouza',
        role: 'Regular Client',
        rating: 5,
        review: 'Good experience with a bus on hire company. Coordinating with Neha, to the driver Guddu Singh being on time, till the return was excellent. Thanks Urban Cruise.',
    },
    {
        image: test5,
        avatar: avatar5,
        name: 'Jitendra Yadav',
        role: '',
        rating: 5,
        review: 'There was no hidden cost. Driver was very polite & of good behavior. It was wonderful tour for us. Highly recommended.',
    },
    {
        image: test6,
        avatar: avatar6,
        name: 'Harshad Lad',
        role: '',
        rating: 5,
        review: 'I had booked twice (37 Seater & 49 Seater Buses) for office picnic to Lonavala. As per my previous experience this time also I had a very good & Comfortable Journey.',
    }
];

const Testimonials = () => {
    return (
        <div className="container py-5">
            <div className="text-center mb-4">
                <span className="badge fs-4" style={{ color: '#FFE5A3', backgroundColor: '#F98C00' }}>TESTIMONIALS</span>
                <h2 className="fw-bold mt-2">A GALAXY OF HAPPY CUSTOMERS</h2>
            </div>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                breakpoints={{
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
                className="pb-5" // add bottom padding for dots
            >
                {testimonials.map((item, index) => (
                    <SwiperSlide key={index} className="">
                        <div className="card border-0 shadow rounded-4 p-3 h-100 d-flex flex-column justify-content-between" style={{ backgroundColor: '#FAFAFA', minHeight: '500px' }}>
                            <img src={item.image} alt="testimonial" className="card-img-top rounded-3" style={{ height: '250px', objectFit: 'cover' }} />
                            <div className="card-body d-flex flex-column justify-content-between">
                                <div className="d-flex align-items-center mb-2">
                                    <img src={item.avatar} alt="user" className="rounded-circle me-2" width="40" height="40" />
                                    <div>
                                        <h6 className="mb-0 fw-bold">{item.name}</h6>
                                        <small className="text-muted">{item.role}</small>
                                    </div>
                                </div>
                                <div className="text-warning mb-2">
                                    {'★'.repeat(item.rating)}
                                    {'☆'.repeat(5 - item.rating)}
                                </div>
                                <p className="fst-italic">{item.review}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            {/* contact  us */}
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
    );
};

export default Testimonials;
