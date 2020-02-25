import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useBackend } from "../state/use-backend";
import { updateUser } from "../state/update-user";

const EditView = ({ match }) => {
  const initialFormState = { name: "", surname: "" };
  const { uname } = match.params;
  const { data } = useBackend(uname);
  const [edit, setEdit] = useState([]);
  const user = { ...data };

  const onChange = event => {
    const { name, value } = event.target;
    setEdit({ ...edit, [name]: value });
    console.log(edit);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(edit, "uname", uname);
    updateUser(uname, edit);
    setEdit(initialFormState);
  };

  return (
    <div>
      <h2 className="edit-profile">Edit user: {match.params.uname}</h2>
      <h4 className="edit-profile">Name: {user.name}</h4>
      <h4 className="edit-profile">Surname: {user.surname}</h4>
      <form onSubmit={onSubmit}>
        <label className="label__edit">Name: </label>
        <input className="input__edit" name="name" onChange={onChange}></input>
        <br />
        <label className="label__edit">Surname: </label>
        <input
          className="input__edit"
          name="surname"
          onChange={onChange}
        ></input>
        <br />
        <label className="label__edit">Image (Please provide URL): </label>
        <input
          className="input__edit"
          name="profile_pic"
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
