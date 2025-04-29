import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_2lsylfr', 
        'template_ybe6h8q', 
        form.current,
        't_pkVwCfuD3WreXUr' 
      )
      .then(
        (result) => {
          alert('Message sent successfully!');
          form.current.reset(); 
        },
        (error) => {
          alert('Failed to send the message. Please try again.');
        }
      );
  };

  return (
    <div className="relative max-w-5xl mx-auto p-10 bg-white shadow-lg rounded-lg mt-10">
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm rounded-lg"
        style={{
          backgroundImage: 'url(https://stimg.cardekho.com/images/carexteriorimages/930x620/Kia/Syros/11791/1734599341690/front-left-side-47.jpg)',
        }}
      ></div>
      <div className="relative z-10">
        <h2 className="text-4xl font-bold text-center text-red-700">Contact Us</h2>
        <p className="text-yellow-400 text-center mb-4">
          Get in touch with us for the best car rental experience!
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold">Name</label>
            <input
              type="text"
              name="user_name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Email</label>
            <input
              type="email"
              name="user_email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your Email"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold">Message</label>
            <textarea
              name="message"
              className="w-full px-4 py-6 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
