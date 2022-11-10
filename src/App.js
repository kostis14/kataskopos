import "./App.css";
import MainScreen from "./Components/MainScreen";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Settings from "./Components/Settings";
import Game from "./Components/Game";
import RoleDisplay from "./Components/RoleDisplay";
import StartedGame from "./Components/StartedGame";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="settings" element={<Settings />} />
        <Route path="game" element={<Game />} />
        <Route path="roleDisplay" element={<RoleDisplay />} />
        <Route path="startedGame" element={<StartedGame />} />
      </Routes>
    </Router>
  );
}

export default App;
