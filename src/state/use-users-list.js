import { useEffect, useState } from "react";

export const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [error2, setError2] = useState(null);
  const [loadingList, setLoadingList] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoadingList(true);
      setError2(null);
      try {
        const res = await fetch(`https://m07.herokuapp.com/`);
        const users = await res.json();
        setUsers(users)
      } catch (err) {
        console.error(err);
        setError2(new Error("Sorry, could not load users list"));
      } finally {
        setLoadingList(false);
      }
    };
    fetchData();
  }, []);

  return {
    users,
    error2,
    loadingList
  };
};



