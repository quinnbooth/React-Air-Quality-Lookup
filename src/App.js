import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Panoramic from './components/Panoramic';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='panoramicContainer'>
            <Panoramic />
          </div>
        </div>
    </div>
  );
}

export default App;
