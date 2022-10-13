import React from 'react';
import { NavLink } from 'react-router-dom';

function Buttons() {
  return (
    <section className="Buttons__wrapper grid grid-col-2">
      <NavLink to="/buy" className={'Buttons__btn'}>
        <img src="/img/tequilas2.jpg" alt="Botella Sphynx" />
        <p>Find a location to get SPHYNX®</p>
      </NavLink>
      <NavLink to="/buy" className={'Buttons__btn'}>
        <img src="/img/tequilas1.jpg" alt="Botella Sphynx" />
        <p>Get in touch with us</p>
      </NavLink>
    </section>
  );
}

export default Buttons;
