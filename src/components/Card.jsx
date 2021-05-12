import React from "react";
import "../public/styles/page.scss";
import CartIcon from "./svg_components/cart_icon";
import StarIcon from "./svg_components/star_icon";
import IconsContainer from "./containers/Icons_Container";

export default function Card ({brand, price, color, path, idItem}) {


      // sessionStorage.setItem("selected", JSON.stringify({
      //     brand: brand,
      //     price: price,
      //     color: color,
      //     path: path,
      //     id: idItem ,
      //   }));


  return (
    <li className="card-item" id={idItem}>
      <img src={path} alt="watches"/>
      <ul className="card-dsc">
          <li><span>Brand </span><p>{brand}</p></li>
          <li><span>Price </span><p>{price}</p></li>
          <li><span>Color </span><p>{color}</p></li>
          <li><span>ID </span><p>{idItem}</p></li>
      </ul>
      <IconsContainer>
        <CartIcon />
        <StarIcon />
      </IconsContainer>
    </li>
  )
}
