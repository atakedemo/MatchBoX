// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface MatchBoXNFTLogic {
    function checkCaller(address caller, address recipient) external returns (bool);
}

contract MatchBoXNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    address private addressLogic;
    address private addressAdmin;
    
    constructor(address _address) public ERC721("MatchBoXNFT", "MBN") {
        addressAdmin = msg.sender;
        addressLogic = _address;
    }


    function mintNFT(address recipient, string memory tokenURI)
        public
        returns (uint256)
    {
        require(checkTargetAddress(recipient));
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function checkTargetAddress(address recipient) private returns(bool) {
        MatchBoXNFTLogic _logicContract = MatchBoXNFTLogic(addressLogic);
        return _logicContract.checkCaller(msg.sender, recipient);
    }

    function upgradeAdminTo(address _address)
        private
    {
        require(msg.sender == addressAdmin);
        addressAdmin = _address;
    }

    function upgradeLogicTo(address _address)
        private
    {
        require(msg.sender == addressAdmin);
        addressLogic = _address;
    }
}