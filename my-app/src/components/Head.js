import React from "react";

function Head() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else {
    timeOfDay = "night";
  }

  return (
    <header>
      <h1>This is {`${timeOfDay} time motherflecker`} !</h1>
    </header>
  );
}

export default Head;
