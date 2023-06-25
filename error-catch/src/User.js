import React from "react";

function User({ users, onToggle }) {
  //   if (!users) return null;

  return (
    <ul>
      {users.map((user) => (
        <li key={user.id} onClick={() => onToggle(user.id)}>
          {user.name}
        </li>
      ))}
    </ul>
  );
}

User.defaultProps = {
  onToggle: () => {
    console.warn("onToggle is missing!");
  },
};

export default User;
