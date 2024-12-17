import React from 'react';

const ContactForm = () => {
  return (
    <div className="a-light-grey a-padding-large a-padding-32 a-margin-top" id="contact">
      <h3 className="a-center a-color">Contact</h3>
      <hr />
      <p>If you come across any query or trouble please inform through e-mail id.</p>
      <form>
        <div className="a-section">
          <label>Name</label>
          <input className="a-input a-border" type="text" required name="Name" />
        </div>
        <div className="a-section">
          <label>Email</label>
          <input className="a-input a-border" type="text" required name="Email" />
        </div>
        <div className="a-section">
          <label>Query</label>
          <input className="a-input a-border" required name="Message" />
        </div>
        <button type="submit" className="a-button a-block send a-dark-grey">Send</button>
      </form>
      <br />
      <p>From <a href="https://vit.ac.in/" target="_blank" className="a-hover-text-green">VIT Vellore</a></p>
    </div>
  );
};

export default ContactForm;
