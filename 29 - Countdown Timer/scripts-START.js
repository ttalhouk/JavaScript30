let countdown;
const timeDisplay =  document.querySelector('.display__time-left');

const endTime =  document.querySelector('.display__end-time');

const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + (seconds * 1000);
  displayTimeLeft(seconds);
  displayEndTime(then);
  countdown = setInterval(() => {
    const secondsRemaining = Math.round((then - Date.now()) / 1000);
    if (secondsRemaining < 0){
      clearInterval(countdown)
      return;
    }
    displayTimeLeft(secondsRemaining);
  }, 1000)
}

function displayTimeLeft(seconds) {
  const min = Math.floor(seconds / 60);
  const secondsLeft = seconds % 60
  const display = `${min}:${secondsLeft < 10 ? '0': ''}${secondsLeft}`
  timeDisplay.textContent = display;
  document.title = display;
}

function displayEndTime(timestamp) {
  const end =  new Date(timestamp);
  const hour = end.getHours();
  const mins = end.getMinutes();
  endTime.textContent= `Be back at... ${hour > 12 ? hour - 12 : hour}:${mins < 10 ? '0':''}${mins}`
}

function startTimer(){
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => {
  return(
    button.addEventListener('click', startTimer)
  );
})
document.customForm.addEventListener('submit', function(e){
  e.preventDefault();
  const mins = this.minutes.value;
  this.reset();
  timer(mins * 60);
})
