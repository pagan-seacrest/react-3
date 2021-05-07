import React from "react";
import ReactDOM from "react-dom";
import propTypes from "prop-types";
import Modal from "./components/Modal";
import CartIcon from "./components/cart_icon";
import List from "./components/List";
import "./public/styles/page.scss";
import axios from "axios";
import OutsideClickHandler from "react-outside-click-handler";

OutsideClickHandler.propTypes = { onOutsideClick: propTypes.func.isRequired }
List.propTypes = { list: propTypes.array.isRequired, }
Modal.propTypes = {
  header: propTypes.string,
  text: propTypes.string,
  actions: propTypes.arrayOf(propTypes.string).isRequired,
  closeButton: propTypes.bool.isRequired,
  leftBtId: propTypes.string,
  rightBtId: propTypes.string,
}


class Page extends React.Component {

  state = {
    list: null,
    calledModal: false
  }

  callModal = () => {
    sessionStorage.getItem("selected") &&
      this.setState({calledModal: !this.state.calledModal});
  }

  operateModal = (ev) => {
    const item = JSON.parse(sessionStorage.getItem("selected"));
    if (ev.target.id === "ok-bt") {
      localStorage.setItem(item.id, JSON.stringify(item));
      this.setState({calledModal: !this.state.calledModal});
    } else if (ev.target.id === "cancel-bt" || ev.target.className === "cross") {
      this.setState({calledModal: !this.state.calledModal});
    }
  }

  componentDidMount () {
    axios.get("/items").then(res => {
      this.setState({ list: res.data })
    });

    sessionStorage.clear();
  }

  render () {

    return (
      <main>
        <header className="page-header">
          <h1 className="page-title">
            WATCHES
            <p>ORLD</p>
          </h1>
          <CartIcon click={this.callModal} />
        </header>
        <div className="container">
          {
            this.state.calledModal ?
            <OutsideClickHandler
              onOutsideClick={() => this.setState({calledModal: !this.state.calledModal})}>
            <Modal
            click={this.operateModal}
            header="You have selected an item"
            text="Are you sure you want to put it to the cart?"
            actions={["Ok", "Cancel"]}
            closeButton={true}
            leftBtId="ok-bt"
            rightBtId="cancel-bt" />
            </OutsideClickHandler> : null
          }{
            this.state.list ? <List list={this.state.list} /> :
             <p>Oops! No content. Seems like server's down</p>
            }
        </div>
      </main>
    )
  }
}

ReactDOM.render(<React.StrictMode><Page /></React.StrictMode>, document.getElementById("root"));
