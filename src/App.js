import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Panoramic from './components/Panoramic';
import TestQuery from './components/TestQuery';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='panoramicContainer'>
            <Panoramic />
            <TestQuery />
          </div>
        </div>
    </div>
  );
}

export default App;
