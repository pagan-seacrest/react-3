import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import propTypes from "prop-types";

import Header from "./Header";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
import Cart from "./pages/Cart";
import Modal from "./Modal";

OutsideClickHandler.propTypes = { onOutsideClick: propTypes.func.isRequired }
Modal.propTypes = {
  header: propTypes.string,
  text: propTypes.string,
  actions: propTypes.arrayOf(propTypes.string),
  closeButton: propTypes.bool.isRequired,
}

export default function Page () {
  const [modal, setModal] = useState(false);
  const [card, setCard] = useState({});


  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Home addToCart={(ev) => {
                  setModal(true);
                  ev.target.nodeName === "path" &&
                  setCard(JSON.parse(sessionStorage.getItem(ev.target.parentElement.parentElement.id)));
                  ev.target.nodeName === "svg" &&
                  setCard(JSON.parse(sessionStorage.getItem(ev.target.parentElement.id)));
                }}
              />
            </Route>
            <Route path="/fav">
              <Fav favItems={JSON.parse(localStorage.getItem("fav"))} />
            </Route>
            <Route path="/cart">
              <Cart addedList={JSON.parse(localStorage.getItem("cart_list"))} />
            </Route>
          </Switch>
          {modal && <OutsideClickHandler onOutsideClick={() => setModal(false)}>
          <Modal
            closeButton={true}
            cardData={card}
            header="Are you sure you want to add an item to the cart?" 
            text=""
            closeModal={() => {setModal(false)}}
            modalConfirmEvent={() =>  {
              const {item} = card;
              localStorage.setItem(item, JSON.stringify(card));
              
              if (localStorage.getItem("cart_list") === null || localStorage.getItem("cart_list") === "[]") {
                localStorage.setItem("cart_list", JSON.stringify([card]));
              } else {
                const list = JSON.parse(localStorage.getItem("cart_list"));
                const prevList = JSON.parse(localStorage.getItem("cart_list"));
                if (prevList.pop().item !== item) {
                  list.push(card);
                  localStorage.setItem("cart_list", JSON.stringify(list));
                }
              }
              setModal(false);
            }}
          />
          </OutsideClickHandler>}
        </div>
      </main>
    </BrowserRouter>
  )
}