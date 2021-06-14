import { Link } from "react-router-dom";
import logo from "./MITTPosts-Logo.PNG";

function Header() {
  return (
    <header>
      <div className="tracking-in-expand-fwd">
        <div className="nav-wrapper">
          <div className="nav">
            <ul>
              <div className="hamburger">
                <li>
                  <Link to="">
                    <span className="material-icons-outlined">menu</span>
                  </Link>
                </li>
              </div>

              <div className="options">
                <li>
                  <Link className="link" id="logo" to="/">
                    <img src={logo} alt="MITTPosts logo" />
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/add-post">
                    Post
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/profile">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link className="link" to="/notifications">
                    Notifications
                  </Link>
                </li>
              </div>

              

              <li className="search">
                <i className="material-icons-outlined">search</i>
                <form>
                  <input
                    size="40"
                    type="search"
                    autoComplete="off"
                    id="search-bar"
                    placeholder="Search"
                  />
                </form>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
