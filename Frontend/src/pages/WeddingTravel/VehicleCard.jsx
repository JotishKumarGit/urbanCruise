import React from "react";
import '../../pages/Commoncss.css';

function VehicleCard({ image, logo, title, description, seat, fare }) {
  return (
    <div className="card vehicle-card p-2 position-relative overflow-visible">
      <div className="position-relative">
        <img src={image} alt="vehicle" className="card-img-top" />
        <img src={logo} alt="logo" className="vehicle-logo" />
      </div>
      <div className="card-body pb-5"> {/* Add bottom padding so content doesn't overlap with buttons */}
        <h5 className="fw-bold">{title}</h5>
        <p className="vehicle-description">{description}</p>
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

      {/* Buttons half outside */}
      <div
        className="d-flex justify-content-center gap-5 position-absolute px-3 w-100" style={{ bottom: '-20px' }}>
        <button className="btn px-4" style={{ backgroundColor: '#7ED321', color: 'white' }}>BOOK NOW</button>
        <button className="btn btn-warning px-4 text-white">READ MORE</button>
      </div>
    </div>
  );
}

export default VehicleCard;
