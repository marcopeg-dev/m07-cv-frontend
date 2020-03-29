import React, { useState } from "react";
import { Link } from "react-router-dom";
import useUpdateUser from "../state/update-user";

const EditView = ({ match }) => {
  const { uname } = match.params;
  const { user, edit, onChange, onSubmit } = useUpdateUser({ name: "", surname: "", profile_pic: "" }, uname);

  const submitForm = (event) => {
    event.preventDefault();
    onSubmit(event);
  }

  return (
    <div>
      <h2 className="edit-profile__heading">Edit user: {match.params.uname}</h2>
      <h4 className="edit-profile__user-name">Name: {user.name}</h4>
      <h4 className="edit-profile__user-name">Surname: {user.surname}</h4>
      <Link className="edit-profile__link" to={`/${match.params.uname}`}>
        Cancel
      </Link>
      <form onSubmit={submitForm}>
        <label className="edit-profile__label">Name:</label>
        <input
          className="edit-profile__input"
          type="text"
          name="name"
          value={edit.name}
          onChange={onChange}
          required
          pattern="[a-zA-Z]*"
        ></input>
        <br />
        <label className="edit-profile__label">Surname:</label>
        <input
          className="edit-profile__input"
          type="text"
          name="surname"
          value={edit.surname}
          onChange={onChange}
          required
          pattern="[a-zA-Z]*"
        ></input>
        <br />
        <label className="edit-profile__label">Image (please provide URL):</label>
        <input
          className="edit-profile__input"
          type="url"
          name="url"
          value={edit.profile_pic}
          onChange={onChange}
        ></input>
        <br />
        <button className="edit-profile__update--btn" type="submit">
          Save Profile
        </button>
      </form>
      <Link className="edit-profile__link" to={`/${match.params.uname}`}>
        View profile
      </Link>
      <Link className="edit-profile__link" to={`/`}>
        Go home
      </Link>
    </div>
  );
};
export default EditView;
