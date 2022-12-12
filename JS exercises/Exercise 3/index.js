var d = new Date();

var day = d.getDate();
var month = d.getMonth() + 1;
var year = d.getFullYear();

if (day<10) {
    day = "0" + day;
}

if (month<10) {
    month = "0" + month;
}

document.querySelector(".date").innerHTML = day + "/" + month + "/" + year;