function Todo({ list, onRemove, onChecked }) {
  return (
    <>
      <div>
        {" "}
        <div>
          <input type="checkbox" checked={list.isDone} onClick={() => onChecked(list.id)} />
        </div>
        <div>
          <span style={{ textDecoration: list.isDone ? "line-through" : "none" }}>{list.todo}</span>
        </div>
        <div>
          <button
            onClick={() => {
              onRemove(list.id);
            }}
          >
            <i className="fa fa-trash"></i>
          </button>
        </div>
      </div>
    </>
  );
}

function ShowTodo({ todoLists, onRemove, onChecked }) {
  return (
    <>
      <div>
        {todoLists.map((list) => (
          <Todo list={list} onRemove={onRemove} onChecked={onChecked} key={list.id} />
        ))}
      </div>
    </>
  );
}

export default ShowTodo;
