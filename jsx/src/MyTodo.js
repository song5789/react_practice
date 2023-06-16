import { useCallback, useMemo, useRef, useState } from "react";
import InputTodo from "./InputTodo";
import ShowTodo from "./ShowTodo";
import "./MyTodo.css";

function MyTodo() {
  const [todo, setTodo] = useState("");
  const [todoLists, setTodoLists] = useState([
    {
      id: 1,
      todo: "리액트 기초 알아보기",
      isDone: true,
    },
    {
      id: 2,
      todo: "컴포넌트 스타일링 보그",
      isDone: false,
    },
    {
      id: 3,
      todo: "일정 관리 앱 만들어보기",
      isDone: false,
    },
  ]);
  const nextId = useRef(4);

  const onChange = useCallback(
    (e) => {
      const { value } = e.target;
      setTodo(value);
      console.log(e);
    },
    [todo]
  );

  const onCreate = useCallback(
    (e) => {
      let newTodo = {
        id: nextId.current++,
        todo,
        isDone: false,
      };

      setTodoLists(todoLists.concat(newTodo));
      setTodo("");
    },
    [todoLists, todo]
  );

  const onKeyDown = useCallback(
    (e) => {
      if (e.keyCode === 13) {
        let newTodo = {
          id: nextId.current++,
          todo,
        };

        setTodoLists(todoLists.concat(newTodo));
        setTodo("");
      }
    },
    [todoLists, todo]
  );

  const onRemove = useCallback(
    (id) => {
      setTodoLists(todoLists.filter((list) => list.id !== id));
    },
    [todoLists]
  );
  const onChecked = useCallback(
    (id) => {
      setTodoLists(todoLists.map((list) => (list.id === id ? { ...list, isDone: !list.isDone } : list)));
      console.log(id);
    },
    [todoLists]
  );
  const countTotalList = (arr) => {
    return arr.length;
  };
  const countNotYet = (arr) => {
    return arr.filter((item) => !item.isDone).length;
  };
  const contDoneTask = (arr) => {
    return arr.filter((item) => item.isDone).length;
  };

  const total = useMemo(() => countTotalList(todoLists), [todoLists]);
  const doneYet = useMemo(() => countNotYet(todoLists), [todoLists]);
  const doneTask = useMemo(() => contDoneTask(todoLists), [todoLists]);

  return (
    <>
      <div style={{ width: "100%", display: "flex", flexDirection: "row", justifyContent: "center" }}>
        <div>
          <div>Total: {total} 개</div>
          <div>Done Yet: {doneYet} 개</div>
          <div>Progress: {Math.floor((doneTask / total) * 100)} %</div>
        </div>
      </div>
      <div className="wrap">
        <InputTodo todo={todo} onChange={onChange} onKeyDown={onKeyDown} onCreate={onCreate} />
        <ShowTodo todoLists={todoLists} onRemove={onRemove} onChecked={onChecked} />
      </div>
    </>
  );
}

export default MyTodo;
