import React from 'react';
import './App.css'
import Navbar from './components/Navbar';
import Portfolio from './components/Portfolio';
import Sobremi from './components/Sobremi';

function App() {
  return (
    <div>
      <Navbar/>
      <Sobremi/>
      <Portfolio/>
    </div>
  );
}

export default App;
