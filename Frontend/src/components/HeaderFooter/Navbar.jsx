
import { useState,useEffect } from "react";
import logo from "/logo.png";
import { FaPhone, FaCalendarAlt, FaBars } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './css/Navbar.css';

function Navbar() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1245);
        };

        // Initial check
        handleResize();

        // Event listener
        window.addEventListener('resize', handleResize);

        // Cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <>
            {/* Mobile Navbar */}
            <nav className="navbar d-flex d-lg-none justify-content-between align-items-center px-3" style={{ backgroundColor: "#72d100" }}>
                <a className="navbar-brand" href="#"><img src={logo} alt="Logo" height="40" /></a>
                <button className="btn btn-light" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileSidebar" aria-controls="mobileSidebar"><FaBars /></button>
            </nav>

            {/* Desktop Navbar */}
            <nav className="navbar navbar-expand-lg d-none d-lg-flex" style={{ backgroundColor: "#72d100", position: 'relative', zIndex: '1' }}>
                <div className="container-fluid d-flex justify-content-center">
                    <div className="collapse navbar-collapse d-flex align-items-center justify-content-center text-center" id="navbarNavDropdown">
                        {/* Logo */}
                        {/* <a className="navbar-brand mb-3" href="#"><img src={logo} alt="Logo" height="50" /></a> */}
                        <div className="desktop-logo"
                            style={{
                                position: 'absolute',
                                backgroundColor: '#ffffff',
                                borderRadius: '20px',
                                padding: '10px 20px',
                                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                                display: 'inline-block',
                                marginTop: '-35px', zIndex: '1',
                                top: '0px',
                                left: '200px'
                            }}>
                            <img src={logo} alt="Logo" width={isSmallScreen ? "80" : "200"} height="100" />
                        </div>
                        {/* Nav Links */}
                        <ul className="navbar-nav mb-0" style={{ marginLeft: '250px' }}>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: '16px' }}>ABOUT US</a>
                                <ul className="dropdown-menu" style={{}}>
                                    <li><a className="dropdown-item" href="#">About Us</a></li>
                                    <li><a className="dropdown-item" href="#">Blog</a></li>
                                    <li><a className="dropdown-item" href="#">Carrer</a></li>
                                    <li><a className="dropdown-item" href="#">Partner Program</a></li>
                                    <li><a className="dropdown-item" href="#">Happy Customer</a></li>
                                    <li><a className="dropdown-item" href="#">Contact Us</a></li>
                                </ul>
                            </li>
                            <p className="align-items-center" style={{ height: "35px", width: "0.1px", backgroundColor: "white" }}></p>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: '16px' }}>OUR VEHICLES</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Car & SUVs</a></li>
                                    <li><a className="dropdown-item" href="#">Tempo Traveler</a></li>
                                    <li><a className="dropdown-item" href="#">Mini Bus</a></li>
                                    <li><a className="dropdown-item" href="#">Luxuary Bus</a></li>
                                    <li><a className="dropdown-item" href="#">Luxuary Cars & Suvs</a></li>
                                </ul>
                            </li>
                            <p className="align-items-center" style={{ height: "35px", width: "0.1px", backgroundColor: "white" }}></p>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: '16px' }}>SERVICES</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Wedding Travel</a></li>
                                    <li><a className="dropdown-item" href="#">Corporate Travel</a></li>
                                    <li><a className="dropdown-item" href="#">Vacations</a></li>
                                    <li><a className="dropdown-item" href="#">Local Travel</a></li>
                                </ul>
                            </li>
                            <p className="align-items-center" style={{ height: "35px", width: "0.1px", backgroundColor: "white" }}></p>
                            <li className="nav-item dropdown px-2">
                                <a className="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" style={{ fontSize: '16px' }}>INFO'S</a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">FAQ</a></li>
                                    <li><a className="dropdown-item" href="#">News & Media</a></li>
                                </ul>
                            </li>
                            <p className="align-items-center" style={{ height: "35px", width: "0.1px", backgroundColor: "white" }}></p>
                        </ul>

                        {/* Desktop Buttons */}
                        <div className="d-flex gap-3 mb-3 justify-content-center" style={{ marginLeft: "10px" }}>
                            <button className="btn btn-warning text-white fw-bold px-3" style={{ border: "2px solid white", borderRadius: "10px" }}>
                                <FaCalendarAlt className="me-2" />
                                GET A QUOTE
                            </button>
                            <button className="btn btn-warning text-white fw-bold px-3" style={{ border: "2px solid white", borderRadius: "10px" }}>
                                <FaPhone className="me-2" />
                                (+91) 83 6968 1231
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Offcanvas Sidebar for Mobile */}
            <div className="offcanvas offcanvas-start" tabIndex="-1" id="mobileSidebar" aria-labelledby="mobileSidebarLabel">
                <div className="offcanvas-header" style={{ backgroundColor: "#72d100" }}>
                    <h5 className="offcanvas-title text-white" id="mobileSidebarLabel">Menu</h5>
                    <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <ul className="navbar-nav fw-bold">
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">ABOUT US</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About Us</a></li>
                                <li><a className="dropdown-item" href="#">Blog</a></li>
                                <li><a className="dropdown-item" href="#">Carrer</a></li>
                                <li><a className="dropdown-item" href="#">Partner Program</a></li>
                                <li><a className="dropdown-item" href="#">Happy Customer</a></li>
                                <li><a className="dropdown-item" href="#">Contact Us</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">OUR VEHICLES</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Car & SUVs</a></li>
                                <li><a className="dropdown-item" href="#">Tempo Traveler</a></li>
                                <li><a className="dropdown-item" href="#">Mini Bus</a></li>
                                <li><a className="dropdown-item" href="#">Luxuary Bus</a></li>
                                <li><a className="dropdown-item" href="#">Luxuary Cars & Suvs</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">SERVICES</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Wedding Travel</a></li>
                                <li><a className="dropdown-item" href="#">Corporate Travel</a></li>
                                <li><a className="dropdown-item" href="#">Vacations</a></li>
                                <li><a className="dropdown-item" href="#">Local Travel</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown px-2">
                            <a className="nav-link dropdown-toggle text-dark" href="#" role="button" data-bs-toggle="dropdown">INFO'S</a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">FAQ</a></li>
                                <li><a className="dropdown-item" href="#">Terms</a></li>
                            </ul>
                        </li>
                    </ul>

                    {/* Mobile Buttons */}
                    <div className="d-flex flex-column gap-3 mt-4">
                        <button className="btn btn-warning text-white fw-bold px-3" style={{ border: "2px solid white", borderRadius: "10px" }}>
                            <FaCalendarAlt className="me-2" />
                            GET A QUOTE
                        </button>
                        <button className="btn btn-warning text-white fw-bold px-3" style={{ border: "2px solid white", borderRadius: "10px" }}>
                            <FaPhone className="me-2" />
                            (+91) 83 6968 1231
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
