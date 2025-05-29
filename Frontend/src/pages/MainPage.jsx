import React from 'react';
import HomePage from '../pages/HomePage';
import AboutUs from './AboutUs';
import VichileServices from './VichileServices';
import HowitWork from './HowitWork';
import Budget from './Budget';
import WeddingTravel from './WeddingTravel/WeddingTravel';
import WeddingTravel2 from './WeddingTravelSecond/WeddingTravel2';
import WhyUrbanCruise from './WhyUrbanCruise';
import Testimonials from './Testimonials';
import Faq from './Faq';
import OnlineBooking from './OnlineBooking';


function MainPage() {
    return (
        <>
            <HomePage />
            <AboutUs />
            <VichileServices />
            <HowitWork />
            <Budget />
            <WeddingTravel />
            <WeddingTravel2 />
            <WhyUrbanCruise />
            <Testimonials />
            <Faq />
            <OnlineBooking />
        </>
    )
}

export default MainPage;
