import { NavLink } from 'react-router-dom';

import { Container } from '../Container/Container';

import icons from '../../images/icons.svg';

import h from './Header.module.scss';

function Header() {
  return (
    <header className={h.header}>
      <Container>
        <div className={h.container}>
          <NavLink to="/">
            <svg width="48" height="48" className={h.logo}>
              <use href={icons + '#icon-logo'}></use>
            </svg>
          </NavLink>
          <nav>
            <ul>
              <li>
                <NavLink className="header-nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" to="/catalog">
                  Rental cars
                </NavLink>
              </li>
              <li>
                <NavLink className="header-nav-link" to="/favorites">
                  Favorite cars
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}

export default Header;
