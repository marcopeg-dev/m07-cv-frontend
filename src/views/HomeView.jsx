import React from "react";
import { Link } from "react-router-dom";

const HomeView = ({ match }) => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/marcopeg">Open Marcopeg</Link>
        </li>
      </ul>
    </div>
  );
};

export default HomeView;
