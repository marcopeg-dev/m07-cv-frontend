import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import ProfileView from "./views/ProfileView";
import HomeView from "./views/HomeView";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <Route exact path="/:uname" component={ProfileView} />
      <Route exact path="/" component={HomeView} />
    </Router>
  );
}
