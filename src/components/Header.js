import { NavLink } from "react-router-dom";
import './css/Header.css';

function Header ({shows}) {
    return (
        <nav className='navbar'>
          <ul>
            {Object.entries(shows).map(([key, value]) =>
                <li key={key}>
                  <NavLink key={key} to={`/${key}`} activeClassName="active">{value.displayName}</NavLink>
                </li>
              )
            }
            <li>
              <NavLink to="/orders" activeClassName="active">Orders</NavLink>
            </li>
          </ul>
      </nav>
    )
}

export default Header;