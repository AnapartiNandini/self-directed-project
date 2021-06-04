import{Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <>
    <header>
      <ul lassName="leftSide">
        <li><Link className="link" to="/">Home</Link></li>
        <li><Link className="link" to="/shopping">shopping</Link></li>
        <li><Link className="link" to="/add-post">Post</Link></li>
      </ul>
      <ul lassName="rightSide">
        <li><Link className="link" to="/search">search</Link></li>
        <li><Link className="link" to="/notifications">notifications</Link></li>
        <li><Link className="link" to="/profile">Profile</Link></li>
      </ul>
    </header>
    </>
  );
}

export default App;
