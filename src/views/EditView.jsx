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
      <div> <h3>edit {match.params.uname}</h3>
        <form onSubmit={onSubmit}>
          <label>Name</label>
          <input value={match.params.name} name='name' type="text" onChange={onChange}></input>
          {/* {users.map(function (user, i) {
            console.log(user.id)
            return (
              user.id === match.params.uname ?
                <input value={user.name} name='name' type="text" onChange={onChange} /> :
                <input value={''}
                />
            )
          })
          } */}
          <label>Surname</label>
          <input value={match.params.surname} name='name' type="text" onChange={onChange}></input>

          <button>Save</button>
        </form>
        <Link to={`/${match.params.uname}`}>View profile</Link></div>
    </div>
  );
};

export default EditView;
