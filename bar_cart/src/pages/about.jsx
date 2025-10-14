import React, {useState, useEffect} from 'react';

const About = () => {
    return (
        <div>
            <h1 className="header">About Us</h1>
            
            <div className="content-container">
                <p className="body">
                    Five O'Clock Mobile Bartending is a mobile bartending service based in Portland, Oregon. 
                    We specialize in providing professional bartending services for private events, including weddings, corporate events, and parties of all kinds!
                    <br />
                    <br />
                Our service is what is called a "Dry Hire". We do not have a liquor licence, and as such we cannot provide alcohol.
                We are fully insured and licenced to serve alchohol as long as the following criteria are met:

                <ul>
                    <li>Client provides all alcohol</li>
                    <li>Guests cannot pay to attend the event</li>
                    <li>Guests cannot pay for the alcohol we serve</li>
                    <li>We can accept tips, but we do not expect them</li>
                </ul>
                <br />
                <br />
                Check out our Services and pricing pages for addtional details!
                </p>
                
                <img 
                    src="./joanna_at_bar.jpeg" 
                    alt="Joanna at bar" 
                    className="about-image"
                />
            </div>
        </div>
    );
}

export default About;
