import { useState, useEffect } from "react";

const useUpdateUser = (initState, uname) => {
  const [edit, setEdit] = useState(initState)
  const [user, setUser] = useState(initState)

  useEffect(() => {
    console.log("useEffect")

    fetch(`https://m07.herokuapp.com/${uname}`)
      .then(response => response.json())
      .then(user => {
        console.log(user)
        setUser(user)
        setEdit(user)
      })
      .catch(err => console.error(err));
  }, [uname]);

  const onSubmit = (event) => {
    if (event) event.preventDefault();
    makeCall();
  }

  const onChange = (event) => {
    event.persist();
    console.log("onChange" + event.target.value)
    setEdit(edit => ({ ...edit, [event.target.name]: event.target.value }));
  }
  return {
    onSubmit,
    onChange,
    edit,
    user
  };

  function makeCall() {
    fetch(`https://m07.herokuapp.com/${uname}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(edit)
    })
      .then(response => response.json())
      .then(user => {
        setUser(user)
      })
      .catch(err => {
        console.log(err.message);
      });
  }
}
export default useUpdateUser;
