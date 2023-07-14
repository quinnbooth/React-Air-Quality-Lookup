import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import './App.css';
import Console from './components/Console';
//import {Routes, Route, Link} from 'react-router-dom';
import Panoramic from './components/Panoramic';

function App() {
  return (
    <div className="App">
        <div className='panoramicContainer'>
          <Panoramic />
        </div>
        <div className='contentContainer'>
          <Parallax pages={10}>
            <ParallaxLayer offset={0} className="center">
              <Console />
            </ParallaxLayer>
          </Parallax>
        </div>
    </div>
  );
}

export default App;
