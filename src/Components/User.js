import React from 'react';
import "../Css/User.css";

function User({avatar, username}) {
  return (
    <div className="user-container">
        <img src={`./images/image-${avatar}.jpg`} alt="Avatar" />
        <div>
            <h1>{username}</h1>
            <h3>Verified Graduate</h3>
        </div>
    </div>
  )
}

export default User;