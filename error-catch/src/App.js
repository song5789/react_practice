import logo from "./logo.svg";
import "./App.css";
import User from "./User";
import ErrorBoundary from "./ErrorBoundary";

function App() {
  const users = [{ id: 1, name: "velopert" }];
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
