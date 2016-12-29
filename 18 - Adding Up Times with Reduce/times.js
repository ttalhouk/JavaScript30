const videoList = [...document.querySelectorAll('[data-time]')];

const totalTime = videoList
  .map(video => {
    // first attempt
    // const time = video.dataset.time.split(':');
    // return (parseInt(time[0]) * 60) + parseInt(time[1])

    // destructured method
    const [mins, secs] = video.dataset.time.split(':').map(parseFloat);
    return (mins * 60 + secs);
  })
  .reduce((sum, ele) => {
    return sum + ele
  }, 0);

console.log(totalTime);

let secondsLeft = totalTime;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const mins = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60

console.log(`${hours} : ${mins} : ${secondsLeft}`);
