import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <Link to="/" className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <Search />
    </div>
  );
}

export default App;
