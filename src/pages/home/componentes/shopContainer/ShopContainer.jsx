/* eslint-disable react/prop-types */
import './ShopContainer.css'

function ShopContainer(props){
  return (
        <div className="Loja">
          <h2>{props.children}</h2>
          <img src={props.path}></img>
          <label>{props.label}</label>
          <p>{props.p}</p>
        </div>
  );
}
export default ShopContainer


