import{Link} from "react-router-dom";
import './App.css';
import logo from  "./MITTPosts-Logo.PNG";

function App() {
  return (
    <>
    <header>
     <div>
      <ul>
        <li className="leftSide"><Link className="link" id="logo" to="/"><img src={logo} alt="MITTPosts logo"/></Link></li>
        <li className="leftSide"><Link className="link" to="/shopping">Shopping</Link></li>
        <li className="leftSide"><Link className="link" to="/add-post">Post</Link></li>
        <li className="rightSide"><Link className="link" to="/profile">Profile</Link></li>
        <li className="rightSide"><Link className="link" to="/notifications">Notifications</Link></li>
        <li className="rightSide"><Link className="link" to="/search">Search</Link></li>
      </ul>
      </div>
    </header>
    </>
  );
}

export default App;
