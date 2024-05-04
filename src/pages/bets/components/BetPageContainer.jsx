
import BasicDemo from "../../components/BasicDemo/BasicDemo";
import "./BetPageContainer.css";

function BetPageContainer() {
  return (
    <div className="betPageContainer">
      <h2>Apostas disponíveis</h2>
      <div className="containerInFocus">
      <div className="organize">
        <img src="src\assets\Vector (1).png"></img>
        <div className='lock'>
          <img src='src\assets\Vector (2).png'></img>
          <label>DESBLOQUEIE A APOSTA POR</label>
          <p> 800 tokens</p>
        </div>
      </div>
      <div className='Aposta'>
        <p>Quantos pontos Leandro da Silva fará no jogo de hoje (04/05)?</p>
        <button>Desbloquar Aposta</button>
      </div></div>
    </div>
  );
}
export default BetPageContainer;
