import React from "react";
import propTypes from "prop-types";
import "../public/styles/page.scss";
import Card from "./Card";

Card.propTypes = {
  path: propTypes.string,
  brand: propTypes.string,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
  color: propTypes.string,
  idItem: propTypes.oneOfType([propTypes.number, propTypes.string]),
}

export default function List (props) {

    return (
        <ul className="list" style={{height: "100vh"}}>
            {props.list.map(item => {
            props.ajax && sessionStorage.setItem(item.item, JSON.stringify(item));

            return (
                <Card key = {item.item}
                    path = {item.path}
                    brand = {item.name}
                    price = {item.price}
                    color = {item.color}
                    idItem = {item.item}
                    addToCart= {props.addToCart}
                    removeItem= {props.removeItem}
                    card={item}
                />
            )})}
        </ul>
    )
}
