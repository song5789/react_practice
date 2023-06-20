import React, { useCallback, useContext, useEffect } from "react";
import { UserDispatch } from "./App";
function User({ user, onToggle }) {
  const dispatch = useContext(UserDispatch);

  const onRemove = useCallback(
    (id) => {
      dispatch({
        type: "REMOVE_USER",
        id,
      });
    },
    [dispatch]
  );
  return (
    <div>
      <b style={{ color: user.active && "green", cursor: "pointer" }} onClick={() => onToggle(user.id)}>
        {user.username}
      </b>
      <span> ({user.email}) </span>
      <button style={{ position: "relative", zIndex: 1 }} onClick={() => onRemove(user.id)}>
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onToggle }) {
  return (
    <>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} onToggle={onToggle} />
        ))}
      </div>
    </>
  );
}

export default React.memo(UserList);
