import React from 'react'
import { useEffect, useState } from "react";
import iconImage from "../img/Bearko.jpg";
import blonze from "../img/blonde.png";
import silver from "../img/silver.png";
import gold from "../img/gold.png";
import MyCry from "../img/MyCry.jpg";
import CrySpe from "../img/Cryptospells.jpg";
import SprLan from "../img/Sprinterlands.jpg"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Button } from '@material-ui/core';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

const Portfolio = () => {
    const navigate = useNavigate();
    const [games, setGames] = useState([
        {'name':'My Crypt Heroes', 'img': MyCry,'gold':2, 'silver':1, 'bronze':1},
        {'name':'Crypto Spells', 'img': CrySpe,'gold':0, 'silver':1, 'bronze':1},
        {'name':'Sprinterlands', 'img': SprLan,'gold':0, 'silver':0, 'bronze':1}
    ]);
    const [golds, setGold] = useState([]);
    const [silvers, setSilver] = useState([]);
    const [bronzes, setBronze] = useState([]);

    useEffect(() => {
        async function getGameList () {
            const contractAddressMain = "0x8995bd38c2012c04a4e7dd6f3ed61b29b1c43aa2";
            const alchemyKeyMain = "XscvLAKJpQlvfnMFXa9uRQmJgD5pji3V"
            const apiUrl = "https://polygon-mainnet.g.alchemy.com/nft/v2/"
            const apiKey = alchemyKeyMain;
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            
            const options = {
              method: 'GET',
              url: apiUrl + apiKey + '/getNFTs',
          
              params: {
                owner: account,
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
                    appearGameList(response.data.ownedNfts);
                } else {
                    appearGameList([])
                }
                
              })
              .catch(function (error) {
                console.error(error);
              });
        };
        getGameList();
    }, []);

    function appearGameList(nftList){
        let tmpGames = []
        const golds = nftList.filter(nft => nft.metadata.attributes[0].value === 'Gold');
        const silvers = nftList.filter(nft => nft.metadata.attributes[0].value === 'Silver');
        const bronzes = nftList.filter(nft => nft.metadata.attributes[0].value === 'Bronze');
        setGold(golds);
        setSilver(silvers);
        setBronze(bronzes);
        tmpGames = [
            {'name':'My Crypt Heroes', 'img': MyCry,'gold':golds.length, 'silver':silvers.length, 'bronze':bronzes.length},
            {'name':'Crypto Spells', 'img': CrySpe,'gold':0, 'silver':1, 'bronze':1},
            {'name':'Sprinterlands', 'img': SprLan,'gold':0, 'silver':0, 'bronze':1}
        ];
        setGames(tmpGames);
    };

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
                <div className="Item">: {golds.length} </div>
                <div className="Item"><img src={silver } alt="銀トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: {silvers.length} </div>
                <div className="Item"><img src={blonze } alt="銅トロフィー" width="30" height="30" border="0"></img></div>
                <div className="Item">: {bronzes.length} </div>
                <div className="Item">MostPlaying :  <img src={MyCry } alt="マイクリ" width="20" height="20" border="0"></img> My Crypt Heroes </div>
            </div>
            <div className="Welcome">
                Connect more than one account to experience the full potential of this dapp! 💡
            </div>
            <div className="ScoreTitle">
            <h2>Your Achievements</h2>
            </div>
            <div className="Score">
                <TableContainer sx={{ minWidth: 650, maxWidth: 800}} className="ScoreTable">
                    <Table aria-label="simple table">
                        <TableHead>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell align="right">Gold</TableCell>
                            <TableCell align="right">Silver</TableCell>
                            <TableCell align="right">Blonze</TableCell>
                            <TableCell align="center">Action</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {games.map((game) => (
                                <TableRow key={game.name}>
                                    <TableCell component="th" scope="row">
                                        <img src={game.img} alt="マイクリ" width="20" height="20" border="0"></img>
                                        {game.name}
                                    </TableCell>
                                    <TableCell align="right">{game.gold}</TableCell>
                                    <TableCell align="right">{game.silver}</TableCell>
                                    <TableCell align="right">{game.bronze}</TableCell>
                                    <TableCell align="center">
                                        <Button className='DetailButton' onClick={() => navigate('/detail')}>
                                            Show Detail
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    );
}

export default Portfolio