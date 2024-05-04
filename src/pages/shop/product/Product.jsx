import "./product.css";

export default function Product(props) {
  return (
    <div className="productContainer">
      <h2 className="productName">{props.name}</h2>
      <div className="productImgContainer">
        <img src={props.imageUrl} alt={props.imageDesc} className="productImg"/>
      </div>
      <p className="ProductPrice">{props.price} WTKs</p>
    </div>
  );
}
