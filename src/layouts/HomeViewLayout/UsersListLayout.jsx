import React from "react";
//import LoadingIndicator from "../../components/LoadingIndicator";
import { Link } from "react-router-dom";
import UserListView from "./UserListView";
import "./UserListView.css";

const UsersListLayout = ({ props }) => {
  return (
    <ul className="users-list__container">
      {
        props.map(user => (user.id !== "undefined" && (
          <UserListView
            key={user.id}
            userId={user.id}
            name={user.name}
            surname={user.surname}
            profilePic={user.profile_pic}
          />
        )))
      }
    </ul>
    <Link className="profile-view__link" to={`/add`}>
      add new user
    </Link>
  );
}

export default UsersListLayout;

  // ) : (
        //     <div>

        //      <h2 className="site-heading">{<LoadingIndicator />}</h2>
        //     </div>
        //   )))
