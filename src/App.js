import React from 'react';
import Menu from './Menu';
import Settings from './Settings';
import MenuItem from './MenuItem';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header>
        <Menu />
        <Settings />
      </header>
      <main>
        <MenuItem imageSrc="/images/home.jpg"/>
      </main>
    </div>
  );
};

export default App;
