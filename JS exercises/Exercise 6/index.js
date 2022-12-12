document.querySelector("button").addEventListener('click', () => {
    var originalNumber = document.querySelector("#originalNumber").value;
    originalNumber = originalNumber + ""; // Converts number to string
	var reversedNumber = originalNumber.split("").reverse().join("");
    document.querySelector(".reversedNumber").innerHTML = Number(reversedNumber);
});