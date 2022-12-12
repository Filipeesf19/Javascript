var numberOfButtons = document.getElementsByName("button").length;

for (i = 0; i < numberOfButtons ; i++) {
    document.getElementsByName("button")[i].addEventListener("click",calculation)
}

function calculation(firstNumber,secondNumber) {
    var buttonPressed = this.id;
    console.log(buttonPressed)
    var firstNumber = document.querySelector("#firstNumber").value;
    var secondNumber = document.querySelector("#secondNumber").value;
    switch (buttonPressed) {
        case "multiply":
            var result = firstNumber * secondNumber;
            document.querySelector(".result").innerHTML = result;
            break;

        case "divide":
            var result = firstNumber / secondNumber;
            document.querySelector(".result").innerHTML = result;
            break;

        default:
            break;
    }
}