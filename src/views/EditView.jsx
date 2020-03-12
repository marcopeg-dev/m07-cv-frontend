import React, { useState, useRef, createRef } from "react";
import { Link } from "react-router-dom";
import useUpdateUser from "../state/update-user";
import ValidatedInputField from "../components/ValidatedInputField/ValidatedInputField"

const EditView = ({ match }) => {
  const inputRefs = useRef([createRef(), createRef(), createRef()]);
  const { uname } = match.params;
  const { user, edit, onChange, onSubmit } = useUpdateUser({ name: "", surname: "", profile_pic: "" }, uname);
  return (
    <div>
      <h2 className="edit-profile__heading">Edit user: {match.params.uname}</h2>
      <h4 className="edit-profile__user-name">Name: {user.name}</h4>
      <h4 className="edit-profile__user-name">Surname: {user.surname}</h4>
      <Link className="edit-profile__link" to={`/${match.params.uname}`}>
        Cancel
      </Link>
      <form onSubmit={onSubmit}>
        <ValidatedInputField
          className="edit-profile__input"
          type="text"
          name="ame"
          label="Name:"
          value={edit.name}
          onChange={onChange}
          ref={inputRefs.current[0]}
        ></ValidatedInputField>
        <br />
        <ValidatedInputField
          className="edit-profile__input"
          type="text"
          name="surname"
          label="Surname:"
          value={edit.surname}
          onChange={onChange}
          ref={inputRefs.current[1]}
          validation={"required|not null"}
        ></ValidatedInputField>
        <br />
        <ValidatedInputField
          className="edit-profile__input"
          type="url"
          name="url"
          label="Image (please provide URL):"
          value={edit.profile_pic}
          onChange={onChange}
          ref={inputRefs.current[2]}
        ></ValidatedInputField>
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
