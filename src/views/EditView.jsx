import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UsersList } from '../state/use-users-list'

const EditView = ({ match, children, uname }) => {

  const { users } = UsersList(uname);
  const initalFormState = {}
  const [value, setValue] = useState('hi')

  const onChange = event => {
    const newValue = event.target.value;
    setValue([...value, newValue])
    console.log(value)
  }

  const onSubmit = event => {
    event.preventDefault()
    console.log(value)
  }
  console.log(users)


  return (
    <div>
      <div>
        <h3>edit {match.params.uname}</h3>
        <form onSubmit={onSubmit} >
          <label>Name
            <input name='name' type="text" onChange={onChange} placeholder={match.params.name}></input>
          </label>
          <label>Surname
            <input name='name' type="text" onChange={onChange} placeholder={match.params.surname}></input>
          </label>
          < button >Save</button>
        </form>
        <Link to={`/${match.params.uname}`}>View profile</Link></div>
    </div >
  );
};

export default EditView;
