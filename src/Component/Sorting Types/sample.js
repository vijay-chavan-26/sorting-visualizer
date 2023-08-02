
const speed = (i) =>{
    return (1000*i);
}

for(let i = 0;i<5;i++){
    setTimeout(()=>{
        console.log(i)
    },speed(i))
}