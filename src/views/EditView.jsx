import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBackend } from "../state/use-backend";
import { updateUser } from "../state/update-user";

const EditView = ({ match }) => {
  const cleanFormState = { name: "", surname: "", profile_pic: "" };
  const { uname } = match.params;
  const { data } = useBackend(uname);
  const user = { ...data };
  const [edit, setEdit] = useState({ user });

  const onChange = event => {
    const { name, value } = event.target;
    setEdit({ ...edit, [name]: value });
  };

  const onSubmit = event => {
    event.preventDefault();
    updateUser(uname, edit);
    setEdit(cleanFormState);
  };

  return (
    <div>
      <h2 className="h2_edit-profile">Edit user: {match.params.uname}</h2>
      <h4 className="h4_edit-profile">Name: {user.name}</h4>
      <h4 className="h4_edit-profile">Surname: {user.surname}</h4>
      <Link className="link__edit" to={`/${match.params.uname}`}>
        Cancel
      </Link>
      <form onSubmit={onSubmit}>
        <label className="label__edit">Name: </label>
        <input
          value={edit.name}
          className="input__edit"
          name="name"
          onChange={onChange}
        ></input>
        <br />
        <label className="label__edit">Surname: </label>
        <input
          className="input__edit"
          name="surname"
          value={edit.surname}
          onChange={onChange}
        ></input>
        <br />
        <label className="label__edit">Image (Please provide URL): </label>
        <input
          className="input__edit"
          name="profile_pic"
          value={edit.profile_pic}
          onChange={onChange}
        ></input>
        <br />
        <button className="btn__edit" type="submit">
          Save Profile
        </button>
      </form>
      <Link className="link__edit" to={`/${match.params.uname}`}>
        View profile
      </Link>
      <Link className="link__edit" to={`/`}>
        Go home
      </Link>
    </div>
  );
};

export default EditView;
