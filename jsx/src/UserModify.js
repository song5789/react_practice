import React, { useCallback, useContext } from "react";
import useInputs from "./useInputs";
import { UserDispatch } from "./App";

function UserModify({ user, onToggle }) {
  const [{ username, email }, onChange, reset] = useInputs(user);

  const dispatch = useContext(UserDispatch);

  const onModify = useCallback(
    (id) => {
      dispatch({
        type: "UPDATE_USER",
        id,
        username,
        email,
      });
      reset();
      onToggle(user.id);
    },
    [dispatch, username, email, reset, onToggle, user.id]
  );

  return (
    <>
      <div>유저: {user.username} 수정</div>

      <div>
        <input name="username" value={username} onChange={onChange} />
        <input name="email" value={email} onChange={onChange} />
        <button onClick={() => onModify(user.id)}>수정</button>
        <button onClick={() => onToggle(user.id)}>취소</button>
      </div>
    </>
  );
}

export default React.memo(UserModify);
