// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/access/AccessControl.sol";
import 'hardhat/console.sol';
import "./WinToken.sol";

interface TokenInterface {
    function mint(address account, uint256 amount) external;
}

contract ReedemManager is AccessControl {

    event CreateNewReedem(uint id, uint startDate, uint endDate, uint totalAmount, uint limitAmount, uint reedemAmount);

    bytes32 public constant DEALER_ROLE = keccak256("DEALER_ROLE");

    struct Reedem {
        uint id;
        uint startDate;
        uint endDate;
        uint totalAmount;
        uint limitAmount;
        uint reedemAmount;
        uint hashKey;
    }

    Reedem[] reedemList;

    TokenInterface public _token;

    constructor(address tokenAddress) {
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(DEALER_ROLE, msg.sender);
        _token = TokenInterface(tokenAddress);
    }

    modifier validateReedem(uint id) {
        require(reedemList[id].startDate <= block.timestamp && reedemList[id].endDate >= block.timestamp, "Invalid time");
        require(reedemList[id].reedemAmount > 0, "Invalid reedem amount");
        require(reedemList[id].reedemAmount < reedemList[id].totalAmount, "Invalid reedem amount");
        _;
    }

    function createReedem(uint startDate, uint endDate, uint totalAmount, uint reedemAmount) public  returns(uint) {
        uint hashKey = startDate + endDate;
        console.log(hashKey);
        uint nextId = reedemList.length;
        Reedem memory newReedem = Reedem({
            id: nextId,
            startDate: startDate, 
            endDate: endDate,
            totalAmount: totalAmount,
            limitAmount: totalAmount,
            reedemAmount: reedemAmount,
            hashKey: hashKey
        });
        reedemList.push( newReedem );
        emit CreateNewReedem(newReedem.id, newReedem.startDate, newReedem.endDate, newReedem.totalAmount, newReedem.limitAmount, newReedem.reedemAmount);

        return nextId;
    }


    function getReedemById(uint index) public view  returns (Reedem memory) {
        return reedemList[index];
    }

    function getReedemList() public view  returns(Reedem[] memory) {
        return reedemList;
    }
    
    function receiveReedem(uint id, uint hashKey) public validateReedem(id) {
        require(hashKey == reedemList[id].hashKey, "Invalid hashKey");

        _token.mint(msg.sender, reedemList[id].reedemAmount);

        reedemList[id].totalAmount -= reedemList[id].reedemAmount;
    }
}