import { useEffect, useState } from "react";
import { 
  connectWallet,
  getCurrentWalletConnected,
  getTorophylist,
  getOwnerlist
} from "./utils/interact.js";

const Controller = (props) => {

  //State variables
  const [walletAddress, setWallet] = useState("");
  const [status, setStatus] = useState("");
  //const [name, setName] = useState("");
  //const [description, setDescription] = useState("");
  //const [url, setURL] = useState("");
 
  useEffect(async () => {
    const {address, status} = await getCurrentWalletConnected();
    setWallet(address)
    setStatus(status);

    addWalletListener(); 
  }, []);

  const connectWalletPressed = async () => {
    const walletResponse = await connectWallet();
    setStatus(walletResponse.status);
    setWallet(walletResponse.address);
  };

  const onGetTorophylist = async () => {
    getTorophylist();
  };

  const onGetOwnerlist = async () => {
    getOwnerlist();
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWallet(accounts[0]);
          setStatus("👆🏽 Write a message in the text-field above.");
        } else {
          setWallet("");
          setStatus("🦊 Connect to Metamask using the top right button.");
        }
      });
    } else {
      setStatus(
        <p>
          {" "}
          🦊{" "}
          <a target="_blank" href={`https://metamask.io/download.html`}>
            You must install Metamask, a virtual Ethereum wallet, in your
            browser.
          </a>
        </p>
      );
    }
  }

  return (
    <div className="Controller">
      <button id="walletButton" onClick={connectWalletPressed}>
        {walletAddress.length > 0 ? (
          "Connected: " +
          String(walletAddress).substring(0, 6) +
          "..." +
          String(walletAddress).substring(38)
        ) : (
          <span>Connect Wallet</span>
        )}
      </button>

      <br></br>
      <h1 id="title">MatchBoX NFT Contloller</h1>
      <p>
        それぞれのボタンでMatchBoXで管理するNFTの情報が取得できます
      </p>
      <h2>ボタン一覧</h2>
      <button id="mintButton" onClick={onGetTorophylist}>
         ウォレットを接続した人のトロフィー一覧取得
      </button>
      <button id="mintButton" onClick={onGetOwnerlist}>
         あるトロフィーの所有者一覧取得
      </button>
      <p id="status">
        {status}
      </p>
    </div>
  );
};

export default Controller;