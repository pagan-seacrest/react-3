// import React, {useState, useEffect} from "react";
// import "../public/styles/page.scss";

// export default function Modal () {

// 	const [show, setShowing] = useState(true);
	

//   componentDidMount() {
//     if(this.props.modalEvent === this.props.actions[0]) {
//       this.setState({show: !this.state.show})
//       const {id} = this.props.selectedItem;
//       const item = JSON.stringify(this.props.selectedItem);
//       localStorage.setItem(id, item);
//     }
//   }
// 	return (
// 		<div className={"modal"}>
// 		  <header>
// 			  <h2 className="modal-title">{this.props.header}</h2>
// 		  { this.props.closeButton && <div className="cross" onClick={this.props.click} >{String.fromCharCode(10799)}</div>}
// 		  </header>
// 		  <p className="modal-text">{this.props.text}</p>
// 		  <div className="modal-bt-container">
// 			  <button id={this.props.leftBtId} className={"modal-bt"} onClick={this.props.click}>{this.props.actions[0]}</button>
// 		  	<button id={this.props.rightBtId} className={"modal-bt"} onClick={this.props.click}>{this.props.actions[1]}</button>
// 		  </div>
// 		</div>
// 	)
// }
