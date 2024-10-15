// HomePage.js - Enhanced Home Page for Islands of Adventure
import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './HomePage.css';
import Carousel from 'react-bootstrap/Carousel';

import diagonAlleyNight from '../assets/images/Diagon-Alleynight.jpg';
import hagridRidePic from '../assets/images/hagridridepic.jpg';
import ioaAtNight from '../assets/images/IOAatNight.jpg';
import universalsIslandsOfAdventure from '../assets/images/UIOA.jpg';



function HomePage() {
    return (
        <div className="container-fluid homepage-container">
            <div className="jumbotron text-center bg-primary text-white">
                <h1 className="display-4">Welcome to Islands of Adventure</h1>
                <p className="lead">Your ultimate adventure awaits! Purchase your tickets and start exploring the magic today.</p>
            </div>

            <div className="text-center">
                <Link to="/purchase-ticket" className="btn btn-success btn-lg m-3">
                    Purchase Ticket
                </Link>
                <Link to="/ride-selection" className="btn btn-outline-light btn-lg m-3">
                    Explore Rides
                </Link>
            </div>

            <div className="carousel-container mt-5">
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={universalsIslandsOfAdventure}
                            alt="Park Entrance"
                        />
                        <Carousel.Caption>
                            <h3>Park Entrance</h3>
                            <p>Experience the excitement as soon as you enter the park.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={hagridRidePic}
                            alt="Hagrid's Magical Creatures Motorbike Adventure"
                        />
                        <Carousel.Caption>
                            <h3>Hagrid's Magical Creatures Motorbike Adventure</h3>
                            <p>Feel the thrill of riding alongside magical creatures.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={diagonAlleyNight}
                            alt="Diagon Alley at Night"
                        />
                        <Carousel.Caption>
                            <h3>Diagon Alley at Night</h3>
                            <p>Enjoy the magical atmosphere under the stars.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={ioaAtNight}
                            alt="Islands of Adventure at Night"
                        />
                        <Carousel.Caption>
                            <h3>Islands of Adventure at Night</h3>
                            <p>See the park light up as the sun sets.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
}

export default HomePage;