function Form() {
  function handleSubmit(e) {
    // 일반 JS 에선 form 동작을 false를 반환하는것으로 막을 수 있음.
    // React 에선 preventDefault() 로 명시적으로 막아야함.
    e.preventDefault(); // 전송을 막음
    console.log("You clicked submit.");
  }

  return (
    <form action="https://www.naver.com" onSubmit={handleSubmit}>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
