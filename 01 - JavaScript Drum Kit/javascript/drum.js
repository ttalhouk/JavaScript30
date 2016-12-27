window.addEventListener("keydown",function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();

  const drum = document.querySelector(`div[data-key="${e.keyCode}"]`);
  if(!drum) return;
  drum.className += ' playing'; // alternatively drum.classList.add('playing');

  function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
  }
  const keys = document.querySelectorAll('.key');
  keys.forEach(function(key){
    key.addEventListener('transitionend', removeTransition)
  });

});
