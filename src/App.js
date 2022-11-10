import "./App.css";
import MainScreen from "./Components/MainScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings";
import Game from "./Components/Game";
import RoleDisplay from "./Components/RoleDisplay";
import StartedGame from "./Components/StartedGame";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/Settings" element={<Settings />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/RoleDisplay" element={<RoleDisplay />} />
        <Route path="/StartedGame" element={<StartedGame />} />
      </Routes>
    </Router>
  );
}

export default App;
