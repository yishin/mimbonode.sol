// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MGGToken is ERC20, Ownable {
    // 초기 토큰 공급량을 상수로 설정 (114,600,000,000 토큰)
    uint256 private constant INITIAL_SUPPLY = 114_600_000_000;

    constructor() ERC20("MGG Token", "MGG") {
        _mint(msg.sender, INITIAL_SUPPLY * 10 ** decimals());
    }

    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }

    function burn(uint256 amount) public {
        _burn(msg.sender, amount);
    }
} 