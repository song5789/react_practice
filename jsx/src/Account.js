import React, { useRef, useState } from "react";
import InputAccount from "./InputAccount";
import ShowAccount from "./ShowAccount";
import "./Account.css";

function Account() {
  const [account, setAccount] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });
  const { firstName, lastName, password, email } = account;

  const [accounts, setAccounts] = useState([
    {
      id: 1,
      firstName: "test",
      lastName: "test",
      password: "1234",
      email: "1234@sample.com",
      active: false,
    },
  ]);
  const nextId = useRef(2);

  const onChange = (e) => {
    const { name, value } = e.target;
    setAccount({
      ...account,
      [name]: value,
    });
  };

  const onCreate = () => {
    const newAcc = {
      id: nextId.current,
      firstName,
      lastName,
      password,
      email,
      active: false,
    };

    setAccounts(accounts.concat([newAcc]));

    setAccount({
      firstName: "",
      lastName: "",
      password: "",
      email: "",
    });

    nextId.current += 1;
  };

  const onRemove = (id) => {
    setAccounts(accounts.filter((item) => item.id !== id));
  };

  const onToggle = (id) => {
    setAccounts(accounts.map((item) => (item.id === id ? { ...item, active: !item.active } : item)));
  };

  return (
    <>
      <InputAccount firstName={firstName} lastName={lastName} email={email} password={password} onChange={onChange} onCreate={onCreate} />
      <ShowAccount Accounts={accounts} onRemove={onRemove} onToggle={onToggle} />
    </>
  );
}

export default Account;
