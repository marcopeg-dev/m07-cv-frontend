import React from "react";
import { Link } from "react-router-dom";

const EditView = ({ match }) => {
  return (
    <div>
      <h3>edit {match.params.uname}</h3>
      <Link to={`/${match.params.uname}`}>View profile</Link>
    </div>
  );
};

export default EditView;
