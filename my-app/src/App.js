import React from 'react';
import Picture from './components/Picture'
import TodaysDate from './components/Date';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodaysDate />
        <Picture />
        <Quote />
      </header>
    </div>
  );
}

export default App;
