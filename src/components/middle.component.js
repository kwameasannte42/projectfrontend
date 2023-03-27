import React from "react";
import "./style/middle.style.css";
import Weather from "./Weather";

// const api = {
//   key: '8ab0564c2a88e77ff1bbb0402c22c9dc',
//   base: 'http://api.openweathermap.org/data/2.5'

// }

// const []

const Middle = () => {
  return (
    <div className="container-fluid middle text-center p-3">
      <h3 className="p-3 text-white">Cincinnati Weather</h3>
      <Weather />
    </div>
  );
};

export default Middle;
