import React, { useState } from "react";
import List from "../List";
import {oopsStyle} from "../../config.js";

export default function Fav () {
    const [favList, setFavList] = useState(JSON.parse(localStorage.getItem("fav")));

    return (
        <>
        {
          localStorage.getItem("fav") ? <List ajax={false} list={favList} removeItem={(ev) => {
                if (ev.target.parentElement.nodeName === "LI") {
                  const list = JSON.parse(localStorage.getItem("fav"))
                  if (list.length <= 1) {
                    localStorage.removeItem("fav");
                    setFavList([]);
                } else {
                    localStorage.setItem("fav", JSON.stringify(list.filter(elt => elt.item !== ev.target.parentElement.id)));
                    setFavList(JSON.parse(localStorage.getItem("fav")));
                  }
                }
              }}/> :
            <p style={oopsStyle}>Oops! You have not chosen items yet</p>
        }
        </>
    )
}