document.querySelector("#inputNumber").addEventListener("change", function() {

    var inputNumber = document.querySelector("#inputNumber").value;
    var randomNumber = Math.ceil(Math.random()*10);

    if (inputNumber <= 10) {
    document.querySelector(".guess").innerHTML = inputNumber;
    document.querySelector(".randomNumber").innerHTML = randomNumber;
        if (inputNumber==randomNumber) {
            document.querySelector(".result").innerHTML = "Good Work";
        }
        else {
            document.querySelector(".result").innerHTML = "Not Matched";
        }
    } else {
        alert("Number must be between 1 and 10!");
    }
})





