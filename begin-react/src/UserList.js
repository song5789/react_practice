import React, { useRef } from "react";

function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b onClick={() => onToggle(user.id)} style={{ cursor: "pointer", color: user.active ? "green" : "black" }}>
        {user.username}
      </b>{" "}
      <span>({user.email})</span>
      <button onClick={() => onRemove(user.id)}>삭제</button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
      ))}
    </div>
  );
}

export default UserList;
