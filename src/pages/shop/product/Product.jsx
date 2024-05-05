import "./product.css";

export default function Product(props) {
  return (
    <div className="productContainer">
      <div className="productImgContainer">
        <img
          src={props.imageUrl}
          alt={props.imageDesc}
          className="productImg"
        />
        <h2 className="productName">{props.name}</h2>
      </div>
      
      <div className='PriceContainer'>
       <p className="ProductPrice">{props.price} WTKs</p>
      </div>
    </div>
  );
}
