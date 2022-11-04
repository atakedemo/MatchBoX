import './App.css';
import { useEffect, useState } from "react";
import { 
    connectWallet
} from "./utils/interact.js";
import  Navbar from "./components/Navbar";
import Main from './Main';

function App() {
  //ウォレット接続状態の判定
  const [walletFlag, setWalletFlag] = useState(true);
  const [walletAddress, setWallet] = useState("");

  useEffect(() => {
    async function checkWalletConnected() {
      if (window.ethereum) {
        try {
          const addressArray = await window.ethereum.request({
            method: "eth_accounts",
          });
          if (addressArray.length > 0) {
            setWalletFlag(true)
          } else {
            setWalletFlag(false)
            console.log( "🦊 Connect to Metamask using the top right button.")
          }
        } catch (err) {
          console.log(err);
          setWalletFlag(false);
        }
      } else {
        setWalletFlag(false)
        console.log("Please install Metamask")
      }
    }
    checkWalletConnected();
    addWalletListener();
  }, []);

  const connectWalletPressed = async () => {
    console.log('Connect Wallet')
    const walletResponse = await connectWallet();
    setWalletFlag(true)
    //setWallet(walletResponse.address);
  };

  function addWalletListener() {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length > 0) {
          setWalletFlag(true)
        } else {
          setWalletFlag(false)
        }
      });
    } else {
        console.log("You must install Metamask, a virtual Ethereum wallet, in you")
    }
  }

  //ウォレットに接続していない場合はLoginページを返す
  if(!walletFlag) {
    return (
      <div className="App">
        <div className="portforioContainer">
            <h1 className="title">MatchBox</h1>
            <div className="walletConnect">
                <h3 className="h21">Connect your wallet</h3>
                <h3>Connect more than one account to experience the full
                potential of this app!</h3>
                <button type="button" className="" onClick={connectWalletPressed}>🦊 Connect Metamask</button>
            </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
  
}

export default App;