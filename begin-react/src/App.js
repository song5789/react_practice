import React, { useMemo, useRef, useState } from "react";
import UserList from "./UserList";
import CreateUser from "./CreateUser";

// function countActiveUsers(users) {
//   console.log("활성 사용자 수를 세는중...");
//   return users.filter((item) => item.active).length;
// }

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });
  const { username, email } = inputs;
  const nameInput = useRef();

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gmail.com",
      active: true,
    },
    {
      id: 2,
      username: "tester",
      email: "tester@example.com",
      active: false,
    },
    {
      id: 3,
      username: "liz",
      email: "liz@example.com",
      active: false,
    },
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    setUsers(users.concat(user));
    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
    nameInput.current.focus();
  };
  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onRemove = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };
  const onToggle = (id) => {
    setUsers(users.map((user) => (user.id === id ? { ...user, active: !user.active } : user)));
  };
  const countActiveUsers = (users) => {
    console.log("활성 사용자 수를 세는중..");
    return users.filter((item) => item.active).length;
  };

  const count = useMemo(() => countActiveUsers(users), [users]);
  return (
    <>
      <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} nameInput={nameInput} />
      <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
      <div>활성사용자 수 : {count}</div>
    </>
  );
}

export default App;
