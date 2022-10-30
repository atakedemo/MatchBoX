import './App.css';
import React from 'react';
import  Navbar from "./components/Navbar";
import Header from './components/Header';
import Main from './Main';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default App;