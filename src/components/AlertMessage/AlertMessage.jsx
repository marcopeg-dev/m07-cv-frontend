import React from "react"
import "./style.css"

const AlertMessage = ({ msg }) => {
  let errorStyle = {}
  if (msg.error) {
    errorStyle.id = "error-box"
    errorStyle.face = "face2"
    errorStyle.mouth = "mouth sad"
    errorStyle.shadow = "shadow move"
    errorStyle.color = "red"
    errorStyle.alert = "Error!"
    errorStyle.text = msg.error
    errorStyle.button = "Try again"

  } else if (msg.success) {
    errorStyle.id = "success-box"
    errorStyle.face = "face"
    errorStyle.mouth = "mouth happy"
    errorStyle.shadow = "shadow scale"
    errorStyle.color = "green"
    errorStyle.alert = "Success!"
    errorStyle.text = msg.success
    errorStyle.button = "Go Home"

  }
  return (
    <>
      <div className="fd" >
        <div id="container">
          <div id={errorStyle.id}>
            <div className="dot"></div>
            <div className="dot two"></div>
            <div className={errorStyle.face}>
              <div className="eye"></div>
              <div className="eye right"></div>
              <div className={errorStyle.mouth}></div>
            </div>
            <div className={errorStyle.shadow}></div>
            <div className="message"><h1 className="alert">{errorStyle.alert}</h1><p>{errorStyle.text}</p></div>
            <button className="button-box" ><h1 className={errorStyle.color}>{errorStyle.button}</h1></button>
          </div>
        </div>
      </div>

    </>
  )

}

export default AlertMessage
