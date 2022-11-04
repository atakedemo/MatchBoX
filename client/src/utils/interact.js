//import { Network, Alchemy } from "alchemy-sdk";
import axios from 'axios';

//require("dotenv").config();
const contractAddressMain = "0x8995bd38c2012c04a4e7dd6f3ed61b29b1c43aa2";
const contractAddressTest = "0x68704f4c1cdc3d69D5c1c638023aC4f2E5F26E17"
const contractABI = require("../abi/MatchBoXNFT.json");

const alchemyKeyMain = "XscvLAKJpQlvfnMFXa9uRQmJgD5pji3V"
const alchemyKeySub = "Y4KiBGzasGxB9NIVjniYgU_O1zjmuNGH"
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(alchemyKeySub);


//ウォレット（メタマスク）との接続
export const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        const obj = {
          status: "👆🏽 Write a message in the text-field above.",
          address: addressArray[0],
        };
        return obj;
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
};

//ウォレット（メタマスク）との接続状態の確認
export const getCurrentWalletConnected = async () => {
    if (window.ethereum) {
      try {
        const addressArray = await window.ethereum.request({
          method: "eth_accounts",
        });
        if (addressArray.length > 0) {
          return {
            address: addressArray[0],
            status: "👆🏽 Write a message in the text-field above.",
          };
        } else {
          return {
            address: "",
            status: "🦊 Connect to Metamask using the top right button.",
          };
        }
      } catch (err) {
        return {
          address: "",
          status: "😥 " + err.message,
        };
      }
    } else {
      return {
        address: "",
        status: (
          <span>
            <p>
              {" "}
              🦊{" "}
              <a target="_blank" href={`https://metamask.io/download.html`}>
                You must install Metamask, a virtual Ethereum wallet, in your
                browser.
              </a>
            </p>
          </span>
        ),
      };
    }
};

//トロフィーリストの取得
export const getTorophylist = async() => {
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
        return response.data.ownedNfts;
      }
      
    })
    .catch(function (error) {
      console.error(error);
    });
}

//トロフィー所有者のアドレス一覧取得
export const getOwnerlist = async() => {
  const apiUrl = "https://polygon-mainnet.g.alchemy.com/nft/v2/"
  const apiKey = alchemyKeyMain;

  const options = {
    method: 'GET',
    url: apiUrl + apiKey + '/getOwnersForCollection',
    params: {
      contractAddress: contractAddressMain,
      withTokenBalances: 'false'
    },
    headers: {accept: 'application/json'}
  };

  axios
    .request(options)
    .then(function (response) {
      console.log('Alchemy Test!!!!!!!!!!!');
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
}

//NFTのmint
export const mintNFT = async(tokenURI, id) => {
  window.contract = await new web3.eth.Contract(contractABI, contractAddressTest);
  
  const requestId = (typeof id == 'number')?id:parseInt(id);

  const txParams = {
    to: contractAddressTest,
    from: window.ethereum.selectedAddress,
    'data': window.contract.methods.mintNFT(window.ethereum.selectedAddress, tokenURI, requestId).encodeABI()
  };
  try {
    const txHash = await window.ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [txParams],
      })
  } catch (error){
    return {
      success: false,
      status: "Something went wrong: " + error.message
    }
  }
}