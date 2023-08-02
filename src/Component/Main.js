import React from "react";
import { useContext, useEffect } from "react";
import { ArrContext } from "./Context";

const Main = (props) => {
  const context = useContext(ArrContext);
  const tempArr = [];
  
  useEffect(() => {
    for (let i = 0; i < context.arr; i++) {
      const num = Math.floor(Math.random(Math.random()) * 61 + 10);
      tempArr[i] = num;
    }
    context.setFinalArr(tempArr);
    context.setButtonClick(false);
    // eslint-disable-next-line
  }, [context.arr, context.buttonClick]);

  return (
    <div id="main">
      <div className="array-container">
        {context.finalArr.map((val, index) => {
          const myStyle = {
            backgroundColor: "#ff471a",
            height: (val/2) + "rem",
            width: 30 / context.arr + 1 + "rem",
            zIndex: 1
          };
          
          return (
            <div className="arrDiv" key={index} style={myStyle}>
              {val}
            </div>
          );
        })}
      </div>
      <h1 id="size-text">Size : {context.arr}</h1>
    </div>
  );
};

export default Main;
