import { NavLink } from 'react-router-dom';

import icons from '../../images/icons.svg';

function Header() {
  return (
    <header>
      <NavLink to="/">
        <svg width="48" height="48">
          <use href={icons + '#icon-logo'}></use>
        </svg>
      </NavLink>
      <div className="container">
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/catalog">Rental cars</NavLink>
            </li>
            <li>
              <NavLink to="/favorites">Favorite cars</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
