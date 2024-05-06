// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract WinNFT is ERC721, ERC721URIStorage, Ownable {
    uint256 private _nextTokenId;
    // string folderId = "QmVPtVUCEiR8hQFVouB1NZ65NCasuLyp8im49GsrH4s5md";

    string[] nfts = [
        "QmcP8dAcTNTwVfZWhUNiexMWW8gse5vWPSk9bhLKghrrTu",
        "QmaGU6Pjfz4Mz3UKLJr1p9ybHAaeDEUFtLeny48AmcajBQ",
        "QmQp3G6iEvrPAhbn8CpiZoqdhqMBHL9ddaDYtAvLGVvUu6",
        "QmR2GALDeLyZnM6ScvhGPYJxsUVSAsVuLPQgazEwWGuJ5e"
    ];

    constructor()
        ERC721("WinNFT", "WNFT")
        Ownable(msg.sender)
    {}

    function _baseURI() internal pure override returns (string memory) {
        return "https://ipfs.io/ipfs/";
    }

    function generateRandomNumber() public view returns (uint) {
        uint randomNumber = uint(keccak256(abi.encode(block.timestamp, block.difficulty, msg.sender))) % 4;
        return randomNumber;
    }

    function safeMint(address to) public {
        uint256 tokenId = _nextTokenId++;
        uint randomNumber = generateRandomNumber();
        string memory uri = nfts[randomNumber];
        
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
    }

    // The following functions are overrides required by Solidity.

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}
