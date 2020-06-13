import React from "react";

function UserDetail({ clickedUser }) {
  const { first, last } = clickedUser.name;
  const { large } = clickedUser.picture;
  const { country, state } = clickedUser.location;

  return (
    <div className="card">
      <div className="top">
        <h2 className="name">{first + " " + last}</h2>
        <img src={large} alt={first + " " + last} className="circle-img" />
      </div>
      <div className="bottom">
        <p className="info">{clickedUser.email}</p>
        <p className="info">{clickedUser.phone}</p>
        <p className="info">{`${state}, ${country}`}</p>
      </div>
    </div>
  );
}

export default UserDetail;
