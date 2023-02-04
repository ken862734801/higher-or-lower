import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import { HashRouter, Route, Routes, Link } from "react-router-dom";
import Header from './components/header';
import Game from './components/game';




function App() {

  return (
    <div className="App">
      <Header/>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Game/>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
