
import '../../pages/Commoncss.css';
import VehicleCard from './VehicleCard';
import logo from '../../assets/logo.png';
import image from '../../assets/Mini-Bus1.png';
import image2 from '../../assets/Mini-bus2.jpg';
import tempo from '../../assets/tempo-1.png';
import tempo2 from '../../assets/tempo-2.png';
import car from '../../assets/car-1.png';
import car2 from '../../assets/car-2.jpg';
import luxury from '../../assets/Luxury-bus-1.jpg';
import luxury2 from '../../assets/Luxury-Bus-2.png';

function WeddingTabs() {


    return (

        <>
            <div className="custom-tabs container-fluid">
                <ul className="nav nav-tabs flex-wrap justify-content-center">
                    <li className="nav-item">
                        <a className="nav-link active" data-bs-toggle="tab" href="#tab1" style={{ borderRadius: '50px 0 0 50px' }}>TEMPO TRAVELLER</a>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab2">MINI BUS</a>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="divider d-none d-md-block" />
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab3">LUXURY BUS</a>
                    </li><p style={{height:'10px',border:'0.5px solid white'}}></p>
                    <li className="divider d-none d-md-block" />
                    <li className="nav-item">
                        <a className="nav-link" data-bs-toggle="tab" href="#tab4" style={{ borderRadius: '0 50px 50px 0' }}>CAR &amp; SUV</a>
                    </li>
                </ul>
            </div>
            {/* for content */}
            <div class="tab-content mt-3">
                <div class="tab-pane fade show active" id="tab1">
                    <div className="container  mt-5 d-flex gap-4">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <VehicleCard image={tempo} logo={logo} title="Force Traveller / Tata Winger" description="Monocoque Chassis make this Van an ideal & comfortable Travel, Companion for Medium size Groups. This comes in following Configurations- 1- Economy (Basic) 2- Premium (PKN/Alius) 3- Royal (1x1 VIP Maharaja Seats" seat="12 to 26 seater" fare="Starts from Rs. 17/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard image={tempo2} logo={logo} title="Force Traveller / Tata Winger" description="Monocoque Chassis make this Van an ideal & comfortable Travel, Companion for Medium size Groups. This comes in following Configurations- 1- Economy (Basic) 2- Premium (PKN/Alius) 3- Royal (1x1 VIP Maharaja Seats" seat="12 to 26 seater" fare="Starts from Rs. 17/Km" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab2">
                    <div className="container mt-5 d-flex gap-4">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <VehicleCard image={image} logo={logo} title="SML, Eicher, Tata, Leyland, Benz" description="MiniBuses play important role in fulfilling Travel Requirements of Medium Size Groups of 25 to 35 people. Along with TATA & Ashok Leylan, SML & Eicher Buses are also popular." seat="SEAT: 20 to 35 seater" fare="FARE: Starts from Rs. 22/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard image={image2} logo={logo} title="SML, Eicher, Tata, Leyland, Benz" description="MiniBuses play important role in fulfilling Travel Requirements of Medium Size Groups of 25 to 35 people. Along with TATA & Ashok Leylan, SML & Eicher Buses are also popular." seat="SEAT: 20 to 35 seater" fare="FARE: Starts from Rs. 22/Km" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab3">
                    <div className="container mt-5 d-flex gap-4">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <VehicleCard image={luxury} logo={logo} title="Tata, Leyland, Volvo, Benz" description="Full size Luxury Buses are the best Travel option for Large Groups to keep chit-chatting along the panoramic views of highway. Premium Bus- Tata/Ashok Leyland, Royal Bus- Benz, Volvo" seat="SEAT: 35 to 50 seater " fare="FARE: Starts from Rs. 35/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard image={luxury2} logo={logo} title="Tata, Leyland, Volvo, Benz" description="Full size Luxury Buses are the best Travel option for Large Groups to keep chit-chatting along the panoramic views of highway. Premium Bus- Tata/Ashok Leyland, Royal Bus- Benz, Volvo" seat="SEAT: 35 to 50 seater " fare="FARE: Starts from Rs. 35/Km" />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="tab4">
                    <div className="container mt-5 d-flex gap-4">
                        <div className="row">
                            <div className="col-md-6 mb-5">
                                <VehicleCard image={car} logo={logo} title="Dzire, Etios, City" description="With 2 row seating, its ideal for 3 to 4 people. Economy - Etios/Dzire | Premium - City | Royal - Mercedez, AUDI, BMW for Weddings & Corporates." seat="SEAT: 3 to 4 seater" fare="FARE: Starts from Rs. 22/Km" />
                            </div>
                            <div className="col-md-6">
                                <VehicleCard image={car2} logo={logo} title="Dzire, Etios, City" description="With 2 row seating, its ideal for 3 to 4 people. Economy - Etios/Dzire | Premium - City | Royal - Mercedez, AUDI, BMW for Weddings & Corporates." seat="SEAT: 3 to 4 seater" fare="FARE: Starts from Rs. 22/Km" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default WeddingTabs;
