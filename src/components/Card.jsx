import {Component} from "react";
import StarIcon from "./star_icon.js"
import "../public/styles/page.scss";

export default class Card extends Component {

  state = { selected: false }

  select = (ev) => {
    const {id} = sessionStorage.getItem("selected") ? JSON.parse(sessionStorage.getItem("selected")) : false;
    if (id) {
      document.getElementById(id).style.borderColor = "rgb(187, 181, 105)";
      document.getElementById("cart-icon").style.cssText = "fill: black; position: absolute";
      sessionStorage.removeItem("selected");
    }

    this.setState({selected: !this.state.selected});
  }

  render () {
    if (this.state.selected) {

      sessionStorage.setItem("selected", JSON.stringify({
          brand: this.props.brand,
          price: this.props.price,
          color: this.props.color,
          path: this.props.path,
          id: this.props.idItem ,
        }));

      document.getElementById("cart-icon").style.cssText = "fill: rgb(187, 181, 105); position: fixed";
    }
        return (
            <li className="card-item" id={this.props.idItem} onClick={this.select}
                style={this.state.selected ? {borderColor : "red"} : {borderColor: "rgb(187, 181, 105)"}}
                >
                <img src={this.props.path} alt="watches"/>
                <ul className="card-dsc">
                    <li>
                        <label>Brand </label>
                        <p>{this.props.brand}</p>
                    </li>
                    <li>
                        <label>Price </label>
                        <p>{this.props.price}</p>
                    </li>
                    <li>
                        <label>Color </label>
                        <p>{this.props.color}</p>
                    </li>
                    <li>
                        <label>ID </label>
                        <p>{this.props.idItem}</p>
                    </li>
                </ul>
                <StarIcon item={this.props.idItem}/>
            </li>
        )
    }
}
