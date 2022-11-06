import { useEffect, useState } from "react";

import {
  mintNFT,
} from "../utils/interact.js";

const NftMinter = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [description, setDesc] = useState("");
  const [rarity, setRarity] = useState("");
  const [game, setGame] = useState("");

  const [status, setStatus] = useState("");

  const onMintPressed = async () => {
    const { success, status } = await mintNFT(tokenUri, id);
    setStatus(status);
    if (success) {
      setTokenURI("");
      setId("");
    }
  };

  return (
      <div>
          <h1>トロフィー獲得</h1>
          <form>
      <h2>🖼 Name of Game: </h2>
      <input
        type="text"
        value="My Crypto Heroes"
        placeholder="e.g. My Crypto Heroes<hash>"
        onChange={(event) => setGame(event.target.value)}
      />
      <h2>🖼 Name of Game: </h2>
      <input
        type="text"
        value="My Crypto Heroes"
        placeholder="e.g. My Crypto Heroes<hash>"
        onChange={(event) => setGame(event.target.value)}
      />
      <h2>🤔 ID: </h2>
      <input
        type="number"
        placeholder="e.g. Category01=>1 Category02=>2"
        onChange={(event) => setId(event.target.value)}
      />
    </form>
    <button id="mintButton" onClick={onMintPressed}>
      Mint NFT
    </button>
      </div>
      
  );
}

export default NftMinter