import Visualization from "./Visualization";
import DisableButtons from "./DisableButtons";
import { ChangeProps, sleep, changeComplexity } from "./ChangeProps";

const Quick = async() => {
  changeComplexity("O(N^2)", "Θ(N^2)", "Ω(N)", "O(1)");

  const arrdiv = document.querySelectorAll(".arrDiv");
  let n = parseInt(arrdiv.length);
  const speed = Visualization();
  DisableButtons(true);

  const partition = async(arr, low, high) => {
    const pivot = arr[low];
    let i = low + 1;

    for (let j = low + 1; j <= high; j++) {
      arr[i - 1].style.backgroundColor = "yellow";
      if (arr[j].textContent < pivot.textContent) {
        ChangeProps(arr[j], arr[i]);
        await sleep(speed);
        i++;
      }
    }
    ChangeProps(arr[low], arr[i - 1]);
    console.log(low, high, i - 1);
    for(let k = 0 ; k<i-1;k++){
      arr[i-1].style.backgroundColor = "#ff471a";
      await sleep(speed);
    }
    return i - 1;
  };
  
  const quickSort = async (arr, start, end) => {
    if (start < end) {
      const pivotIndex = await partition(arr, start, end);
      arr[pivotIndex].style.backgroundColor = "green";
      // arr[start].style.backgroundColor = "green";
      // arr[end].style.backgroundColor = "green";
      await sleep(speed);
      await quickSort(arr, start, pivotIndex - 1);
      await quickSort(arr, pivotIndex + 1, end);
    }
    // arr[start+1].style.backgroundColor = "green";
  };
  quickSort(arrdiv, 0, n - 1);

   DisableButtons(false);
};

export default Quick;
