import '../index.css';
import { useEffect, useState } from "react";
import { 
    connectWallet,
    getCurrentWalletConnected
} from "../utils/interact.js";

const Login = () => {
    const [walletAddress, setWallet] = useState("");
    useEffect(() => {
        async function checkWalletConnected() {
            if (window.ethereum) {
                try {
                const addressArray = await window.ethereum.request({
                    method: "eth_accounts",
                });
                if (addressArray.length > 0) {
                        setWallet(addressArray[0])
                } else {
                    console.log( "🦊 Connect to Metamask using the top right button.")
                }
                } catch (err) {
                console.log(err)
                }
            } else {
                console.log("Please install Metamask")
                //ToDo: ポップアップを作る
            }
        }
        checkWalletConnected()
    }, []);

    const connectWalletPressed = async () => {
        console.log('Connect Wallet')
        const walletResponse = await connectWallet();
        //setStatus(walletResponse.status);
        setWallet(walletResponse.address);
    };

    function addWalletListener() {
        if (window.ethereum) {
            window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                setWallet(accounts[0]);
            } else {
                setWallet("");
            }
            });
        } else {
            console.log("You must install Metamask, a virtual Ethereum wallet, in you")
        }
    }

    return (
        <div className="portforioContainer">
            <h1 id="title">MatchBoX</h1>
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
        </div>
    )
   
    // return (
    //     <div className="portforioContainer">
    //         <h1 className="title">MatchBox</h1>
    //         <div className="walletConnect">
    //             <h3 className="h21">Connect your wallet</h3>
    //             <h3>Connect more than one account to experience the full
    //             potential of this app!</h3>
    //             <button type="button" className="">Connect Metamask</button>
    //         </div>
    //     </div>
    // )
}

export default Login