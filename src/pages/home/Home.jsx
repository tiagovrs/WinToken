import BottomNav from "../components/bottomNav/BottomNav";
import Header from "../components/header/Header";
import ApostaLoja from "./componentes/ApostaLoja/ApostaLoja";
import ContainerSaldo from "./componentes/Container/ContainerSaldo";
import Library from "./componentes/Library/Library";
import Loja from "./componentes/Loja/Loja";

export default function Home() {
  return (
    <body>
      <Header />
      <ContainerSaldo></ContainerSaldo>
      <ApostaLoja></ApostaLoja>
      <Loja />
      <Library />
      <BottomNav />
    </body>
  );
}
