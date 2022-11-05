import React from 'react'
import iconImage from "../img/Bearko.jpg";　
import blonde from "../img/blonde.png";　
import silver from "../img/silver.png";　
import gold from "../img/gold.png";　
import MyCry from "../img/MyCry.jpg";　

const Portfolio = () => {
    return (
        <div className="portforioContainer">
            <h1 className="title">BCG Portfolio</h1>
            <p></p>
            <div className="playerContainer">
                <div className="playerItem"><img src={iconImage } alt="アイコン" width="80" height="80" border="0"></img></div>
                <div className="playerItem"><p> Bearko.eth </p></div>
            </div>
            <div className="scoreContainer">
                <div className="Item"><img src={gold } alt="金トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 2 </div>
                <div className="Item"><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 1 </div>
                <div className="Item"><img src={blonde } alt="銅トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: 1 </div>
                <div className="Item">MostPlaying :  <img src={MyCry } alt="マイクリ" width="20" height="20" border="0"></img> My Crypt Heroes </div>
            </div>
            <div className="Welcome">
                Connect more than one account to experience the full potential of this dapp! 💡
            </div>
            <div className="ScoreTitle">
            <h2>Your Achievements</h2>
            </div>
            <div className="Score">
            <table>
                <tr>
                    <th>GameTitle</th>
                    <th>Gold</th>
                    <th>Silver</th>
                    <th>Bronze</th>
                    <th></th>
                </tr>
                <tr>
                    <td><img src={MyCry } alt="マイクリ" width="20" height="20" border="0"></img> My Crypt Heroes </td>
                    <td><img src={gold } alt="金トロフィー" width="30" height="30" border="0"></img>　2</td>
                    <td><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img>　1</td>
                    <td><img src={blonde } alt="銅トロフィー" width="30" height="30" border="0"></img>　1</td>
                    <td><button type="button" className="DetailButton"><a href='/detail' style={{ color: "#fff", textDecoration: 'none' }}>Show Detail</a></button></td>
                </tr>
            </table>
            </div>

        </div>
    );
}

export default Portfolio