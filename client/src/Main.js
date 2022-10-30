import React from 'react';
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";
import Torophies from "./components/Torophies";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function  Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/trophies' element={<Torophies/>}  />
      </Routes>
    </BrowserRouter>
  );
}

export default Main;