import "./nftCard.css";

export default function NftCard(props) {
  return (
    <div className="nftCardFrame">
      <img src={props.urlImg} alt={props.title} />
      <h2 className="cardTitle">{props.title}</h2>
      <p className="cardTxt">{props.price} WTKs</p>
    </div>
  );
}
