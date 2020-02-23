import { useEffect, useState } from "react";

export const useBackend = uname => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Fetch users
  useEffect(() => {
    const load = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`https://m07.herokuapp.com/`);
        const data = await res.json();
        console.log(data);
        setUsers(data);
      } catch (err) {
        console.error(err);
        setError(new Error("could not load profile"));
      } finally {
        setIsLoading(false);
      }
    };

    load();
    console.log("effect has been run");
  }, []);

  return {
    isLoading,
    users,
    error
  };
};
