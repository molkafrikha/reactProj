import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import Events from './components/Events';

function App() {
  return (
    <div className="App">
      <Events />
    </div>
  );
}

export default App
