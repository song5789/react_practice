function InputTodo({ todo, onChange, onKeyDown, onCreate }) {
  return (
    <div>
      <div>
        <span>일정 관리</span>
      </div>
      <div>
        <input placeholder="Input To do..." value={todo} onChange={onChange} onKeyDown={onKeyDown} />
        <button onClick={onCreate}>+</button>
      </div>
    </div>
  );
}

export default InputTodo;
