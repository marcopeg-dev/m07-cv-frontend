import React from "react";
//import LoadingIndicator from "../components/LoadingIndicator";
import UserListView from "./UserListView";

//commented out the Loading component because it's not working, didn't have the time to figure it out

const UsersListLayout = ({ props }) => {
  return (
    <ul>
      {props.length > 0 ? (
        props.map(user => (
          <UserListView
            key={user.id}
            userId={user.id}
            name={user.name}
            surname={user.surname}
            profilePic={user.profile_pic}
          />
        ))
      ) : (
          <div>
            <span>Loading...</span>
            {/* <h2 className="site-heading">{<LoadingIndicator />}</h2> */}
          </div>
        )}
    </ul>
  );
}


export default UsersListLayout;

