import Header from "../components/header/Header";
import BottomNav from "../components/bottomNav/BottomNav";
import NftCard from "./nftCard/NftCard";
import "./album.css";

export default function Album() {
  return (
    <body>
      <Header />
      <div className="albumContainer">
        <h2 className="albumTitle">Álbum de NFTs</h2>
        <div className="cardsContainer">
          <NftCard
            urlImg="src\assets\albumNfts\TouchdownTitan.jpeg"
            title="Touchdown Titan"
            price={780}
          />
          <NftCard
            urlImg="src\assets\albumNfts\GoalGlory.jpeg"
            title="GoalGlory"
            price={250}
          />
          <NftCard
            urlImg="src\assets\albumNfts\DunkDynasty.jpeg"
            title="Dunk Dynasty"
            price={160}
          />
          <NftCard
            urlImg="src\assets\albumNfts\HomeRunHero.jpeg"
            title="Home Run Hero"
            price={240}
          />
        </div>
      </div>
      <BottomNav />
    </body>
  );
}
