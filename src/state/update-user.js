// import { useEffect, useState } from "react";

export const updateUser = (uname, user) => {
  console.log("there");
  console.log("uname", uname, "user", user);
  fetch(`https://m07.herokuapp.com/${uname}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(() => {
      console.log("now");
    })
    .catch(err => {
      console.log(err.message);
    });

  return;
};
