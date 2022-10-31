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
            <NavLink className={'policy-menu__link'} to={'/privacy-policy'}>
              Privacy Policy
            </NavLink>
          </li>
          <li className="policy-menu__item">
            <NavLink className={'policy-menu__link'} to={'/cookie-policy'}>
              Cookie Policy
            </NavLink>
          </li>
        </ul>
        <ul className="social-menu">
          <li className="social-menu__item">
            <a
              href="https://twitter.com/sphynxtequila"
              className="social-menu__link"
              target={'_blank'}
            >
              TWITTER
            </a>
          </li>
          <li className="social-menu__item">
            <a
              href="https://www.instagram.com/sphynxtequila/"
              className="social-menu__link"
              target={'_blank'}
            >
              INSTAGRAM
            </a>
          </li>
          <li className="social-menu__item">
            <a
              href="https://www.tiktok.com/@sphynxtequila"
              target={'_blank'}
              className="social-menu__link"
            >
              TIK-TOK
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
