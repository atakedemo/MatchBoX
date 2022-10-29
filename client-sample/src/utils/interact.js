//import { Network, Alchemy } from "alchemy-sdk";
import axios from 'axios';

require("dotenv").config();
const contractAddressMain = "0x8995bd38c2012c04a4e7dd6f3ed61b29b1c43aa2";

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
  //const apiUrl = process.env.RERAT_APP_ALCHEMY_URL;
  const apiUrl = "https://polygon-mainnet.g.alchemy.com/nft/v2/"
  const apiKey = process.env.REACT_APP_ALCHEMY_KEY_MAIN;

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

  //デモ用：宮本さんのアドレスを固定値にする（-> 後で削除する）
  //options.params.owner = '0xD958Ee1d2caFAc2d3D6B495528dEaD1B339896e5';
  
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

//トロフィー所有者のアドレス一覧取得
export const getOwnerlist = async() => {
  const apiUrl = "https://polygon-mainnet.g.alchemy.com/nft/v2/"
  const apiKey = process.env.REACT_APP_ALCHEMY_KEY_MAIN;

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