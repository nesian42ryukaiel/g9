import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

import Header from './components/Header';
import Main from './components/Main';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css';

function App() {
  const myDesign = (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <Nav></Nav>
      <Footer></Footer>
    </div>
  );
  const leedr0730 = (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
  return (
    myDesign
  );
}

export default App;
