const Child = (props) => {
  console.log(props.change);
  return (
    <>
      <button onClick={() => props.change("Bye")}>Bye.</button>
    </>
  );
};

export default Child;
