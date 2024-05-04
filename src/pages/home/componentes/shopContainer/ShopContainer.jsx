import './ShopContainer.css'

function ShopContainer() {
  return (
      <div className="containerLoja">
        <div className="Loja">
          <div className="tituloLoja">Troque tokens por itens REAIS.</div>
          <img
            loading="lazy"
            srcSet="..."
            className="img"
          />
          <div className="nomeProduto">Camisa Oficial</div>
          <div className="valorProduto">6000 TOKENS</div>
        </div>
      </div>
  );
}
export default ShopContainer


