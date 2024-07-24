import React, { useState } from 'react';

const EmailForm = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, subject, message }),
    });

    if (response.ok) {
      alert('Email envoyé avec succès');
    } else {
      alert('Erreur lors de l\'envoi de l\'email');
    }
  };

  return (
    <div className="container">
      <fieldset>
        <form onSubmit={handleSubmit} className='full'>
          <h1 className='title-form'>Contact</h1>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Votre email"
            required
            className="full"
          />
          <input
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            placeholder="Sujet"
            required
            className="full"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
            className="full"
          />
          <button type="submit" className="button-form">Envoyer</button>
        </form>
      </fieldset>
    </div>
  );
};

export default EmailForm;
