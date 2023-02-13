import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Login from "./pages/loginPage";
import Success from "./pages/successPage";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>ND8L Pool League</h1>
        <Link to="/home">Home</Link>
        <Link to="/create">Create New Player</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
