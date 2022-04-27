import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./routes/Home";
import MyNav from "./routes/MyNav";
import Reservation from "./routes/Reservation";
import Community from "./routes/Community";
import MyPage from "./routes/Mypage";

function App() {
  return (
    <div className="App">
      <div className="bg-light border Head">Logo</div>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Reservation" element={<Reservation />} />
            <Route path="/Community" element={<Community />} />
            <Route path="/MyPage" element={<MyPage />} />
          </Routes>
        </div>
        <MyNav />
      </Router>
    </div>
  );
}

export default App;
