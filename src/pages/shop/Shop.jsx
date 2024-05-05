import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import Product from "./product/Product";
import "./Shop.css";

export default function Shop() {
  const [searchvalue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.searchvalue);
  }

  return (
    <>
      <Header />
      <div className="shopContainer">
        <div className="shopHeader">
          <h1 className="shopTitle">Loja de NFTs</h1>
          <div className="searchBar">
            <input
              type="text"
              value={searchvalue}
              onChange={handleChange}
              placeholder="Produtos..."
            />
            <FontAwesomeIcon className="searchIcon" icon={faMagnifyingGlass} />
          </div>
        </div>
        <div className="productsList">
          <Product name="Clutch NFT" imageUrl="src\assets\nft1.jfif" imageDesc="NFT clutch" price={10000}/>
          <Product name="Dunk NFT" imageUrl="src\assets\nft2.jfif" imageDesc="NFT dunk" price={17000}/>
        </div>
      </div>
      <BottomNav />
    </>
  );
}
