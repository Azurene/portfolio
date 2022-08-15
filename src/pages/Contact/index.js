import React from "react";

function Contact() {
  return (
    <section>
      <div className="container">
        <h2 className="row">Contact Me</h2>
        <form className="row" id="contact-form">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Name:</label>
            <input type="text" className="form-control" name="name"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address:</label>
            <input type="email" className="form-control" name="email"></input>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">Message:</label>
            <textarea name="message" className="form-control" rows="5" />
          </div>
          <button data-testid="button" className="btn btn-outline-light" type="submit">Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Contact;