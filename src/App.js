import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import "./styles.css";

/**
 * VIEWS
 * Read more about views in `docs/VIEWS.md`
 */
import ProfileView from "./views/ProfileView";
import EditView from "./views/EditView";
import HomeView from "./views/HomeView";
import AddUser from "./views/AddUser";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/add" component={AddUser} />
        <Route exact path="/:uname/edit" component={EditView} />
        <Route exact path="/:uname" component={ProfileView} />
        <Route exact path="/" component={HomeView} />
      </Switch>
    </Router>
  );
}
