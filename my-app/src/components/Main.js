import React from "react";
import Card from "./Card";

function Main() {
  const stle = {
    color: "#333333",
    fontWeight: "900",
  };
  return (
    <main>
      <Card
        contact={{
          name: "Whiskas",
          img: "https://source.unsplash.com/collection/190727/300x202",
          phone: "780933388",
          email: "som@mail.ru",
        }}
      />
      <Card
        contact={{
          name: "Phiskas",
          img: "https://source.unsplash.com/collection/190727/300x202",
          phone: "780933388",
          email: "som@mail.ru",
        }}
      />
      <Card
        contact={{
          name: "Whiskas",
          img: "https://source.unsplash.com/collection/190727/300x202",
          phone: "780933388",
          email: "som@mail.ru",
        }}
      />
    </main>
  );
}

export default Main;
