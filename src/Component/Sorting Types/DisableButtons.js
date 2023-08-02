
const DisableButtons = (props) => {
    const buttons = document.querySelectorAll(".sort-btn");
    const arrSize = document.getElementById("array-size").disabled = props
    const arrSpeed = document.getElementById("speed").disabled = props
    const newArr = document.getElementById("new-array-btn").disabled = props
    buttons.forEach((value, index) => {
      buttons[index].disabled = props;
    });

};

export default DisableButtons;
