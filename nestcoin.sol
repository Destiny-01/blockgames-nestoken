// SPDX-License-Identifier: MIT
pragma solidity ^0.8;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NestCoinToken is ERC20, Ownable {
    constructor() ERC20("NestCoin Token", "NCT") {
      _mint(msg.sender, 1000 * 10 ** 18);
    }

    struct Rewarded {
        address _address;
        uint256 amount;
    }

    Rewarded[] public rewarded;

    function distributeRewards(address[] memory _addresses  ) public onlyOwner {
        for(uint256 i = 0; i < _addresses.length; i++) {
            _mint(_addresses[i], 10);
            rewarded.push(Rewarded(_addresses[i], 10));
        }
    }

    function getRewarded() public view returns(Rewarded[] memory) {
        return rewarded;
    }
}