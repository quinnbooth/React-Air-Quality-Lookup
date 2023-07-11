import './App.css';
import LocationSelect from './components/LocationSelect';
//import {Routes, Route, Link} from 'react-router-dom';
import Panoramic from './components/Panoramic';

function App() {
  return (
    <div className="App">
        <div className='contentContainer'>
          <div className='panoramicContainer'>
            <Panoramic />
          </div>
          <LocationSelect />
        </div>
    </div>
  );
}

export default App;
