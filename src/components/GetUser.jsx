import React, { useState } from "react";
import Button from "./Button";
import UserList from "./UserList";

function GetUser() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState("");

  const apiUrl = "https://randomuser.me/api/?results=5";

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      if (response.ok) {
        const data = await response.json();
        setUsers(data.results);
        setError("");
      } else {
        throw new Error("Something went wrong...");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  function handleSubmit() {
    fetchUsers();
  }

  const hasUserData = users.length !== 0;

  return (
    <div>
      <Button clickEvent={handleSubmit} />
      {hasError && <h3>{hasError}</h3>}
      {isLoading && (
        <img
          src="https://miro.medium.com/max/978/0*cWpsf9D3g346Va20.gif"
          alt="Loading Spinner"
        ></img>
      )}
      {!hasUserData ? (
        <h3>Please click the button to load users.</h3>
      ) : (
        <UserList userData={users} />
      )}
    </div>
  );
}

export default GetUser;
