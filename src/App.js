import { Link } from "react-router-dom";
import "./App.css";
import logo from "./MITTPosts-Logo.PNG";

function App() {
  return (
    <>
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
      <aside>
        <div className="tracking-in-expand-fwd">
          <div className="sidebar-profile">
            {/* sample profile image */}
            <img src="img/pfpexample.jpg" alt="Profile Photo" />
            <h3 className="user-name"></h3>
            <p className="user-email"></p>

            <div className="sidebar-options">
              <ul>
                <li>
                  <Link to="">
                    <span class="material-icons-outlined">groups</span>Followers
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span class="material-icons-outlined">groups</span>Following
                    My Music
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span class="material-icons-outlined">settings</span>Settings
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span className="material-icons-outlined">podcasts</span>
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span className="material-icons-outlined">music_video</span>
                    Artists
                  </Link>
                </li>
                <li>
                  <Link to="">
                    <span className="material-icons-outlined">logout</span>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

export default App;
