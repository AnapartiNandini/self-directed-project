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
                <div className="options">
                  <li>
                    <Link className="link" id="logo" to="/">
                      <img src={logo} alt="MITTPosts logo" />
                    </Link>
                  </li>
                  <li>
                    <Link className="link" to="/shopping">
                      Shopping
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
                <div className="hamburger">
                  <li>
                    <a href="#">
                      <span className="material-icons-outlined">menu</span>
                    </a>
                  </li>
                </div>
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
                  <a href="#">
                    <span className="material-icons-outlined">radio</span>Radio
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-icons-outlined">
                      featured_play_list
                    </span>
                    My Music
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-icons-outlined">videocam</span>
                    Video
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-icons-outlined">podcasts</span>
                    Podcast
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-icons-outlined">music_video</span>
                    Artists
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="material-icons-outlined">logout</span>
                    Logout
                  </a>
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
