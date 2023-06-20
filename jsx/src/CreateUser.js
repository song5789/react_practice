import React, { useCallback, useContext, useRef } from "react";
import { UserDispatch } from "./App";
import useInputs from "./useInputs";

function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });
  const dispatch = useContext(UserDispatch);
  const nextId = useRef(2);
  const nameInput = useRef();

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: { id: nextId.current, username, email, active: false },
    });
    reset();
    nextId.current++;
    nameInput.current.focus();
  }, [dispatch, username, email, reset]);
  return (
    <div>
      <input name="username" placeholder="계정명" ref={nameInput} onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}

export default React.memo(CreateUser);
