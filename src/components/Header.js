import {
    Link,
} from "react-router-dom";

function Header ({shows}) {
    return (
        <nav>
        <ul>
          {Object.entries(shows).map(([key, value]) =>
              <li key={key}>
                <Link key={key} to={`/${key}`} activeClassName="active">{value.displayName}</Link>
              </li>
            )
          }
          
          <li>
            <Link to="/order" activeClassName="active">Order</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header;