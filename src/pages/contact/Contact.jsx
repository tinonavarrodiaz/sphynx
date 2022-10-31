import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
// import sgMail from '@sendgrid/mail';

// sgMail.setApiKey(
//   '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'
// );

const Contact = () => {
  const button = useRef();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    button.current.innerHTML = '<img src="/img/loading.svg" alt="Loading">';
    button.current.classList.add('loading');
    Notify.init({
      position: 'center-top',
      timeout: 7000,
      zindex: 50000,
      cssAnimationStyle: 'from-top',
      fontSize: '18px',
    });
    emailjs
      .sendForm(
        'service_48nr9jb',
        'template_6y7j58t',
        e.target,
        'AO4fubuwS2DBZm4u_'
      )
      .then((res) => {
        button.current.innerHTML = 'SEND IT!';
        button.current.classList.remove('loading');

        Notify.success('Form sent successfully. We will contact you shortly');
      })
      .catch((err) => {
        Notify.failure('An error occurred. Please try again late');
      });
  };
  return (
    <section className="Contact">
      <div className="Contact__wrapper">
        <div className="Contact__text" data-aos="fade-right">
          <h2>Get in touch</h2>
          <p>
            We would love to hear from you. Please, let us know if you require
            more information about our products.{' '}
          </p>
        </div>
        <div className="Contact__form" data-aos="fade-left">
          <form
            action="/php/send.php"
            method="POST"
            className="form"
            onSubmit={submit}
          >
            <div className="input-group">
              <input
                type="text"
                name="from_name"
                placeholder="Name"
                id="name"
              />
            </div>
            <div className="input-group">
              <input type="email" name="mail" placeholder="Email address" />
            </div>
            <div className="input-group textarea-group">
              <textarea name="message" id="" placeholder="Message"></textarea>
            </div>
            <button ref={button} type="submit">
              Send It!
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
