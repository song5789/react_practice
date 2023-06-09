import axios from "../node_modules/axios/index";

export async function getUsers() {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users");
  return res.data;
}

export async function getUser(id) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);
  return res.data;
}
