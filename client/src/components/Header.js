import '../index.css';
import { useEffect, useState } from "react";
import { 
    connectWallet,
    getCurrentWalletConnected
} from "../utils/interact.js";

const Header = () => {
    const [walletAddress, setWallet] = useState("");
    //const [status, setStatus] = useState("");
    
    /*
    useEffect(async () => {
        const {address, status} = await getCurrentWalletConnected();
        setWallet(address)
        setStatus(status);
    
        addWalletListener(); 
    }, []);
    */

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
        <div>
            <h1 id="headerTitle">MatchBoX</h1>
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
}

export default Header