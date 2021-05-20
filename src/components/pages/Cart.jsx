import React, { useState } from "react";
import List from "../List";
import {oopsStyle} from "../../config.js";

export default function Cart ({addedList}) {
    const [addedItemsList, setAddedItemsList] = useState(addedList);
    
    return (
        <>
        { localStorage.getItem("cart_list") ? <List ajax={false} list={addedItemsList} removeItem={(ev) => {
                if (ev.target.parentElement.nodeName === "LI") {
                  const list = JSON.parse(localStorage.getItem("cart_list"))
                  if (list.length <= 1) {
                    localStorage.removeItem("cart_list");
                    setAddedItemsList([]);
                } else {
                    localStorage.setItem("cart_list", JSON.stringify(list.filter(elt => elt.item !== ev.target.parentElement.id)));
                    setAddedItemsList(JSON.parse(localStorage.getItem("cart_list")));
                  }
                }
              }} /> :
            <p style={oopsStyle}>Oops! You have not chosen items yet</p> }
        </>
    )
}