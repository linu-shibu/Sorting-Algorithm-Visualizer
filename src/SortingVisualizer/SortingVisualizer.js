import React, { useState } from "react";

function SortingVisualizer() {
  const [array, setArray] = useState([]);

  componentDidMouint = () => {
    resetArray();
  };

  resetArray = () => {
    const arr = [];
    for (let i = 0; i < 100; i++) {
      arr.push(Math.floor(Math.random() * (1000 - 10 + 1) + 10));
    }
    setArray(arr);
  };

  return <div></div>;
}

export default SortingVisualizer;
