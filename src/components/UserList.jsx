import React, { useState } from "react";
import UserDetail from "./UserDetail";

function UserList({ userData }) {
  const [user, setUser] = useState(userData[0]);

  return (
    <div>
      <ul>
        {userData.map((user) => {
          return (
            <li
              onClick={() => {
                setUser(user);
              }}
              key={user.login.uuid}
            >
              {user.name.first + " " + user.name.last}
            </li>
          );
        })}
      </ul>

      <UserDetail clickedUser={user} />
    </div>
  );
}

export default UserList;
