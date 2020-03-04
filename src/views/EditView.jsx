import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UsersList } from "../state/use-users-list";
import "../styles.css";

const EditView = ({ match, children, uname }) => {
  const { users } = UsersList(uname);
  const initalFormState = {};
  const [value, setValue] = useState("hi");

  const onChange = event => {
    const newValue = event.target.value;
    setValue([...value, newValue]);
    console.log(value);
  };

  const onSubmit = event => {
    event.preventDefault();
    console.log(value);
  };
  console.log(users);

  return (
    <div>
      <div className="editview">
        <h3 className="editview__header">edit {match.params.uname}</h3>
        <form className="editview__form" onSubmit={onSubmit}>
          <label className="editview__label">
            Name
            <input
              className="editview__input"
              name="name"
              type="text"
              onChange={onChange}
              placeholder={match.params.name}
            />
          </label>
          <label className="editview__label">
            Surname
            <input
              className="editview__input"
              name="name"
              type="text"
              onChange={onChange}
              placeholder={match.params.surname}
            />
          </label>
          <button className="editview__button">Save</button>
        </form>
        <Link to={`/${match.params.uname}`}>View profile</Link>
      </div>
    </div>
  );
};
export default EditView;
