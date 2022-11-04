import React from 'react';
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";
import Torophies from "./components/Torophies";
import Vote from "./components/Vote";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function  Main() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Login/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/trophies' element={<Torophies/>}  />
        <Route path='/vote' element={<Vote/>}  />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Main;