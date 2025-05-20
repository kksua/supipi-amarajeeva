import React from 'react';

const ContactSection = () => {
  return (
    <section className="contact-section" id="contact">
      <h2>Send me a message!</h2>
      <p>Got a question or proposal, or just want to say hello? Go ahead.</p>

      <form className="contact-form">
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Email Address" required />
        </div>
        <textarea placeholder="Your Message" required />
        <button type="submit">Shoot →</button>
      </form>
    </section>
  );
};

export default ContactSection;
