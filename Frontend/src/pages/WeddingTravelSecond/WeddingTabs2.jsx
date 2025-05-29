import React from 'react';
import VehicleCard2 from './VehicleCard2';
import weddingTrave1 from '../../assets/wedding-travel-1.jpg';
import weddingTrave2 from '../../assets/wedding-travel-2.jpg';
import oneWay1 from '../../assets/one-way-1.jpg';
import oneWay2 from '../../assets/one-way-2.jpg';
import corporateTravel1 from '../../assets/Corporate-travel-1.jpg';
import corporateTravel2 from '../../assets/Corporate-travel-2.jpg';
import vacation1 from '../../assets/vacations-1.jpg';
import vacation2 from '../../assets/vacations-2.jpg';
import localTravel1 from '../../assets/localTravel-1.jpg';
import localTravel2 from '../../assets/local-travel-2.jpg';

function WeddingTabs2() {
    return (
        <>
            <div className="custom-tabs container-fluid">
                <ul className="nav nav-tabs flex-wrap justify-content-center" id="travelTabs" role="tablist">
                    <li className="nav-item" role="presentation">
                        <button className="nav-link active" id="wedding-tab" data-bs-toggle="tab" data-bs-target="#wedding" type="button" role="tab" aria-controls="wedding" aria-selected="true" style={{ borderRadius: '50px 0 0 50px' }}>
                            WEDDING TRAVEL
                        </button>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="corporate-tab" data-bs-toggle="tab" data-bs-target="#corporate" type="button" role="tab" aria-controls="corporate" aria-selected="false">
                            CORPORATE TRAVEL
                        </button>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="vacation-tab" data-bs-toggle="tab" data-bs-target="#vacation" type="button" role="tab" aria-controls="vacation" aria-selected="false">
                            VACATIONS
                        </button>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="local-tab" data-bs-toggle="tab" data-bs-target="#local" type="button" role="tab" aria-controls="local" aria-selected="false">
                            LOCAL TRAVEL
                        </button>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="nav-item" role="presentation">
                        <button className="nav-link" id="oneway-tab" data-bs-toggle="tab" data-bs-target="#oneway" type="button" role="tab" aria-controls="oneway" aria-selected="false" style={{ borderRadius: '0 50px 50px 0' }}>
                            ONE WAY
                        </button>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                </ul>
            </div>

            <div className="tab-content mt-3" id="travelTabsContent">
                {/* WEDDING */}
                <div className="tab-pane fade show active " id="wedding" role="tabpanel" aria-labelledby="wedding-tab">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <VehicleCard2 image={weddingTrave1} title="WEDDING CAR RENTAL" description="One Stop Solution for Wedding related Travel requirements. Leave your worries behind & contact us for all your Travel requirements for Weddings..." description2="Royal Luxury Cars for Bride & Groom - like Mercedez Benz, AUDI, BMW, Jaguar, Bently, Land Rover, Limousine, Vintage Cars etc. for Rent on Hourly basis." seat="SEAT: 4 to 7 seater" fare="FARE: Starts from Rs. 20/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard2 image={weddingTrave2} title="WEDDING CAR RENTAL" description="One Stop Solution for Wedding related Travel requirements. Leave your worries behind & contact us for all your Travel requirements for Weddings..." description2="Wedding Guest Transportation – Royal Class Tempo Travellers, Mini Buses & Buses for an elite Class experience for your Wedding Guest to travel from Hotel to Wedding Venue ..." seat="SEAT: 10 to 50 seater" fare="FARE: Starts from Rs. 20/Km" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* CORPORATE */}
                <div className="tab-pane fade" id="corporate" role="tabpanel" aria-labelledby="corporate-tab">
                    <div className="container mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <VehicleCard2 image={corporateTravel1} title="CORPORATE BUS RENTAL" title2="(MICE, Staff Transportation)" description="MICE Events – Outbound team event or a company excursion or Annual Meet? Everything will be smooth & on Time with us." description2="Executive Transportation – Daily Commute for Senior Executives or a Vehicle for each Department. We are there for you." seat="SEAT: 4 to 7 seater " fare="FARE: Starts from Rs. 12/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard2 image={corporateTravel2} title="CORPORATE BUS RENTAL" title2="" description="MICE Events – Outbound team event or a company excursion or Annual Meet? Everything will be smooth & on Time with us." description2="Executive Transportation – Daily Commute for Senior Executives or a Vehicle for each Department. We are there for you." seat="SEAT: 4 to 7 seater " fare="FARE: Starts from Rs. 12/Km" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* VACATIONS */}
                <div className="tab-pane fade" id="vacation" role="tabpanel" aria-labelledby="vacation-tab">
                    <div className="container  mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <VehicleCard2 image={vacation1} title="Vacation / Holiday Tours" title2="Curated Sightseeing Tours across 7 cities in India." description="Holiday Tours – Sightseeing tours for one day Picnics, Weekend Holidays, Weekend Trips, Long Vacations, bachelor parties, All Ladies Tour etc.." description2="Amusement Parks & Cruise – You can also book a bus for Day trip to Amusement Parks, to Cruise Trips etc." seat="SEAT : 4 to 50 seater " fare="FARE : Starts from Rs. 14/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard2 image={vacation2} title="Pilgrimage, School, College Tours" title2="Curated Sightseeing Tours across 7 cities in India." description="Pilgrimage Tours – for a memorable Spiritual Experience with Vehicle, Hotel, Pandit & Arti Booking as well." description2="School/College Tours – A One-day School/College Picnic or a College Reunion Trip or a Multi-day excursion, we have the right vehicle for you." seat="SEAT : 4 to 7 seater " fare=" FARE : Starts from Rs. 12/Km" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* LOCAL */}
                <div className="tab-pane fade" id="local" role="tabpanel" aria-labelledby="local-tab">
                    <div className="container  mt-5">
                        <div className="row">
                            <div className="col-md-6">
                                <VehicleCard2 image={localTravel1} title="Airport & Railway Station Transfer " title2="Want to Catch Flight on Time! Try our airport Transfers" description="Reliable – Most Reliable Service for catching Flights & Trains on time." description2="No Last Minute Cancellation – Once vehicle is Confirmed, there will not be any cancellation at the last minute." seat="SEAT : 4 to 7 seater " fare="FARE : Starts from Rs. 12/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard2 image={localTravel2} title="Local City Tours" title2="Local City Tourist Attractions, Shopping, Food & many more things to do in a City.." description="City Tours – Mumbai Darshan, Delhi Darshan, 1/2/3 day Tours & many more cities." description2="Tour Itinerary – Along with vehicles, we provide Daywise Itinerary as well to make the best use of your time." seat="SEAT : 4 to 7 seater " fare=" FARE : Starts from Rs. 12/Km" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* ONE WAY */}
                <div className="tab-pane fade " id="oneway" role="tabpanel" aria-labelledby="oneway-tab">
                    <div className="container mt-5">
                        <div className="row ">
                            <div className="col-md-6">
                                <VehicleCard2 image={oneWay1} title="Car/SUV for One Way Travel" description="Mumbai to Many Cities – One Way Travel from Mumbai to many Cities." description2="Low Cost – Enjoy our One Way Taxi Service at Affordable Fares." seat="SEAT : 4 to 7 seater " fare="FARE : Starts from Rs. 12/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard2 image={oneWay2} title="Traveller / MiniBus for One Way" description="Mumbai to Many Cities – One Way Travel from Mumbai to many Cities." description2="Low Cost – Enjoy our One Way Taxi Service at Affordable Fares." seat="SEAT : 4 to 7 seater " fare="FARE : Starts from Rs. 12/Km" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default WeddingTabs2;
