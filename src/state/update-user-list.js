import { useEffect, useState } from "react";

export const UpdateUsersList = ({ uname, evt }) => {
  const [updatedUsers, setUpdatedUsers] = useState([]);

  useEffect(() => {
    fetch(`https://m07.herokuapp.com/${uname}`, {
      headers: { "Content-Type": "application/json; charset=utf-8" },
      method: 'PUT',
      body: JSON.stringify({
        name: evt.target,
        surname: evt.target
      })
    })
      .then(response => response.json())
      .then(users => setUpdatedUsers(users))
      .catch(err => console.error(err));
  }, [uname]);

  return {
    updatedUsers
  };
};
