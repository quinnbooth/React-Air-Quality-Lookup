import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Homepage from './components/Homepage';
import Planner from './components/Planner';

function App() {
  return (
    <div className="App">
      <nav className="nav">
        <Link to="/home" className="nav-item">Home</Link>
        <Link to="/planner" className="nav-item">Planner</Link>
      </nav>
      <Routes>
        <Route path="/home" element={<Homepage />} />
        <Route path="/planner" element={<Planner />} />
      </Routes>
    </div>
  );
}

export default App;
