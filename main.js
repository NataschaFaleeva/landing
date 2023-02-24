const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');

function  updateCounter(){
const nextYear = new Date('May 31 2023 00:00:00');
const currentTime = new Date();

const diff = nextYear - currentTime;
const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);
const hoursLeft = Math.floor(diff / 1000 / 60 / 60 )%24;
const minutesLeft = Math.floor(diff / 1000 / 60 )%60;
const secondsLeft = Math.floor(diff / 1000 )%60;


days.innerText=daysLeft;


hours.innerText=hoursLeft <10 ?'0'+hoursLeft:hoursLeft;
minutes.innerText=minutesLeft <10 ?'0'+minutesLeft:minutesLeft;
seconds.innerText=secondsLeft <10 ?'0'+secondsLeft:secondsLeft;

}

setInterval(updateCounter, 1000);





