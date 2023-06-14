import { useRef } from "react";

function CreateUser({ username, email, onChange, onCreate, nameInput }) {
  return (
    <div>
      <input name="username" placeholder="계정명" ref={nameInput} onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default CreateUser;
