import React from "react"
import { useAddUser } from "../state/add-user";
import LoadingIndicator from "../components/LoadingIndicator";
import AlertMessage from "../components/AlertMessage"
import "../styles.css"

const AddUser = () => {

  const { isLoading, newUser, onChange, onSubmit, msg } = useAddUser()



  return (
    <div className="add-user__form">
      <form className="add-user__form__item" onSubmit={onSubmit}>
        <label className="add-user__form__label">Name*: </label>
        <input
          value={newUser.name || ''}
          className="form-Item__input"
          name="name"
          onChange={onChange}
          required
          pattern="[a-zA-Z]*"
        />
        <br />
        <label className="add-user__form__label">Surname*: </label>
        <input
          className="form-Item__input"
          name="surname"
          value={newUser.surname || ''}
          required
          pattern="[a-zA-Z]*"
          onChange={onChange}
        />
        <br />
        <label className="add-user__form__label">
          Image (Please provide URL)*:
      </label>
        <input
          className="form-Item__input"
          name="profile_pic"
          value={newUser.profile_pic || ''}
          onChange={onChange}
          required
        />
        <br />
        {console.log(msg)}
        {msg && (<AlertMessage msg={msg} />)}
        <button className="edit-profile__update--btn" type="submit">
          Save Profile
        </button>
      </form>
    </div>
  )
}

export default AddUser;
