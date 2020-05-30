import React from "react";
import Data from "./Data";

function Card(props) {
  return (
    <div className="card">
      <h2 className="title">{props.title}</h2>
      <p className="desc">{props.description}</p>
      <h3 className="price">{props.price}</h3>
      <button
        type="button"
        onClick={function () {
          const parent = this.parentElement.nodeName;
          console.log(parent);
        }}
        className="btn"
      >
        Info
      </button>
    </div>
  );
}

export default Card;
