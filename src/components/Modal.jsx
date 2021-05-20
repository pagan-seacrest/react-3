import React from "react";
import "../public/styles/page.scss";
import {crossIcon} from "../config.js";

export default function Modal ({header, text, closeButton, actions = ["Ok", "Cancel"], modalConfirmEvent, closeModal }) {

    return (
    	<div className={"modal"}>
    	  <header>
    		<h2 className="modal-title">{header}</h2>
    	  	{closeButton && <div className="cross" onClick={closeModal} >{crossIcon}</div>}
    	  </header>
    	  <p className="modal-text">{text}</p>
    	  <div className="modal-bt-container">
    		  <button className={"modal-bt"} onClick={modalConfirmEvent} >{actions[0]}</button>
    	  	<button className={"modal-bt"} onClick={closeModal} >{actions[1]}</button>
    	  </div>
    	</div>
    )
}