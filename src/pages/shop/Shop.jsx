import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import Product from "./product/Product";
import "./shop.css";

export default function Shop() {
  const [searchvalue, setSearchValue] = useState("");

  function handleChange(event) {
    setSearchValue(event.target.searchvalue);
  }

  return (
    <body>
      <Header />
      <div className="shopContainer">
        <div className="shopHeader">
          <h1 className="shopTitle">Loja</h1>
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
          <Product name="Boné Oficial Bulls" imageUrl="src/assets/products/boneNba.png" imageDesc="Boné da NBA" price={10}/>
          <Product name="Camisa Manchester" imageUrl="src/assets/products/camisaFut.png" imageDesc="Camisa de Futebol" price={60}/>
          <Product name="Regata Nike Lakers" imageUrl="src/assets/products/regataNba.png" imageDesc="Regata da NBA" price={180}/>
          <Product name="Chuteira Nike Mercurial" imageUrl="src/assets/products/chuteiraFut.png" imageDesc="Chuteira de Futeboç" price={105}/>
          <Product name="Bola de Basquete" imageUrl="src/assets/products/bolaNba.png" imageDesc="Bola da NBA" price={40}/>
          <Product name="Camisa MLB New York" imageUrl="src/assets/products/camisaMbl.png" imageDesc="Camisa da NBA" price={230}/>
          <Product name="Garrafa NBA" imageUrl="src/assets/products/garrafaNba.png" imageDesc="Garrafa da NBA" price={5}/>
        </div>
      </div>
      <BottomNav />
    </body>
  );
}
