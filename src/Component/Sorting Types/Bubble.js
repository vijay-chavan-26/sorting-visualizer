import Visualization from "./Visualization";
import DisableButtons from "./DisableButtons";
import { ChangeProps,sleep,changeComplexity } from "./ChangeProps";

const Bubble = async() => {
  
  changeComplexity("O(N^2)","Θ(N^2)","Ω(N)","O(1)");
  
  const arrdiv = document.querySelectorAll(".arrDiv");
  let n = parseInt(arrdiv.length);
  const speed = Visualization()
  DisableButtons(true)
  
  

  for(let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      arrdiv[j].style.backgroundColor = "yellow";
      arrdiv[j + 1].style.backgroundColor = "yellow";
      if (parseInt(arrdiv[j].textContent) > parseInt(arrdiv[j + 1].textContent)) {
        ChangeProps(arrdiv[j], arrdiv[j + 1]);
      }
      await sleep(speed/4)
      arrdiv[j].style.backgroundColor = "#ff471a";
      arrdiv[j+1].style.backgroundColor = "green";
    }
    await sleep(speed)
    arrdiv[0].style.backgroundColor = "green";  
  }
  DisableButtons(false)
};

export default Bubble;
