import React, {useState, useEffect} from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("xblnkwjq");
  if (state.succeeded) {
      return <p>Thanks for reaching out, we'll be in touch soon!</p>;
  }
  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <label htmlFor="email">
        Email Address
      </label>
      <br />
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br />
      <label htmlFor="phone number">
        Phone Number
      </label>
      <br />
      <input
        type="tel"
        id="phone number"
        name="phone number"  placeholder="555-123-4567"
        pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"  // Enforces format like 555-123-4567
      />
      <ValidationError 
        prefix="Phone Number" 
        field="phone number"
        errors={state.errors}
      />
      <br />
      <label htmlFor="Number of guests">
        Number of guests
      </label>
      <br />
      <textarea
        id="number of guests"
        name="number of guests"
      />
      <ValidationError 
        prefix="Number of guests" 
        field="number of guests"
        errors={state.errors}
      />
      <br />
      <label htmlFor="date of event">
        Date of Event
      </label>
      <br />
      <input
        type="date"
        id="date of event"
        name="date of event"
      />
      <ValidationError 
        prefix="Date of Event" 
        field="date of event"
        errors={state.errors}
      />
      <br />
      <label htmlFor="message">
        Message
      </label>
      <br />
      <textarea
        id="message"
        name="message"
        rows="6"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <br />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

const Contact = () => {
    return (
        <div>
            <h1 className="header">Contact Us</h1>
            <div className='content-container'>
                <div className="text-box">
                  <p className="body">
                      Follow us on Instagram for photos and updates!
                      <br />
                      <a 
                          href="https://www.instagram.com/fiveoclockmobilebartending/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="instagram-link"
                      >
                          <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="32" 
                              height="32" 
                              viewBox="0 0 24 24" 
                              fill="currentColor"
                          >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                          </svg>
                      </a>
                      <br />
                      <br />
                      Email us at <a href="mailto:fiveoclockbartending@gmail.com" className="email-link">fiveoclockbartending@gmail.com</a> or call at (360)-836-2011 for quotes and availability. Or, fill out the contact form.
                  </p>
                </div>
                <ContactForm />
                <img src="guy_taking_drink.jpg" alt="Contact Us" className="about-image" />
            </div>
        </div>
    ); 
}
export default Contact;