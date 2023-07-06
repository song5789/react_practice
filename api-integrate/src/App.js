import Users from "./Users";
import { UsersProvider } from "./UsersContext";
import logo from "./logo.svg";

function App() {
  return (
    <UsersProvider>
      <Users />
    </UsersProvider>
  );
}

export default App;
