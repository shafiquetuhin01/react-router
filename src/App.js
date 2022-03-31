import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Friends from "./components/Friends/Friends";
import Home from "./components/Home/Home";
import NotFound from "./components/NotFound/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header/Header";
import FriendDetail from "./components/FriendDetail/FriendDetail";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route
          path="/friend/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="/about-us" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
