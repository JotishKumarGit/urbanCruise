import React from "react";

function VehicleCard2({ image, title, title2, description, description2, seat, fare }) {
    return (
        <div className="card h-100 vehicle-card p-2 position-relative overflow-visible" style={{ backgroundColor: 'white', }}>
            <div className="position-relative">
                <img src={image} alt="vehicle" className="card-img-top" />
            </div>

            {/* Added extra bottom padding here */}
            <div className="card-body pb-5">
                <h5 className="fw-bold">{title}</h5>
                <h5 className="fw-bold" style={{ color: '#7D7D7D' }}>{title2}</h5>
                <p className="vehicle-description py-2">{description}</p>
                <ul className="py-2">
                    <li>{description2}</li>
                </ul>
                <hr />
                <div className="d-flex justify-content-between fw-bold small">
                    <div>
                        <span className="text-muted">SEAT</span>: {seat}
                    </div>
                    <div>
                        <span className="text-muted">FARE</span>: {fare}
                    </div>
                </div>
            </div>

            {/* Responsive buttons container */}
            <div className="d-flex justify-content-center gap-2 gap-md-4 position-relative px-3 w-100"style={{ bottom: '-20px', flexWrap: 'wrap',zIndex:'1' }}>
                <button className="btn px-4 mb-2" style={{ backgroundColor: '#7ED321', color: 'white' }}>BOOK NOW</button>
                <button className="btn btn-warning px-4 text-white mb-2">READ MORE</button>
            </div>
        </div>
    );
}

export default VehicleCard2;
