import logo from "./logo.svg";
import "./App.css";
import Search from "./components/Search/Search";
import { Routes, Route, Link } from "react-router-dom";
import MissingNo from "./components/MissingNo/MissingNo";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <div className="top-bar">
        <Link to="/" className="App-logo">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </div>
      <Search />

      {/* <Routes>
        <Route exact  path='/' element={<Home />} />
        <Route path="*" element={<MissingNo />} />
      </Routes> */}
    </div>
  );
}

export default App;
