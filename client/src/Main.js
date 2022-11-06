import React from 'react';
import Login from "./components/Login";
import Portfolio from "./components/Portfolio";
import Torophies from "./components/Torophies";
import Vote from "./components/Vote";
import PortDetail from "./components/PortDetail";
import { BrowserRouter, Route, Routes} from 'react-router-dom';

function  Main() {
  return (
    <div className='main'>
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Portfolio/>} />
        <Route path='/portfolio' element={<Portfolio/>} />
        <Route path='/trophies' element={<Torophies/>}  />
        <Route path='/vote' element={<Vote/>}  />
        <Route path='/detail' element={<PortDetail/>}  />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default Main;