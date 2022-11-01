import { useEffect, useState } from "react";
import axios from 'axios';

const contractAddressMain = "0x8995bd38c2012c04a4e7dd6f3ed61b29b1c43aa2";
const alchemyKeyMain = "XscvLAKJpQlvfnMFXa9uRQmJgD5pji3V"

const Torophies = () => {
    const [torophies, setTorophies] = useState("");
    useEffect(() => {
        async function getTorophylist() {
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
            axios
              .request(options)
              .then(function (response) {
                console.log(response.data);
                if(response.data.totalCount>0){
                    setTorophies(response.data.ownedNfts);
                }
                
              })
              .catch(function (error) {
                console.error(error);
              });
        }
        getTorophylist();
    }, []);

    return (
        <div>
            <h1>トロフィー一覧</h1>
        </div>
    );
}

export default Torophies