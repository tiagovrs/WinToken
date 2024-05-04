import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import ApostaLoja from "./componentes/betContainer/BetContainer";
import Library from "./componentes/libraryContainer/LibraryContainer";
import Loja from "./componentes/shopContainer/ShopContainer";
import BalanceContainer from "./componentes/balanceContainer/BalanceContainer";

export default function Home() {
  return (
    <body>
      <Header />
      <BalanceContainer></BalanceContainer>
      <ApostaLoja></ApostaLoja>
      <Loja />
      <Library />
      <BottomNav />
    </body>
  );
}
