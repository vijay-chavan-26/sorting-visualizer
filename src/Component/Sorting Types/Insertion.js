import Visualization from "./Visualization";
import DisableButtons from "./DisableButtons";
import { ChangeProps,sleep,changeComplexity } from "./ChangeProps";

const Insertion = async() => {
  
  changeComplexity("O(N^2)","Θ(N^2)","Ω(N)","O(1)");
  
  const arrdiv = document.querySelectorAll(".arrDiv");
  let n = parseInt(arrdiv.length);
  const speed = Visualization()
  DisableButtons(true)

  for(let i=1;i<n;i++){
    arrdiv[0].style.backgroundColor='green'
    let temp = arrdiv[i].cloneNode(true);
    arrdiv[i].style.backgroundColor='yellow'
    let j=i-1;
    while(j>=0 && arrdiv[j].textContent>temp.textContent){
      arrdiv[j+1].style.backgroundColor='yellow'
      // arrdiv[j].style.backgroundColor='yellow'
      arrdiv[j+1].style.height = arrdiv[j].style.height;
      arrdiv[j+1].textContent = arrdiv[j].textContent;
      await sleep(speed/2)
      arrdiv[j+1].style.backgroundColor='green'
      arrdiv[j].style.backgroundColor='green'
      j--;
    }
    arrdiv[j+1].style.height = temp.style.height;
    arrdiv[j+1].textContent = temp.textContent;
    await sleep(speed)
    arrdiv[i].style.backgroundColor='green'
    // arrdiv[j+1].style.backgroundColor='green'
  }
  arrdiv[n-1].style.backgroundColor='green'

  DisableButtons(false)
};

export default Insertion;
