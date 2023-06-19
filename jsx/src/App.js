import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CreateUser from "./CreateUser";
import UserModify from "./UserModify";

function App() {
  const [show, setShow] = useState(true);

  const [inputs, setInputs] = useState({
    username: "",
    email: "",
  });

  const { username, email } = inputs;
  let array = [];
  for (let i = 0; i < 100; i++) {
    array.push({
      id: i,
      username: "홍길동" + i,
      email: "gildong" + i + "@sample.com",
      active: false,
    });
  }

  const [users, setUsers] = useState(array);

  const nextId = useRef(4);

  const onCreate = useCallback(() => {
    const user = {
      id: nextId.current,
      username,
      email,
      active: false,
    };

    setUsers((users) => users.concat(user));

    setInputs({
      username: "",
      email: "",
    });

    nextId.current += 1;
  }, [username, email]);

  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    setInputs((inputs) => ({
      ...inputs,
      [name]: value,
    }));
  }, []);

  const onRemove = useCallback(
    (id) => {
      setUsers(users.filter((user) => user.id !== id));
    },
    [users]
  );

  const onToggle = useCallback(
    (id) => {
      setUsers(users.map((item) => (item.id === id ? { ...item, active: !item.active } : item)));
      window.scrollTo(0, 0);
    },
    [users]
  );

  const onModify = useCallback(
    (id) => {
      let modUser = users.map((item) => (item.id === id ? { ...item, username, email } : item));
      setUsers(modUser);
    },
    [users, inputs]
  );

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

  const countActUsers = (users) => {
    console.log("활성화 유저 계산중");
    return users.filter((item) => item.active).length;
  };

  const chkAct = useMemo(() => isActivate(users), [users]);
  const countAct = useMemo(() => countActUsers(users), [users]);

  return (
    <>
      {inputArea}
      {chkAct ? null : <CreateUser username={username} email={email} onChange={onChange} onCreate={onCreate} />}
      {show ? <UserList users={users} countAct={countAct} onRemove={onRemove} onToggle={onToggle} /> : null}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        show toggle
      </button>
    </>
  );
}

export default App;
