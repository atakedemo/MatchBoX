import React from 'react'
import iconImage from "../img/Bearko.jpg";　
import blonde from "../img/blonde.png";　
import silver from "../img/silver.png";　
import gold from "../img/gold.png";　

const PortDetail = () => {
    return (
        <div className="portforioContainer">
            <h1 className="title">BCG Portfolio</h1>
            <p></p>
            <div className="playerContainer">
                <div className="playerItem"><img src={iconImage } alt="アイコン" width="80" height="80" border="0"></img></div>
                <div className="playerItem"><p> Bearko.eth </p></div>
            </div>
            <div className="scoreContainer">
                <div className="Item">Score :  16800  </div>
                <div className="Item"><img src={gold } alt="金トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 4 </div>
                <div className="Item"><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 1 </div>
                <div className="Item"><img src={blonde } alt="銅トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 1 </div>
                <div className="Item">MostPlaying :  MyCryptHeros </div>
            </div>
            <p></p>
            <button type="button" className="DetailButton">Show Detail</button>

        </div>
    );
}

export default PortDetail