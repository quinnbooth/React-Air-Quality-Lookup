import './App.css';
import LocationSelect from './components/LocationSelect';
//import {Routes, Route, Link} from 'react-router-dom';
import Panoramic from './components/Panoramic';
import TestQuery from './components/TestQuery';

function App() {
  return (
    <div className="App">
        <div className='container'>
          <div className='panoramicContainer'>
            <Panoramic />
            {/* <TestQuery latitude="50" longitude="50" /> */}
          </div>
          <LocationSelect />
        </div>
    </div>
  );
}

export default App;
