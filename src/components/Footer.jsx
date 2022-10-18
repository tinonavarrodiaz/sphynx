import { NavLink } from 'react-router-dom';
import logo from '/img/logo.svg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="main-footer__container">
        <img src={logo} alt="" />
        The perfect way to enjoy SPHYNX Tequila® is responsibly
      </div>
      <div className="main-footer__menu-container">
        <ul className="policy-menu">
          {/* <li className="policy-menu__item">
            <NavLink className={'policy-menu__link'} to={'/privacy-policy'}>
              Privacy Policy
            </NavLink>
          </li> */}
          <li className="policy-menu__item">
            <a
              className={'policy-menu__link'}
              target="_blank"
              href={
                'https://www.ueni.com/en-gb/privacy?_ga=2.236453377.1850822409.1666112312-1947257052.1665520950'
              }
            >
              Privacy Policy
            </a>
          </li>
          <li className="policy-menu__item">
            <a
              className={'policy-menu__link'}
              target="_blank"
              href={
                'https://www.ueni.com/en-gb/privacy?_ga=2.236453377.1850822409.1666112312-1947257052.1665520950'
              }
            >
              Cookie Policy
            </a>
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
