import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  return (
    <section className="contact-wrapper" id="contact">
      <div className="contact-left">
        <h2>Let’s Connect</h2>
        <p>Reach out anytime — open for collaborations & opportunities!.</p>
        <div className="contact-info" >
          <p style={{display:'flex',gap:"5px"}}><span className='streamline--gmail' alt="Mail" style={{width:"25px"}}/> 2100032454cseh@gmail.com</p>
          <p style={{display:'flex',gap:"5px"}}><span className='line-md--linkedin' alt="LinkedIn" /> <a href="https://www.linkedin.com/in/javvadi-sai-bhagavan-793960248/" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p style={{display:'flex',gap:"5px"}}><span className='mdi--github' alt="Github" /> <a href="https://github.com/bhagavan12" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </div>

      <div className="contact-right">
        {!isSubmitted ? (
          <form
            className="contact-form"
            action="https://formsubmit.co/2100032454cseh@gmail.com"
            method="POST"
            onSubmit={() => setIsSubmitted(true)}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value={window.location.href} />

            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required placeholder="Name" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required placeholder="Email" />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="5" required placeholder="Your message"></textarea>
            </div>

            <button type="submit" className="btn-send">Send Message</button>
          </form>
        ) : (
          <div className="thank-you">
            <h3>Thank you! ✨</h3>
            <p>Your message has been sent. I’ll get back to you soon.</p>
          </div>
        )}
      </div>
    </section>
  );
}
