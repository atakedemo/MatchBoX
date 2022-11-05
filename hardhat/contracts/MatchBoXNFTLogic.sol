// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MatchBoXNFTLogic {
    address private addressAdmin;

    constructor() {
        addressAdmin = msg.sender;
    }

    function checkCaller(address caller, address recipient, uint id) 
        public view returns (bool)
    {
        bool _result;
        _result = (caller != address(0) && recipient != address(0));
        return _result;
    }

    function upgradeAdminTo(address _address)
        private
    {
        require(msg.sender == addressAdmin);
        addressAdmin = _address;
    }
}