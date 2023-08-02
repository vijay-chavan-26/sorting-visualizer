
const Visualization = () => {
  var speed = 100;
  const inp_aspeed = document.getElementById("speed");
  var array_speed = inp_aspeed.value;

    switch (parseInt(array_speed)) {
      case 1:
        speed = 1000;
        break;
      case 2:
        speed = 500;
        break;
      case 3:
        speed = 200;
        break;
      case 4:
        speed = 100;
        break;
      case 5:
        speed = 50;
        break;
    }

    return speed; 
};

export default Visualization;
