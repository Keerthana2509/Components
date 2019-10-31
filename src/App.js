import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Component/Header';
import Click from './Component/AlertButton';
import Menu from './Component/List';
import Details from './Component/Cards';
import Popup from './Component/Modal';
import Drop from './Component/Menu';
import Status from './Component/Progress';
import Linker from './Component/Link';
import Counter from './Component/Counter';
import ChangeOfText from './Component/TextChange';
import TwoWayBind from './Component/TwoWayBinding';

function App() {
  let study = ["React Setup","React Modules","Hands-on","Events"];
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Menu study={study}/>
      </header>
      <Details/>
      <Popup/>
      <Linker/>
      <Drop/>
      <Status/>
      <Click variant="primary" text="Click"/>
      <Counter/>
      <ChangeOfText/>
      <TwoWayBind/>
    </div>
  );
}

export default App;
