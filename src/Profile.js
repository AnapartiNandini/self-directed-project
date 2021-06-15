import { Link, Route, Switch } from "react-router-dom";
import profileImage from "./profile-image.PNG";

function Profile(props) {
  return (
    <aside>
      <div className="tracking-in-expand-fwd">
        <div className="sidebar-profile">
          {/* sample profile image */}
          <img src={profileImage} alt="Profile Photo" />
          <h3 className="user-name">{props.currentUser.name}</h3>
          <p className="user-email">{props.currentUser.email}</p>

          <div className="sidebar-options">
            <ul>
              <li>
                <Link to="" className="sidebar-link">
                  <span class="material-icons-outlined">groups</span>Accounts
                </Link>
              </li>
              <li>
                <Link to="" className="sidebar-link">
                  <span class="material-icons-outlined">groups</span>Following
                </Link>
              </li>
              <li>
                <Link to="/edit-profile" className="sidebar-link">
                  <span class="material-icons-outlined">manage_accounts</span>
                  Edit Profile
                </Link>
              </li>
              {props.currentUser ? (
                <li>
                  <Link to="" onClick={props.logout} className="sidebar-link">
                    <span class="material-icons-outlined">logout</span>
                    Logout
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to="/login" className="sidebar-link">
                    <span class="material-icons-outlined">login</span>
                    Login
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default Profile;
