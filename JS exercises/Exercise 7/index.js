document.querySelector("#text").addEventListener("change", () => {
    var inputText = document.querySelector("#text").value;
    var textArray = inputText.split(" ");
    var biggestWord = textArray[0];
    for (var i=1; i<textArray.length; i++) {
        if (textArray[i].length > textArray[i-1].length) {
            biggestWord = textArray[i];
        }
    }
    document.querySelector(".biggestWord").innerHTML = biggestWord;
})