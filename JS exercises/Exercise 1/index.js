var d = new Date(); //Creates a Date object d, storing toda's date and time in it: d(year, month, day, hours, minutes, seconds, milliseconds)
var day = d.getDay(); //Extracts the day from the d object
var hours = d.getHours() //Extracts the hours from the d object
var minutes = d.getMinutes() //Extracts the minutes from the d object
var seconds = d.getSeconds() //Extracts the seconds from the d object

// Turning "day" into an actual day of the week and not just a number

var dayOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

var currentDayOfTheWeek = dayOfTheWeek[day];

// Adding the day to the innerHTML
document.querySelector(".day").innerHTML=currentDayOfTheWeek;

// Keeping the 12 hour format and adding AM or PM

var partOfDay;

if (hours<12) {
    hours = hours + " AM"
}
else {
    (hours>12)
    hours = hours - 12 + " PM"
}

// Adding the time to the innerHTML
document.querySelector(".time").innerHTML = hours + " : " + minutes + " : " + seconds;