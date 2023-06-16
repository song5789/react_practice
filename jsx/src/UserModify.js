function UserModify({ inputs, user, onChange, onModify, onToggle }) {
  const { username, email } = inputs;
  return (
    <>
      <div>유저: {user.username} 수정</div>
      <div>
        <input name="username" value={username} onChange={onChange}></input>
        <input name="email" value={email} onChange={onChange}></input>
        <button onClick={() => onModify(user.id)}>수정</button>
        <button onClick={() => onToggle(user.id)}>취소</button>
      </div>
    </>
  );
}

export default UserModify;
