import React from "react";
import Card from "./Card";
import Data from "./Data";

function Main() {
  const dataw = Data.map((item) => {
    return (
      <Card
        key={item.id}
        price={item.price}
        description={item.description}
        title={item.title}
        other={item}
      />
    );
  });

  return <main>{dataw}</main>;
}

export default Main;
