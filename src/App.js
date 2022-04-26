import React from 'react';
import './App.css'
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Sobremi from './components/Sobremi';
import Reel from './components/Reel';
import Fotos from './components/Fotos';

function App() {
  return (
    <div>
      {/* <Navbar/> */}
      <Sobremi/>
      {/* <Portfolio/> */}
      <Reel/>
      <Fotos></Fotos>
      <Contact/>
    </div>
  );
}

export default App;
