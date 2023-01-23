//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDOM from "react-dom";

let date = new Date("July 21, 1983 23:15:00");
let currentHour = date.getHours();
let greeting;
let setColor;

if (currentHour >= 0 && currentHour < 12) {
  greeting = "Good morning";
  setColor = "red";
} else if (currentHour >= 12 && currentHour < 18) {
  greeting = "Good afternoon";
  setColor = "green";
} else {
  greeting = "Good evening";
  setColor = "blue";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: setColor }}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
