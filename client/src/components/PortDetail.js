import React from 'react'
import iconImage from "../img/Bearko.jpg";　
import blonde from "../img/blonde.png";　
import silver from "../img/silver.png";　
import gold from "../img/gold.png";　
import MyCry from "../img/MyCry.jpg";　
import Dragon from "../img/Dragon.png";　

const PortDetail = () => {
    return (
        <div className="portforioContainer">
            <h1 className="title">BCG Portfolio</h1>
            <p></p>
            <div className="playerContainer2">
                <div className="playerItem2"><img src={iconImage } alt="アイコン" width="80" height="80" border="0"></img></div>
                <div className="pc2Item"><img src={MyCry } alt="マイクリ" width="40" height="40" border="0"></img> My Crypt Heroes </div>
                <div className="pc2Item"><img src={gold } alt="金トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: 2 </div>
                <div className="pc2Item"><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: 1 </div>
                <div className="pc2Item"><img src={blonde } alt="銅トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: 1 </div>
            </div>
            <p></p>
            <div className="Welcome">
                Connect more than one account to experience the full potential of this dapp! 💡
            </div>
            <div className="ScoreTitle">
            <h2>Your Achievements</h2>
            <div className="TrophyDiscription">
                Select Trophy to see more
            </div>
            </div>
            <p></p>
            <div  className="TrophyDetail">
                <div className="TrophyItemGold">
                    <a class="gold">Red Gragon Yearly Champion</a>
                </div>
                <div className="TrophyItemSilver">
                    <a>Epic Hero Collector</a>
                </div>
                <div className="TrophyItemGold">
                    <a>Legendary Extension Collector</a>
                </div>
                <div className="TrophyItemGold">
                    <a>Legendary Hero Holder</a>
                </div>
                <div className="TrophyItemSilver">
                    <a>Red Dragon Silver Collector</a>
                </div>
                <div className="TrophyItemBlonze">
                    <a>Super Prime Member</a>
                </div>
            </div>
            <button type="button" className="DetailButton"><a href='/portfolio' style={{ color: "#fff", textDecoration: 'none' }}>Back Portfolio</a></button>

        </div>
    );
}

export default PortDetail