import Visualization from "./Visualization";
import DisableButtons from "./DisableButtons";
import { ChangeProps,sleep,changeComplexity } from "./ChangeProps";

const Selection = async() => {
  
  changeComplexity("O(N^2)","Θ(N^2)","Ω(N)","O(1)");
  
  const arrdiv = document.querySelectorAll(".arrDiv");
  let n = parseInt(arrdiv.length);
  const speed = Visualization()
  DisableButtons(true)

  for(let i = 0;i<n;i++){
    let min = i;
    for(let j = i;j<n;j++){
      arrdiv[j].style.backgroundColor = "yellow";
      if(arrdiv[j].textContent<arrdiv[min].textContent){
        min = j;
      }
      await sleep(speed/4)
      arrdiv[j].style.backgroundColor = "#ff471a";
    }
    // arrdiv[min].style.backgroundColor = "blue";
    arrdiv[min].style.backgroundColor = "yellow";
    await sleep(speed)
    arrdiv[min].style.backgroundColor = "#ff471a";
    ChangeProps(arrdiv[i],arrdiv[min]);
    arrdiv[i].style.backgroundColor = "green";
  }

  DisableButtons(false)
};

export default Selection;
