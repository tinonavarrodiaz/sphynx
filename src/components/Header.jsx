import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '/img/logo.svg';
import menu from '../helpers/menu';
import Hamburger from './Hamburger';

const Header = () => {
  const [active, setActive] = useState(false);
  const ToggleMenuFunction = () => {
    !active ? setActive(true) : setActive(false);
  };
  return (
    <header className="main-header">
      <img src={logo} alt="Logotipo" className="main-logo" />
      <nav className="main-nav">
        <Hamburger active={active} action={ToggleMenuFunction} />
        <ul className={`main-menu ${active ? 'is-active' : ''}`}>
          {menu.map((item) => (
            <li key={item.title} className="main-menu__item">
              <NavLink
                onClick={ToggleMenuFunction}
                className={'main-menu__link'}
                to={item.link}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
