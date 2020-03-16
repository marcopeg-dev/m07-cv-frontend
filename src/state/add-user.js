import { useState } from "react";

export const useAddUser = (validate) => {
  const initialFormValues = { name: "", surname: "", profilePic: "https://images.wisegeek.com/beethoven.jpg" }
  const [newUser, setNewUser] = useState(initialFormValues);
  const [isLoading, setIsLoading] = useState(true);
  const [msg, setMsg] = useState(null)


  const onChange = (e) => {
    const { name, value } = e.target
    setNewUser({ ...newUser, [name]: value })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    putData()
  }

  const putData = () => {
    setIsLoading(true)
    fetch(`https://m07.herokuapp.com/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      mode: "cors",
      body: JSON.stringify(newUser)
    })
      .then(response => response.json())
      .then(() => {
        setIsLoading(false)
        setNewUser(initialFormValues)
        setMsg({ success: "Yah, Succuss!" });
      })
      .catch(err => {
        setMsg({ error: "Sorry there is somthing went wrong" })
        console.log(err)
      });
  }

  return {
    isLoading,
    onChange,
    onSubmit,
    newUser,
    msg
  };
};
