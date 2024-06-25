import React, { useRef, FormEvent } from 'react';
import emailjs from '@emailjs/browser';

const EmailForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();

    emailjs.sendForm('service_2cot8re', 'contact_form', form.current!, 'rkIIDC6lpWt6aBBDr')
      .then(
        (result) => {
          alert('Email envoyé avec succès');
        },
        (error) => {
          alert('Erreur lors de l\'envoi de l\'email: ' + error.text);
        },
      );
  };

  return (
    <fieldset>
      <form ref={form} onSubmit={sendEmail} className='full'>
        <h1 className='title-form'>Contact</h1>
        <input
          type="email"
          name="user_email"
          placeholder="Votre email"
          required
          className="full"
        />
        <input
          type="text"
          name="subject"
          placeholder="Sujet"
          required
          className="full"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="full"
        />
        <button type="submit" className="button-form">Envoyer</button>
      </form>
    </fieldset>
  );
};

export default EmailForm;