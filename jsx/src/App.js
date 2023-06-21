import logo from "./logo.svg";
import "./App.css";
import UserList from "./UserList";
import React, { useCallback, useMemo, useReducer } from "react";
import CreateUser from "./CreateUser";
import UserModify from "./UserModify";

const initialState = {
  show: true,
  inputs: {
    username: "",
    email: "",
  },
  users: [
    {
      id: 1,
      username: "velopert",
      email: "velopert@example.com",
      active: false,
    },
  ],
};

function reducer(state, action) {
  switch (action.type) {
    case "CREATE_USER":
      return {
        ...state,
        users: state.users.concat(action.user),
      };
    case "TOGGLE_USER":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, active: !user.active } : user)),
      };
    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };
    case "TOGGLE_SHOW":
      return {
        ...state,
        show: !state.show,
      };
    case "UPDATE_USER":
      return {
        ...state,
        users: state.users.map((user) => (user.id === action.id ? { ...user, username: action.username, email: action.email } : user)),
      };
    default:
      return state;
  }
}

function isActivate(arr) {
  for (let item of arr) {
    if (Object.values(item).includes(true)) return true;
  }
}

function countActUsers(arr) {
  return arr.filter((item) => item.active).length;
}

export const UserDispatch = React.createContext(null);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { users, show } = state;

  const onToggle = useCallback((id) => {
    dispatch({
      type: "TOGGLE_USER",
      id,
    });
    window.scrollTo(0, 0);
  }, []);

  const inputArea = [];
  users.forEach((item) => {
    if (item.active) {
      inputArea.push(<UserModify user={item} key={item.id} onToggle={onToggle} />);
    }
  });

  const chkAct = useMemo(() => isActivate(users), [users]);
  const countAct = useMemo(() => countActUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <div>활성화된 유저수: {countAct}</div>
      {chkAct ? inputArea : <CreateUser />}
      {show ? <UserList users={users} countAct={countAct} onToggle={onToggle} /> : null}
      <button
        onClick={() => {
          dispatch({ type: "TOGGLE_SHOW" });
        }}
      >
        show toggle
      </button>
    </UserDispatch.Provider>
  );
}

export default App;
