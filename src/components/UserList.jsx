import React from "react";

function UserList({ userData, onClick }) {
  return (
    <ul>
      {userData.map((user) => {
        return (
          <li onClick={() => onClick(user)} key={user.login.uuid}>
            {user.name.first + " " + user.name.last}
          </li>
        );
      })}
    </ul>
  );
}

export default UserList;
