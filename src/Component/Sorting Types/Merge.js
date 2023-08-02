import Visualization from "./Visualization";
import DisableButtons from "./DisableButtons";
import { ChangeProps,sleep,changeComplexity } from "./ChangeProps";

const Merge = async() => {
  
  changeComplexity("O(N^2)","Θ(N^2)","Ω(N)","O(1)");
  
  const arrdiv = document.querySelectorAll(".arrDiv");
  let n = parseInt(arrdiv.length);
  const speed = Visualization()
  DisableButtons(true)

  const mergeArray = (a,lb,mid,ub)=>{
    let i = lb, j = mid+1, k = lb;
    let b = [];
    while(i<=mid && j<=ub){
      if(a[i].textContent<a[j].textContent){
      // let temp = arrdiv[i].cloneNode(true);
        b[k] = a[i].cloneNode(true);
        i++;
      }else{
        b[k] = a[j].cloneNode(true);
        j++;
      }
      k++;
    }

    while(i<=mid){
      b[k] = a[i].cloneNode(true);
      k++;
      i++;
    }

    while(j<=ub){
      b[k] = a[j].cloneNode(true);
      k++;
      j++;
    }

    for(let i =lb;i<=ub;i++){
      ChangeProps(a[i],b[i]);
    }
  }

  const mergeSort = (a,lb,ub) =>{
    if(lb<ub){
      let mid = Math.floor((lb+ub)/2);
      mergeSort(a,lb,mid);
      mergeSort(a,mid+1,ub);
      mergeArray(a,lb,mid,ub);
    }
  }

  mergeSort(arrdiv,0,n-1);

  DisableButtons(false)
};

export default Merge;
