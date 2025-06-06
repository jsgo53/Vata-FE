import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Input from "./pages/Input";
import Result from "./pages/Result";
import Storage from "./pages/Storage";
import TokenGuide from "./pages/TokenGuide"; // 추가된 부분

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/input" element={<Input />} />
        <Route path="/result" element={<Result />} />
        <Route path="/storage" element={<Storage />} />
        <Route path="/token-guide" element={<TokenGuide />} /> {/* 추가된 라우트 */}
      </Routes>
    </Router>
  );
}

export default App;
