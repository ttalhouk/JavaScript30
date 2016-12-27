const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate(){
  // console.log("Hi");
  const now = new Date();
  const seconds =  now.getSeconds();
  const secondsDeg = 90 + ((seconds/60) * 360);
  secondHand.style.transform = `rotate(${secondsDeg}deg)`;
  const minutes = now.getMinutes();
  const minutesDeg = 90 + ((minutes/60) * 360);
  minuteHand.style.transform = `rotate(${minutesDeg}deg)`;
  var hours = now.getHours();
  if (hours > 12) {
    hours -= 12
  };
  const hoursDeg = 90 + ((hours/12) * 360);
  hourHand.style.transform = `rotate(${hoursDeg}deg)`;

};
setInterval(setDate, 1000);
