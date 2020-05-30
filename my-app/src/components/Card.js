import React from "react";

function Card(props) {
  return (
    <div className="card">
      <img src={props.contact.img} />
      <h3>{props.contact.name}</h3>
      <p>Phone: {props.contact.phone}</p>
      <p>email: {props.contact.email} </p>
    </div>
  );
}

export default Card;
