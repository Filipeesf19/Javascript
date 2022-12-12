const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4");

// create a specific date 31st December 2022 at 23:59:00
let futureDate = new Date(2022,10,31,23,59,0);
const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const day = futureDate.getDate();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const seconds = futureDate.getSeconds();
const weekDay = weekdays[futureDate.getDay()];

// Display end of giveway date
giveaway.textContent = `giveaway ends on ${weekDay}, ${day} ${month} ${year} ${hours}:${minutes}pm`;

// Calculate difference between current and future dates
// Future time in ms
const futureTime = futureDate.getTime();

function getRemainingTime() {
  const today = new Date().getTime();
  const timeLeft = futureTime - today;
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  // values in ms
  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  // calculate time left in days, hours, minutes and seconds
  let d = Math.floor(timeLeft / oneDay);
  let h = Math.floor((timeLeft % oneDay) / oneHour);
  let m = Math.floor((timeLeft % oneHour) / oneMinute);
  let s = Math.floor((timeLeft % oneMinute) / oneSecond);

  // set values array in a array
  const values = [d, h, m, s]; 
  items.forEach((item,index) => {
    item.innerHTML = format(values[index]);
  })

  // format numbers (add 0 on the left of number smaller than 10)
  function format(item) {
    if(item < 10){
      return item = `0${item}`
    }
    return item
  }

  if(timeLeft < 0) {
    clearInterval(countdown);
    deadline.innerHTML = `<h4 class="expired">Sorry, this
    giveaway has expired</h4>`
  }
}

// countdown

let countdown = setInterval(getRemainingTime, 1000)

getRemainingTime();
