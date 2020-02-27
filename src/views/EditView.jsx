import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UsersList } from '../state/use-users-list'
import { UpdateUsersList } from '../state/update-user-list'

const EditView = ({ match, children, uname }) => {

  const { users } = UsersList(uname);
  //console.log(match)
  // const { updatedUser } = UpdateUsersList(match)
  const [value, setValue] = useState('hi')
  const [updatedUsers, setUpdatedUsers] = useState([]);

  const updateUser = (evt) => {
    console.log('submitted')
    fetch(`https://m07.herokuapp.com/${match}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        name: evt.target.value,
        surname: evt.target.value
      })
    })
      .then(response => response.json())
      .then(users => setUpdatedUsers(users))
      .catch(err => console.error(err));
  }


  const onSubmit = event => {
    event.preventDefault()
    console.log(value)
    updateUser(event)

  }
  console.log(updatedUsers.length)
  console.log(users)


  return (
    <div>
      <div>
        <h3>edit {match.params.uname}</h3>
        <form onSubmit={onSubmit}>
          {users.map((user, i) => {
            if (user.id === match.params.uname) {
              return (
                <div>
                  <label>Name
            <input name='name' type="text" onChange={(e) => setValue(e.target.value)} placeholder={user.name}></input>
                  </label>
                  <br></br>
                  <label>Surname
            <input name='name' type="text" onChange={(e) => setValue(e.target.value)} placeholder={user.surname}></input>
                  </label></div>
              )
            }
          })}
          < button >Save</button>
        </form>
        <Link to={`/${match.params.uname}`}>View profile</Link></div>
    </div >
  );
};

export default EditView;
