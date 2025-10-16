import React, {useState, useEffect} from 'react';

const Pricing = () => {
    return (
        <div>
            <h1 className="header">Pricing</h1>
            <p className="body">
                We offer competitive pricing for our mobile bartending services, and we are happy to work with 
                you to create a custom package that fits your needs and budget. However, we do like to give a general idea
                of our pricing structure to make things easy and keep everything transparent.
                We will calculate our basic quote based on the following structure:
                
                <ul>
                    <li>Base Service Charge: $500 - Includes the first 3 hours of service, and all basic services listed on the services page</li>
                    <li>Additional Hours of bartending service: $200/hr</li>

                    {/* <li>Base Service Charge: $5 per event guest.</li> */}
                    {/* <li>Bartenders: $40/hr per Bartender.</li> */}
                    <li>Travel: First 50 miles free, additional destination fee for events beyond that.*</li>
                    {/* <li>Taps: Add $100 to include up to 2 taps.</li> */}
                    <li>Signature Cocktails: Add $50 per cocktail for up to 2 signature cocktails.**</li>
                    {/* <li>Full-Bar Cocktail Package: Add $200 for us to provide mixers, garnishes,  */}
                        {/* and bar tools needed to make classic cocktails.</li> */}
                </ul>

                *Travel is calculated from our home base in Portland, Oregon. We will generally travel a maximum distance of 150 miles. We may consider events beyond this distance on a case-by-case basis.
                <br />
                <br />
                **Signature cocktails are cocktails with more than just liquor and a mixer, such as a Margarita, Mojito, or Old Fashioned. 
                We can provide the ingredients and garnishes needed to make these cocktails, but the client must provide the liquor.
                We will work with you to choose cocktails that fit your event if you wish, and that can be made with the liquor you provide.
                Signature cocktails entail an additional charge because they require us to supply additional ingredients and to spend additional time on preparation.
                We find that more than 2 signature cocktails can slow down service significantly, but we are happy to discuss options if you wish to have more.
                <br />
                <br />
                All events require a $200 deposit to reserve your date. The deposit is applied to the total cost of your event, and is non-refundable. The remaining balance is due on the day of the event.
            </p>
        </div>
    );
}
export default Pricing;