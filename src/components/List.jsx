import { Component } from "react";
import Card from "./Card";
import "../public/styles/page.scss";
import propTypes from "prop-types";

Card.propTypes = {
  path: propTypes.string,
  brand: propTypes.string,
  price: propTypes.oneOfType([propTypes.number, propTypes.string]),
  color: propTypes.string,
  idItem: propTypes.oneOfType([propTypes.number, propTypes.string]),
}

export default class List extends Component {
    render() {
        return (
        <ul className="list" >
            { this.props.list.map(item => {
            return <Card
            key={item.item}
            path={item.path}
            brand={item.name}
            price={item.price}
            color={item.color}
            idItem={item.item}
             />
            }) }
        </ul>
        )
    }
}
