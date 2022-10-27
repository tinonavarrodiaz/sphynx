import { useState, useEffect, useRef } from 'react';
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(
  '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'
);

const Contact = () => {
  const [send, setSend] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const msg = {
      to: 'tino.navarro@hotmail.com', // Change to your recipient
      from: 'tino.navarrod@gmail.com', // Change to your verified sender
      subject: 'Sending with SendGrid is Fun',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    };

    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode);
        console.log(response[0].headers);
      })
      .catch((error) => {
        console.error(error);
      });
    // const uri = e.target.action
    // const method = 'POST'
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
              <input type="text" name="name" placeholder="Name" id="name" />
            </div>
            <div className="input-group">
              <input type="email" name="email" placeholder="Email address" />
            </div>
            <div className="input-group textarea-group">
              <textarea name="msg" id="" placeholder="Message"></textarea>
            </div>
            <button type="submit">Send It!</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
