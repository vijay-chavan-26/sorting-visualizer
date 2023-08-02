import React from "react";
import { Button } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { ArrContext } from "./Context";
import { useEffect } from "react";
import Visualization from "./Sorting Types/Visualization";
import Bubble from "./Sorting Types/Bubble";
import Selection from "./Sorting Types/Selection";
import Insertion from "./Sorting Types/Insertion";
import Merge from "./Sorting Types/Merge";
import Quick from "./Sorting Types/Quick";
import Heap from "./Sorting Types/Heap";
import {changeArrDivColor, changeComplexity} from "./Sorting Types/ChangeProps";

const Header = (props) => {
  const context = useContext(ArrContext);
  const [inputVal, setInputVal] = useState({
    size: 20,
    speed: 3,
  });

  useEffect(() => {
    context.setArr(inputVal.size);

    // eslint-disable-next-line
  }, []);

  const clickFunction = () => {
    changeArrDivColor()
    changeComplexity()
    context.setArr(inputVal.size);
    context.setButtonClick(true);

    
    // console.log(context.arr)
  };

  const inputEvent = (e) => {
    const { name, value } = e.target;
    setInputVal((oldVal) => {
      return {
        ...oldVal,
        [name]: value,
      };
    });
    const temp = name ==='size'?context.setArr(value):'';
    if(name === 'size'){
      changeArrDivColor()
      changeComplexity()
    }
    Visualization();
  };

  return (
    <div id="header">
      <div className="array-operations">
        <div className="arr-size-con">
          <p>Size of Array : </p>
          <input
            type="range"
            value={inputVal.size}
            name="size"
            onChange={inputEvent}
            id="array-size"
            min="10"
            max="30"
          />
        </div>
        <div className="arr-speed-con">
          <p>Speed of Array : </p>
          <input
            type="range"
            value={inputVal.speed}
            name="speed"
            onChange={inputEvent}
            id="speed"
            min="1"
            max="5"
          />
        </div>

        <Button id="new-array-btn" className="btn generate-btn" onClick={clickFunction}>
          Generate New Array
        </Button>
      </div>

      <div className="sort-type">
        <h1 className="main-heading">Sorting visualizer</h1>
        <div id="buttons">
          <Button className="sort-btn" onClick={Bubble}>Bubble</Button>
          <Button className="sort-btn" onClick={Selection}>Selection</Button>
          <Button className="sort-btn" onClick={Insertion}>Insertion</Button>
          {/* <Button className="sort-btn" onClick={Quick}>Quick</Button> */}
          {/* <Button className="sort-btn" onClick={Merge}>Merge</Button> */}
          {/* <Button className="sort-btn" onClick={Heap}>Heap</Button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
