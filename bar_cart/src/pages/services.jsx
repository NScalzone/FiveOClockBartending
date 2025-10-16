import React, {useState, useEffect} from 'react';

const Services = () => {
    return (
        <div>
            <h1 className="header">Complete Mobile Bartending Service</h1>
            <p className='body'>
                Five O'Clock Mobile Bartending offers the following services at all events for which we are hired:
                <ul>
                    <li>Mobile Bartending with 2 licenced bartenders</li>
                    <li>Beautiful custom wood bar</li>
                    <li>Water, Ice, and fresh garnishes</li>
                    <li>Bar Tools and Equipment</li>
                    <li>Basic Plastic Drinkware (premium options available for additional charge)</li>
                    <li>Setup, Teardown, and Cleanup</li>
                    <li>Liquor Liability Insurance</li>
                    <li>Planning Meetings via Zoom</li>
                </ul>
                

                Our basic service assumes that we will be serving soft drinks, wine, and bottled and/or canned beer, cider, and seltzer. 
                We are fully equipped to offer signature cocktails, and/or mixers and garnishes for a full bar experience,
                but these services can result in an additional charge. Please review the pricing page for details on how we calculate 
                the fees for our services.

            </p>
           
        </div>
    );
}
export default Services;