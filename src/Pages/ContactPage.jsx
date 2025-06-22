import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ContactsPage.css';

export default function ContactsPage() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const formRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess('');
    setError('');

    emailjs.sendForm(
      'service_hmr3ork',     // Replace with your EmailJS service ID
      'template_4zkrm4s',    // Replace with your EmailJS template ID
      formRef.current,
      'h4GW15PXewvDD0abE'      // Replace with your EmailJS public key
    )
    .then(() => {
      setSuccess('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((err) => {
      console.error(err);
      setError('Failed to send message.');
    });
  };

  return (
    <div className="contacts-page">
      <div className="contacts-hero">
        <h1>💬 Let's Connect</h1>
        <p>Your wellness journey matters — and we're here to support you every step of the way!</p>
      </div>

      <div className="contacts-message">
        <h2>📨 Get in Touch</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Name</label>
            <input
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Send Message</button>
          {success && <p className="success-msg">{success}</p>}
          {error && <p className="error-msg">{error}</p>}
        </form>
      </div>

      <div className="contact-note">
        <p>⏳ We aim to respond within 24 hours. Thank you for reaching out!</p>
      </div>
    </div>
  );
}
