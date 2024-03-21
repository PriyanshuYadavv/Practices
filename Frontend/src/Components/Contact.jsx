import React from 'react'
import './Contact.css';
const Contact = () => {
  return (
    <div className="container">
    <h1>Contact Us</h1>
    <p>Please fill out the form below to contact us:</p>
    <form id="contactForm">
      <div className="form-group">
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required="" />
      </div>
      <div className="form-group">
        <label htmlFor="message">Your Message:</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required=""
          defaultValue={""}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Contact