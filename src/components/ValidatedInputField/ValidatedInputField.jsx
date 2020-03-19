import React, { useState, forwardRef, useImperativeHandle } from "react";

const ValidatedInputField = forwardRef((props, ref) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  const handleChange = event => {
    setValue(event.target.value);
    setError("");
    props.onChange(event);
  };

  const validate = () => {
    //return true if is valid
    //else return false
    if (props.validation) {
      const criteria = props.validation.split("|");

      for (let i = 0; i < criteria.length; i++) {
        let currentCriteria = criteria[i]
        if (currentCriteria === "required") {
          if (!value) {
            setError("*This field is required");
            return false
          }
        }
      }
    } return true;
  }

  useImperativeHandle(ref, () => {
    return {
      validate: () => validate()
    }
  })

  return (
    <div>
      {props.label && <label className="edit-profile__label">{props.label}</label>}
      <input
        className="edit-profile__input"
        name={props.name}
        onChange={(event) => handleChange(event)}
        type={props.type}
        value={props.value ? props.value : value}
        autoComplete={props.autoComplete}
        validation={props.validation}
      />
      {error && <p className="edit-profile__errorMessage">{error}</p>}
    </div>
  );
});

ValidatedInputField.defaultProps = {
  label: "",
  name: "",
  type: "",
  value: "",
  autoComplete: "off",
  validation: ""
};

export default ValidatedInputField;
