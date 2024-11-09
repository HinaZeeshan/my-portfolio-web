import React from 'react'
import "../../style/Contact.css"

const Contact = () => {
  return (
    <div>
      <div className="container-contact">
          <h1>Contact Me</h1>
          <p>
            If you have any questions or want to work together, feel free to
            reach out!
          </p>
          <div className='contact-foam'>
          <form action="submit_form.php" method="POST" className="contact-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your Name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="Your Email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              placeholder="Your Message"
            ></textarea>

            <button type="submit">Send Message</button>
          </form>
          </div>
        </div>

    </div>
  )
}

export default Contact
