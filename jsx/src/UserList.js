function User({ user, onRemove, onToggle }) {
  return (
    <div>
      <b style={{ color: user.active && "green", cursor: "pointer" }} onClick={() => onToggle(user.id)}>
        {user.username}
      </b>
      <span> {user.email}</span>
      <button style={{ position: "relative", zIndex: 1 }} onClick={() => onRemove(user.id)}>
        삭제
      </button>
    </div>
  );
}

function UserList({ users, onRemove, onToggle }) {
  return (
    <>
      <div>
        {users.map((user) => (
          <User user={user} key={user.id} onRemove={onRemove} onToggle={onToggle} />
        ))}
      </div>
    </>
  );
}

export default UserList;
