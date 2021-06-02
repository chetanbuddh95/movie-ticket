import { NavLink } from "react-router-dom";

function Header ({shows}) {
    return (
        <nav>
          <ul>
            {Object.entries(shows).map(([key, value]) =>
                <li key={key}>
                  <NavLink key={key} to={`/${key}`} activeClassName="active">{value.displayName}</NavLink>
                </li>
              )
            }
            <li>
              <NavLink to="/order" activeClassName="active">Order</NavLink>
            </li>
          </ul>
      </nav>
    )
}

export default Header;