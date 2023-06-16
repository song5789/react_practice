import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import { useCallback, useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserModify from "./UserModify";

function App() {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;

  const [users, setUsers] = useState([
    {
      id: 1,
      username: "velopert",
      email: "public.velopert@gamil.com",
      active: false,
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

  const onCreate = useCallback(() => {
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
  }, [users, username, email]);

  const onChange = useCallback(
    (e) => {
      const { name, value } = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(users.map((item) => (item.id === id ? { ...item, active: !item.active } : item)));
    },
    [users]
  );

  const onModify = (id) => {
    let modUser = users.map((item) => (item.id === id ? { ...item, username, email } : item));
    setUsers(modUser);
  };

  const inputArea = [];
  users.forEach((item) => {
    if (item.active) {
      inputArea.push(<UserModify inputs={inputs} user={item} key={item.id} onChange={onChange} onModify={onModify} onToggle={onToggle} />);
    }
  });

  const isActivate = (users) => {
    for (let user of users) {
      if (Object.values(user).includes(true)) return true;
    }
  };

  const chkAct = useMemo(() => isActivate(users), [users]);

  return (
    <>
      {inputArea}
      {chkAct ? null : <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />}
      <UserList users={users} i onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default App;
