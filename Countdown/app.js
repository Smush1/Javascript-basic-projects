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
 
  const giveaway = document.querySelector('.giveaway');
  const deadline = document.querySelector('.deadline');
  const items = document.querySelectorAll('.deadline-format h4');

let futureDate = new Date(2023, 8, 30, 17, 30 , 0 )
  console.log(futureDate)

const year = futureDate.getFullYear();
const month = months[futureDate.getMonth()];
const date = futureDate.getDate();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
const day = weekdays[futureDate.getDay()];

console.log(day+ " " + month)
giveaway.textContent = `giveaway ends on ${day}, ${date} ${month} ${year}, ${hours}:${mins}pm`



// future time in ms
const futureTime = futureDate.getTime();
console.log(futureTime)

function getRemainingTime(){
  const today = new Date().getTime();
  const t = futureTime - today;
  //console.log(t)
  // 1s = 1000ms
  // 1m = 60s
  // 1hr = 60min
  // 1d = 24hr

  const oneDay =  24*1000*60*60
  const oneHour = 1000*60*60
  const oneMinute = 1000*60

// calculate days
  const daysLeft = Math.floor ( t / oneDay )
  const hourLeft = Math.floor((t % oneDay) / oneHour)
  const minsLeft = Math.floor((t % oneHour) / oneMinute)
  const secLeft = Math.floor((t % oneMinute )/1000)
  //console.log(daysLeft, hourLeft, minsLeft, secLeft)

  const values = [daysLeft, hourLeft, minsLeft, secLeft ];
  
  function format(item){
    if(item < 10){
      return `0${item}`
    }
    else{
      return item
    }
  }

  items.forEach((item,index)=> {
   // console.log(item + " "+ index)
    item.innerHTML = format(values[index]);

  });

  if(t< 0){
    clearInterval(countdown);
    deadline.innerHTML = `Sorry the giveaway has been expired`

  }


}

let countdown = setInterval(getRemainingTime, 1000);