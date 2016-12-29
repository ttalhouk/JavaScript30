const speed = document.querySelector('.speed');
const bar = speed.querySelector('.speed-bar');
const video = document.querySelector('.flex');


speed.addEventListener('mousemove', function(e) {
  const y = e.pageY - this.offsetTop;
  const percent = (y / this.offsetHeight);
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent *100) + "%";
  const playbackRate = min + ((max-min)*percent);
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(1) + " x";
  video.playbackRate = playbackRate;

})
