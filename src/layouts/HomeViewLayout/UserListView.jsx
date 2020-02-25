import React from "react";
import { Link } from "react-router-dom";


const UserListView = ({ name, surname, profilePic, userId }) => {
  return (<div className="v">
    <Link to={`/${userId}`}>
      <li className="">
        <img className="" src={profilePic} alt={`${name}'s profile pic`} />
        <h2>
          {name} <br />
          {surname}
        </h2>
        <img className="" src={"https://img.icons8.com/android/40/000000/play.png"} alt={"play-button"} />
      </li>
    </Link>
  </div>);
};

export default UserListView;
