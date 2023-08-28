/**
 * ************************************
 *
 * @module  User
 * @author
 * @date
 * @description component that renders list of users
 *
 * ************************************
 */

import React, { useEffect, useState } from 'react';

const User = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = () => {
    fetch('/api/users')
      .then(resp => resp.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  };

  useEffect(fetchUsers, []);

  const usersDivs = users.map(user => {
    return (
      <p>
        Username: {user.username}, Age: {user.age}
      </p>
    );
  });

  console.log(usersDivs);

  return (
    <div>
      <h1>User Components here we go!</h1>
      {usersDivs}
    </div>
  );
};

export default User;
