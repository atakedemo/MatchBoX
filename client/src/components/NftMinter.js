import { useEffect, useState } from "react";

import {
  mintNFT,
} from "./util/interact.js";

const [tokenUri, setTokenURI] = useState("");
const [id, setId] = useState("");

const onMintPressed = async () => {
  const { success, status } = await mintNFT(tokenUri, id);
  setStatus(status);
  if (success) {
    setTokenURI("");
    setId("");
  }
};

const NftMinter = () => {
    return (
        <div>
            <h1>ポートフォリオ</h1>
            <form>
        <h2>🖼 Link to Meta data: </h2>
        <input
          type="text"
          placeholder="e.g. https://gateway.pinata.cloud/ipfs/<hash>"
          onChange={(event) => setTokenURI(event.target.value)}
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