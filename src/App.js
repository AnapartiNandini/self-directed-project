import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Post from "./Post";
import Profile from "./Profile";
import Notifications from "./Notifications";

function App() {
  return (
    <>
      <Header />
        <Switch>
          <Route exact path="/"></Route>
          <Route exact path="/add-post">
            <Post />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/notifications">
            <Notifications />
          </Route>
        </Switch>
    </>
  );
}

export default App;
