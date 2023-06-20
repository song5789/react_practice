import React, { useContext, useEffect, useRef } from "react";
import { UserDispatch } from "./App";

const User = React.memo(function User({ user }) {
  const dispatch = useContext(UserDispatch);
  useEffect(() => {
    console.log("User mount");
    return () => {
      console.log("User rerendering");
    };
  }, [user]);
  return (
    <div>
      <b
        onClick={() => {
          dispatch({ type: "TOGGLE_USER", id: user.id });
        }}
        style={{ cursor: "pointer", color: user.active ? "green" : "black" }}
      >
        {user.username}
      </b>
      <span>({user.email})</span>
      <button
        onClick={() => {
          dispatch({ type: "REMOVE_USER", id: user.id });
        }}
      >
        삭제
      </button>
    </div>
  );
});

function UserList({ users }) {
  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
}

export default React.memo(UserList);
