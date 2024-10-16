import React from 'react';
import caroSeusselRide from '../assets/images/ride_images/caro_seussel_ride.jpg';
import catInTheHatRide from '../assets/images/ride_images/cat_in_the_hat_ride.jpg';
import doctorDoomFearFallRide from '../assets/images/ride_images/doctor_doom_fear_fall_ride.jpg';
import dudleyDoRightRide from '../assets/images/ride_images/dudley_do_rights_ripsaw_falls_ride.jpg';
import flightHippogriffRide from '../assets/images/ride_images/flight_of_the_hippogriff_ride.jpg';
import forbiddenJourneyRide from '../assets/images/ride_images/forbidden_journey_ride.jpg';
import hagridsRide from '../assets/images/ride_images/hagrids_magical_creatures_motorbike_adventure_coaster_ride.jpg';
import highInSkyRide from '../assets/images/ride_images/high_in_the_sky_ride.jpg';
import jurassicParkRiverRide from '../assets/images/ride_images/jurassic_park_river_adventure_ride.jpg';
import jurassicWorldRide from '../assets/images/ride_images/velocicoaster_ride.jpeg';
import oneFishTwoFishRide from '../assets/images/ride_images/onefish_twofish_ride.jpg';
import popeyeRide from '../assets/images/ride_images/popeye_and_blutos_bilgerat_barges_ride.jpeg';
import skullIslandRide from '../assets/images/ride_images/skull_island_reign_of_kong_ride.jpg';
import spiderManRide from '../assets/images/ride_images/spder_man_ride.jpg';
import stormForceRide from '../assets/images/ride_images/stormforce_acclectron_ride.jpg';
import hulkCoasterRide from '../assets/images/ride_images/the_hulk_coaster_ride.jpg';



function RideSelectionPage() {
    return (
        <div className="ride-selection-container">
            <h1>Select Your Ride</h1>
            <div className="ride-grid">
                {/* Ride Items */}
                <div className="ride-item">
                    <img src={caroSeusselRide} alt="Caro Seussel Ride" />
                    <p>Caro Seussel Ride</p>
                </div>
                <div className="ride-item">
                    <img src={catInTheHatRide} alt="Cat in the Hat Ride" />
                    <p>Cat in the Hat Ride</p>
                </div>
                <div className="ride-item">
                    <img src={doctorDoomFearFallRide} alt="Doctor Doom Fear Fall Ride" />
                    <p>Doctor Doom Fear Fall Ride</p>
                </div>
                <div className="ride-item">
                    <img src={dudleyDoRightRide} alt="Dudley Do-Right’s Ripsaw Falls Ride" />
                    <p>Dudley Do-Right’s Ripsaw Falls Ride</p>
                </div>
                <div className="ride-item">
                    <img src={flightHippogriffRide} alt="Flight of the Hippogriff Ride" />
                    <p>Flight of the Hippogriff Ride</p>
                </div>
                <div className="ride-item">
                    <img src={forbiddenJourneyRide} alt="Forbidden Journey Ride" />
                    <p>Forbidden Journey Ride</p>
                </div>
                <div className="ride-item">
                    <img src={hagridsRide} alt="Hagrid's Magical Creatures Motorbike Adventure Ride" />
                    <p>Hagrid's Magical Creatures Motorbike Adventure Ride</p>
                </div>
                <div className="ride-item">
                    <img src={highInSkyRide} alt="High in the Sky Ride" />
                    <p>High in the Sky Ride</p>
                </div>
                <div className="ride-item">
                    <img src={jurassicParkRiverRide} alt="Jurassic Park River Adventure Ride" />
                    <p>Jurassic Park River Adventure Ride</p>
                </div>
                <div className="ride-item">
                    <img src={jurassicWorldRide} alt="Jurassic World Velocicoaster Ride" />
                    <p>Jurassic World Velocicoaster Ride</p>
                </div>
                <div className="ride-item">
                    <img src={oneFishTwoFishRide} alt="One Fish Two Fish Ride" />
                    <p>One Fish Two Fish Ride</p>
                </div>
                <div className="ride-item">
                    <img src={popeyeRide} alt="Popeye and Bluto’s Bilge-Rat Barges Ride" />
                    <p>Popeye and Bluto’s Bilge-Rat Barges Ride</p>
                </div>
                <div className="ride-item">
                    <img src={skullIslandRide} alt="Skull Island: Reign of Kong Ride" />
                    <p>Skull Island: Reign of Kong Ride</p>
                </div>
                <div className="ride-item">
                    <img src={spiderManRide} alt="Spider-Man Ride" />
                    <p>Spider-Man Ride</p>
                </div>
                <div className="ride-item">
                    <img src={stormForceRide} alt="Storm Force Acceltron Ride" />
                    <p>Storm Force Acceltron Ride</p>
                </div>
                <div className="ride-item">
                    <img src={hulkCoasterRide} alt="The Hulk Coaster Ride" />
                    <p>The Hulk Coaster Ride</p>
                </div>
            </div>
        </div>
    );
}

export default RideSelectionPage;



