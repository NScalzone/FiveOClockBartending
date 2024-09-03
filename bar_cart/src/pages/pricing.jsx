import React, {useState, useEffect} from 'react';

const Pricing = () => {
    return (
        <div>
            <h1>Pricing</h1>
            <p>
                At Five O'Clock Bartending, we pride ourselves on our transparency. These are the pricing metrics we use 
                to calculate the cost of our services:
                
                <ul>
                    <li>Base Service Charge: $5 per event guest.</li>
                    <li>Bartenders: $40/hr per Bartender.</li>
                    <li>Travel: First 50 miles free, $0.67/mile (IRS Standard Rate) for events beyond that.*</li>
                    <li>Taps: Add $100 to include up to 2 taps.</li>
                    <li>Signature Cocktails: Add $100 for up to 2 signature cocktails. If more than 2 are requested, 
                        add another $100 for each additional cocktail.</li>
                    <li>Full-Bar Cocktail Package: Add $200 for us to provide mixers, garnishes, 
                        and bar tools needed to make classic cocktails.</li>
                </ul>

                *Travel is calculated from our home base in Portland, Oregon. We will travel a maximum distance of 250 miles.
            </p>
        </div>
    );
}
export default Pricing;