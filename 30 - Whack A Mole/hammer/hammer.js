const game = document.querySelector('.game');
const hammer = document.querySelector('.hammer');

function swing(){
  hammer.classList.add('swing');
}
function reload(){
  this.classList.remove('swing');
}

function moveHammer(e){
  const x = e.clientX;
  const y = e.clientY;
  hammer.style.left = (x - 20) + 'px';
  hammer.style.top = (y - 75) + 'px';
}

game.addEventListener('mousemove', moveHammer)
hammer.addEventListener('click', swing)
hammer.addEventListener('transitionend', reload)
