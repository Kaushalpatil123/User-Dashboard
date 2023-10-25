import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Loginpage from "./pages/Loginpage";
import Dashboard from "./pages/Dashboard";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Loginpage />} />
          <Route exact path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
