import { Link } from "react-router-dom";
import profileImage from "./profile-image.PNG";
import { Button } from "@material-ui/core";

function Profile(props) {
  return (
    <aside>
      <div className="tracking-in-expand-fwd">
        <div className="sidebar-profile">
          {/* sample profile image */}
          <img src={profileImage} alt="Profile Photo" />
          <h3 className="user-email">{props.currentUser.email}</h3>

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
                <Link to="/signup" className="sidebar-link">
                <span class="material-icons-outlined">login</span>
                  Signup
                </Link>
              </li>
              <li>
                <Link to="/login" className="sidebar-link">
                  <span class="material-icons-outlined">login</span>
                  Login
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
