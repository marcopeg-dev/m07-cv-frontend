import { useEffect, useState } from "react";

export const UsersList = props => {
  const [users, setUsers] = useState([]);
  const [hasError, setErrors] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(`https://m07.herokuapp.com/`);
      res
        .json()
        .then(users => setUsers(users))
        .catch(err => console.error(err));
    } fetchData();
  }, []);

  return {
    users
  };
};


//   useEffect(() => {
//     async function fetchData() {
//       const res = await fetch("https://swapi.co/api/planets/4/");
//       res
//         .json()
//         .then(res => setPlanets(res))
//         .catch(err => setErrors(err));
//     }

//     fetchData();
//   });
//     return (
//     <div>
//       <span>{JSON.stringify(planets)}</span>
//       <hr />
//       <span>Has error: {JSON.stringify(hasError)}</span>
//     </div>
//   );
// };
