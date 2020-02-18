import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ProfileView from "./ProfileView";
import "./styles.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>Hello M07</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
      <Route path="/:uname" component={ProfileView} />
    </Router>
  );
}
