import React from 'react'
import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";

import iconImage from "../img/Bearko.jpg";　
import blonde from "../img/blonde.png";　
import silver from "../img/silver.png";　
import gold from "../img/gold.png";　
import MyCry from "../img/MyCry.jpg";　
import PeopleIcon from '@mui/icons-material/People';

const contractAddressMain = "0x8995bd38c2012c04a4e7dd6f3ed61b29b1c43aa2";
const alchemyKeyMain = "XscvLAKJpQlvfnMFXa9uRQmJgD5pji3V"

const PortDetail = () => {
    const [torophies, setTorophies] = useState([]);
    const [nowTorophy, setNowTorophy] = useState("");
    const [golds, setGold] = useState([]);
    const [silvers, setSilver] = useState([]);
    const [bronzes, setBronze] = useState([]);

    useEffect(() => {
        async function getTorophyList () {
            const apiUrl = "https://polygon-mainnet.g.alchemy.com/nft/v2/"
            const apiKey = alchemyKeyMain;

            const options = {
                method: 'GET',
                url: apiUrl + apiKey + '/getNFTs',
            
                params: {
                  owner: window.ethereum.selectedAddress,
                  'contractAddresses[]': contractAddressMain,
                  withMetadata: 'true'
                },
                headers: {accept: 'application/json'}
            };
            
            //検証用
            //options.params.owner = "0xD958Ee1d2caFAc2d3D6B495528dEaD1B339896e5"

            axios
            .request(options)
            .then(function (response) {
                //console.log(response.data);
                if(response.data.totalCount>0){
                    appearTorophyList(response.data.ownedNfts);
                } else {
                    appearTorophyList([])
                }
                
            })
            .catch(function (error) {
                console.error(error);
            });
        }
        getTorophyList();
    }, []);

    function appearTorophyList(nftList){
        let tmpTorophies = nftList.filter(nft => nft.contract.address === contractAddressMain)
            .map(nft => ({
                rarity: nft.metadata.attributes[0].value,
                name: nft.metadata.name,
            }));
        const golds = nftList.filter(nft => nft.metadata.attributes[0].value === 'Gold');
        const silvers = nftList.filter(nft => nft.metadata.attributes[0].value === 'Silver');
        const bronzes = nftList.filter(nft => nft.metadata.attributes[0].value === 'Bronze');
        setGold(golds);
        setSilver(silvers);
        setBronze(bronzes);
        setTorophies(tmpTorophies);
    };

    function setClass (rarity) {
        if (rarity == 'Gold') {
            return "TrophyItemGold";
        } else if (rarity == 'Silver') {
            return "TrophyItemSilver"
        } else {
            return "TrophyItemBlonze"
        }
    }
    
    function setTorophyDetail () {
        let tgtTorophy = {"name":"","rarity":"blonde"}
        if (nowTorophy == "") {
            return (
                <div className="TrophyDiscription">
                <span>Select Trophy to see more</span>
                </div>
            )
        } else {
            tgtTorophy = nowTorophy;
            let tgtImg = blonde;
            if(tgtTorophy.rarity == "Gold"){
                tgtImg = gold;
            } else if(tgtTorophy.rarity == "Silver"){
                tgtImg = silver;
            }
            return (
                <div className="TrophyDiscription">
                    <div className='TrophyDiscItem01'>
                        <img src={tgtImg} alt="金トロフィー" width="30" height="30" border="0"></img>
                        <span>{tgtTorophy.name}</span>
                    </div>
                    <div className='TrophyDiscItem02'>
                        <span>See Source </span>
                    </div>
                    <div className='TrophyDiscItem02'>
                        <PeopleIcon/>
                        <span>3 (0.001%) </span>
                    </div>
                </div>
            )
        }
    }

    return (
        <div className="portforioContainer">
            <h1 className="title">BCG Portfolio</h1>
            <p></p>
            <div className="playerContainer2">
                <div className="playerItem2"><img src={iconImage } alt="アイコン" width="80" height="80" border="0"></img></div>
                <div className="pc2Item"><img src={MyCry } alt="マイクリ" width="40" height="40" border="0"></img> My Crypt Heroes </div>
                <div className="pc2Item"><img src={gold } alt="金トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: {golds.length} </div>
                <div className="pc2Item"><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: {silvers.length} </div>
                <div className="pc2Item"><img src={blonde } alt="銅トロフィー" width="30" height="30" border="0"></img></div>
                <div className="pc2Item2">: {bronzes.length} </div>
            </div>
            <p></p>
            <div className="Welcome">
                Connect more than one account to experience the full potential of this dapp! 💡
            </div>
            <div className="ScoreTitle">
                <h2>Your Achievements</h2>
                {setTorophyDetail(nowTorophy)}
            </div>
            <p></p>
            <div  className="TrophyDetail">
                {torophies.map((torophy) => (
                    <div className={setClass(torophy.rarity)}  key={torophy.name} onClick={() => setNowTorophy(torophy)}>
                        <div className={torophy.rarity}>{torophy.name}</div>
                    </div>
                ))}
            </div>
            <button type="button" className="DetailButton"><a href='/portfolio' style={{ color: "#fff", textDecoration: 'none' }}>Back Portfolio</a></button>

        </div>
    );
}

export default PortDetail