import React from "react";
import axios from "../node_modules/axios/index";
import useAsync from "./useAsync";

async function getUsers(id) {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return response.data;
}

function User({ id }) {
  const [state] = useAsync(() => getUsers(id), [id]);
  const { loading, data: user, error } = state;

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다.</div>;
  if (!user) return null;

  return (
    <div style={{ border: "1px solid black", width: 600, margin: "1rem", padding: "0.5rem" }}>
      <h2>{user.username}</h2>
      <p>
        <b>Email:</b> {user.email}
      </p>
      <p>
        <b>Website:</b> {user.website}
      </p>
      <div style={{ borderTop: "1px solid black", borderBottom: "1px solid black" }}>
        <p>
          <b>Company:</b> {user.company.name} <br />
          <b>Catch Phrase:</b> {user.company.catchPhrase}
          <br />
          <b>{user.bs}</b>
        </p>
      </div>
      <p>
        <b>Tel: </b>
        {user.phone}
      </p>
    </div>
  );
}

export default User;
