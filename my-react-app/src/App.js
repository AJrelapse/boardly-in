import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Dashboard from './pages/dashboard';
import Schedule from './pages/schedule';
import Communities from './pages/communities';
import Mentorship from './pages/mentorship';


const App = () => {
  return (
<div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/communities" element={<Communities />} />
          <Route path="/mentorship" element={<Mentorship />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
