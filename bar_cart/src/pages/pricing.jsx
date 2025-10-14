import React, {useState, useEffect} from 'react';

const Pricing = () => {
    return (
        <div>
            <h1 className="header">Pricing</h1>
            <p className="body">
                At Five O'Clock Bartending, we pride ourselves on our transparency. We want our clients to know exactly what they are paying for, and why. 
                Our pricing starts at $500 for up to 2 hours of service. Add on's are charged as follows:
                
                <ul>
                    <li>Base Service Charge: $500</li>
                    <li>Additional Hours: $250/hr</li>

                    {/* <li>Base Service Charge: $5 per event guest.</li> */}
                    {/* <li>Bartenders: $40/hr per Bartender.</li> */}
                    <li>Travel: First 50 miles free, $100 additional destination fee for events beyond that.*</li>
                    {/* <li>Taps: Add $100 to include up to 2 taps.</li>
                    <li>Signature Cocktails: Add $100 for up to 2 signature cocktails. If more than 2 are requested, 
                        add another $100 for each additional cocktail.</li> */}
                    {/* <li>Full-Bar Cocktail Package: Add $200 for us to provide mixers, garnishes,  */}
                        {/* and bar tools needed to make classic cocktails.</li> */}
                </ul>

                *Travel is calculated from our home base in Portland, Oregon. We will travel a maximum distance of 150 miles. For events beyond that, please contact us for a custom quote.
                
                <br />
                <br />
                All events require a $200 deposit to reserve your date. The deposit is applied to the total cost of your event, and is non-refundable. The remaining balance is due on the day of the event.
            </p>
        </div>
    );
}
export default Pricing;