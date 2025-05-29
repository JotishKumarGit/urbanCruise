import React from 'react';
import HomePage from '../pages/HomePage';
import AboutUs from './AboutUs';
import VichileServices from './VichileServices';
import HowitWork from './HowitWork';
import Budget from './Budget';
import WeddingTravel from './WeddingTravel/WeddingTravel';
import WeddingTravel2 from './WeddingTravelSecond/WeddingTravel2';


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
        </>
    )
}

export default MainPage;
