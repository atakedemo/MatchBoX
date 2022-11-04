// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

interface IfMatchBoXNFTLogic {
    function checkCaller(address caller, address recipient, uint id) external returns (bool);
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


    function mintNFT(address recipient, string memory tokenURI, uint id)
        public
        returns (uint256)
    {
        require(checkTargetAddress(recipient, id));
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        _mint(recipient, newItemId);
        _setTokenURI(newItemId, tokenURI);

        return newItemId;
    }

    function checkTargetAddress(address recipient, uint id) private returns(bool) {
        IfMatchBoXNFTLogic _logicContract = IfMatchBoXNFTLogic(addressLogic);
        return _logicContract.checkCaller(msg.sender, recipient, id);
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