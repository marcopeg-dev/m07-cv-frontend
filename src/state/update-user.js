export const updateUser = (uname, edit) => {
  console.log("there");
  console.log("uname", uname);
  fetch(`https://m07.herokuapp.com/${uname}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    mode: "cors",
    body: JSON.stringify(edit)
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
