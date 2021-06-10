import { Link, Route, Switch } from "react-router-dom";
import profileImage from "./profile-image.PNG";

function Profile() {
  return (
    <aside>
      <div className="tracking-in-expand-fwd">
        <div className="sidebar-profile">
          {/* sample profile image */}
          <img src={profileImage} alt="Profile Photo" />
          <h3 className="user-name"></h3>
          <p className="user-email"></p>

          <div className="sidebar-options">
            <ul>
              <li>
                <Link to="" className="sidebar-link">
                  <span class="material-icons-outlined">groups</span>Followers
                </Link>
              </li>
              <li>
                <Link to="" className="sidebar-link">
                  <span class="material-icons-outlined">groups</span>Following
                </Link>
              </li>
              <li>
                <Link to="" className="sidebar-link">
                  <span class="material-icons-outlined">settings</span>
                  Settings
                </Link>
              </li>
              <li>
                <Link to="" className="sidebar-link">
                  <span className="material-icons-outlined">logout</span>
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
