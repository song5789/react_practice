import styled from "styled-components";
import { useTodoState } from "./TodoContext";

const TodoHeadBlock = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;
  h1 {
    margin: 0;
    font-size: 36px;
    color: #343a40;
  }
  .day {
    margin-top: 4px;
    color: #868e96;
    font-size: 21px;
  }
  .task-left {
    color: #20c997;
    font-size: 18px;
    margin-top: 40px;
    font-weight: 700;
  }
`;

function TodoHead() {
  const todos = useTodoState();
  const undoneTasks = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-kr", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-kr", {
    weekday: "long",
  });

  function isWeekend(day) {
    switch (day) {
      case "토요일":
        return "#1e51c7";
      case "일요일":
        return "#ed1539";
      default:
        return "#868e96";
    }
  }

  return (
    <TodoHeadBlock>
      <h1>{dateString}</h1>
      <div className="day" style={{ color: isWeekend(dayName) }}>
        <b>{dayName}</b>
      </div>
      <div className="task-left">할 일 {undoneTasks.length}개 남음</div>
    </TodoHeadBlock>
  );
}

export default TodoHead;
