import { NavLink } from 'react-router-dom';
import logo from '/img/logo.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <img src={logo} alt="" />
        <p>The perfect way to enjoy SPHYNX Tequila® is responsibly</p>
      </div>
      <div className="main-footer__menu-container">
        <ul className="policy-menu">
          <li className="policy-menu__item">
            <NavLink className={'policy-menu__link'} to={'/privacy-policy'}>
              Privacy Policiy
            </NavLink>
          </li>
          <li className="policy-menu__item">
            <NavLink className={'policy-menu__link'} to={'/cookie-policy'}>
              Cookie Policiy
            </NavLink>
          </li>
        </ul>
        <ul className="social-menu">
          <li className="social-menu__item">
            <a href="#" className="social-menu__link">
              FACEBOOK
            </a>
          </li>
          <li className="social-menu__item">
            <a href="#" className="social-menu__link">
              INSTAGRAM
            </a>
          </li>
          <li className="social-menu__item">
            <a href="#" className="social-menu__link">
              TIK-TOK
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
