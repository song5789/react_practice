import React, { useCallback, useContext, useEffect, useRef } from "react";
import useInputs from "./hooks/useInputs";
import { UserDispatch } from "./App";

function CreateUser() {
  const [{ username, email }, onChange, reset] = useInputs({
    username: "",
    email: "",
  });

  const nameInput = useRef();
  const nextId = useRef(4);
  const dispatch = useContext(UserDispatch);

  const onCreate = useCallback(() => {
    dispatch({
      type: "CREATE_USER",
      user: {
        id: nextId.current,
        username,
        email,
        active: false,
      },
    });
    reset();
    nextId.current++;
    nameInput.current.focus();
  }, [dispatch, username, email]);

  return (
    <div>
      <input name="username" placeholder="계정명" ref={nameInput} onChange={onChange} value={username} />
      <input name="email" placeholder="이메일" onChange={onChange} value={email} />
      <button onClick={onCreate}>등록</button>
    </div>
  );
}
export default React.memo(CreateUser);
