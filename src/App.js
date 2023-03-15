import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Update from "./pages/Update";
import Login from "./pages/loginPage";
import Success from "./pages/successPage";
import TeamPage from "./pages/TeamPage";
import MatchPageA from "./pages/MatchPageA";
import MatchPageB from "./pages/MatchPageB";

function App() {
  return (
    <BrowserRouter>
      <nav>
        <h1>ND8L Pool League</h1>
        <Link to="/home">Home</Link>
        <Link to="/create">Create New Player</Link>
        <Link to="/">Login</Link>
        <Link to="/teampage">Team Page</Link>
        <Link to="/matchpagea">Match Page A</Link>
        <Link to="/matchpageb">Match Page B</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/success" element={<Success />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/:id" element={<Update />} />
        <Route path="/teampage" element={<TeamPage />} />
        <Route path="/matchpagea" element={<MatchPageA />} />
        <Route path="/matchpageb" element={<MatchPageB />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
