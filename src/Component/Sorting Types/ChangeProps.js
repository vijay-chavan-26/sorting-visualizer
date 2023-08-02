const sleep = (ms) =>{
    return new Promise (resolve => setTimeout(resolve,ms))
}

const changeComplexity = (worst='',avg='',best='',sworst='') =>{
    //Setting Time complexities
  document.getElementById("Time_Worst").innerText='Worst Case :'+worst;
  document.getElementById("Time_Average").innerText='Average Case :'+avg;
  document.getElementById("Time_Best").innerText='Best Case :'+best;
  
  //Setting Space complexity
  document.getElementById("Space_Worst").innerText='Worst Case :'+sworst;
}

const ChangeProps = (a, b) => {
    let tempHeight = a.style.height;
    let tempValue = a.textContent;
    a.style.height = b.style.height;
    a.textContent = b.textContent;
    b.style.height = tempHeight;
    b.textContent = tempValue;
};

const changeArrDivColor = () =>{
    let arr = document.querySelectorAll('.arrDiv')
    for(let i=0;i<arr.length;i++){
      arr[i].style.backgroundColor = '#ff471a';
    }
}

export { ChangeProps,sleep,changeComplexity,changeArrDivColor }