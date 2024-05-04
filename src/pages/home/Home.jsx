import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import Library from "./componentes/libraryContainer/LibraryContainer";
import Loja from "./componentes/shopContainer/ShopContainer";
import BalanceContainer from "./componentes/balanceContainer/BalanceContainer";
import "./Home.css";

export default function Home() {
  return (
    <body>
      <Header />
      <div className="org">
        <BalanceContainer></BalanceContainer>
        <div className="organizacao">
          <Loja path='src\assets\Frame 3.png' label='Quantos pontos Leandro da Silva fará hoje (04/05)?' p='50 TOKENS'>Aposte e concorra a NFTs exclusivas </Loja>
          <Loja path='src\assets\Rectangle 40 (1).png' label='Camisa oficial' p='1700 TOKENS'>Troque seus tokens por itens reais</Loja>
        </div>
        <Library />
      </div>
      <BottomNav />
    </body>
  );            
}
