import "./App.css";
import Title from "./components/Title";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import Reset from "./components/Reset";
import Dashboard from "./components/Dashboard";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/reset" element={<Reset />} />
          <Route exact path="/dashboard" element={<Title />} />
          {/* <Route exact path="/dashboard" element={<Dashboard/>} /> */}
          {/* Dashboardnya ganti ke title */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="app">
//       <Title />
//     </div>
//   );
// }

// export default App;
