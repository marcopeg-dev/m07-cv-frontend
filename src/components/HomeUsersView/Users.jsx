import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

const Users = ({ userId, name, surname, profilePic }) => (
  <div className="view__users">
    <Link to={`/${userId}`}>
      <li className="user__list">
        <img
          className="img__user"
          src={profilePic}
          alt={`${name}'s profile pic`}
        />
        <h2>
          {name} <br />
          {surname}
        </h2>
        <img
          className="play__button"
          src={"https://img.icons8.com/android/40/000000/play.png"}
          alt={"play-button"}
        />
      </li>
    </Link>
  </div>
);

export default Users;
