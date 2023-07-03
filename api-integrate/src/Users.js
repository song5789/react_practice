import React, { useState, useEffect } from "react";
import axios from "../node_modules/axios/index";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      //loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(response.data); // 데이터는 response.data 에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false); // 로딩완료.
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>; // 로딩상태라면 해당 내용을
  if (error) return <div>에러가 발생했습니다.</div>; // 에러가 발생했다면 해당 내용을
  if (!users) return null; // API 를 불러왔는데 내용이 없다면 아무것도 렌더링하지 않습니다.

  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}

export default Users;
