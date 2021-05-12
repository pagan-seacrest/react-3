import React, {useState} from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
// import OutsideClickHandler from "react-outside-click-handler";
// import axios from "axios";
// import propTypes from "prop-types";

import Header from "./Header";
import Home from "./pages/Home";
import Fav from "./pages/Fav";
// import Modal from "./Modal";
import List from "./List";




export default function Page () {

  return (
    <BrowserRouter>
      <main>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/fav" component={Fav} />
          </Switch>
        </div>
      </main>
    </BrowserRouter>
  )
}



// OutsideClickHandler.propTypes = { onOutsideClick: propTypes.func.isRequired }
// List.propTypes = { list: propTypes.array.isRequired, }
// Modal.propTypes = {
//   header: propTypes.string,
//   text: propTypes.string,
//   actions: propTypes.arrayOf(propTypes.string).isRequired,
//   closeButton: propTypes.bool.isRequired,
//   leftBtId: propTypes.string,
//   rightBtId: propTypes.string,
// }
