import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const RandomParagraph = function() {
    return React.createElement('p', {style: {color: '#57bb55', fontSize: '30px'}}, 'Welcome to Cowell');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <RandomParagraph />
        {/* the Syntax above is then being compiled into syntax like below */}
        {React.createElement('p', {style: {color: '#203532', fontSize: '30px'}}, 'Beyond borders')}
      </header>
    </div>
  );
}

export default App;
