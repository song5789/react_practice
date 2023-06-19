import React, { useEffect } from "react";
function User({ user, onRemove, onToggle }) {
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

function UserList({ users, onRemove, onToggle, countAct }) {
  return (
    <>
      <div>활성화된 유저수: {countAct}</div>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>
    </>
  );
}

export default React.memo(UserList);
