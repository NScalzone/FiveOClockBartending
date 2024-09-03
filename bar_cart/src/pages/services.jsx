import React, {useState, useEffect} from 'react';

const Services = () => {
    return (
        <div>
            <h1>Complete Mobile Bartending Service</h1>
            <p>
                Five O'Clock Mobile Bartending offers the following services at all events for which we are hired:
                <ul>
                    <li>Mobile Bartending with 1-2 licenced bartenders (depending on guest headcount)</li>
                    <li>Water, Soft Drinks, and Ice</li>
                    <li>Bar Tools and Equipment</li>
                    <li>Basic Plastic Drinkware (premium options availble for additional charge)</li>
                    <li>Setup and Cleanup</li>
                    <li>Liquor Liability Insurance</li>
                    <li>Planning Meetings via Zoom</li>
                </ul>
                

                Our basic service assumes that we will be serving soft drinks, wine, and bottled/canned beer, cider, and seltzer. 
                We are fully equipped to offer signature cocktails, taps for kegs, and/or mixers and garnishes for a full bar experience,
                but these services will result in an additional charge. Please review the pricing page for details on how we calculate 
                the fees for our services.
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
            </p>
           
        </div>
    );
}
export default Services;