import React from 'react';
import Picture from './components/Picture'
import TodaysDate from './components/Date';
import Quote from './components/Quote';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodaysDate />
      <header className="App-header">
        <Picture />
        <Quote />
      </header>
    </div>
  );
}

export default App;
