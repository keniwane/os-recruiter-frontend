import { useState } from 'react';
import emailjs from '@emailjs/browser';
import React from 'react';
import './EmailForm.css';

const EmailForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const contactNumber = 'CN' + Date.now();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = 'service_wu5rggo';
    const templateId = '974dkjnb$*&k!';
    const publicKey = 'AbDizA6gu-gPHybv7';

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'OS Recruiter',
      message: message,
      contact_number: contactNumber,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className='email-form'>
      <input type='text' placeholder='Your Name' value={name} onChange={(e) => setName(e.target.value)} />
      <input type='email' placeholder='Your Email' value={email} onChange={(e) => setEmail(e.target.value)} />
      <textarea cols='30' rows='10' value={message} onChange={(e) => setMessage(e.target.value)}></textarea>
      <button className='send-email button' type='submit'>
        Send Email
      </button>
    </form>
  );
};

export default EmailForm;
