const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const game = document.querySelector('.game');
const hammer = document.querySelector('.hammer');
let lastHole;
let timeUp = true;
let score = 0;
let currentMole;




function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 2000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  currentMole = setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time)
}

function startGame() {
  score = 0;
  scoreBoard.textContent = score;
  timeUp = false;
  peep();
  setTimeout(() => {timeUp = true}, 10000)
}

function bonk(e) {
  if (!e.isTrusted  || timeUp) return;
  swing()
  score += 1;
  lastHole.classList.remove('up');
  scoreBoard.textContent = score;
  clearTimeout(currentMole);
  if (!timeUp) peep();

}
function swing(){
  hammer.classList.add('swing');
}
function reload(){
  this.classList.remove('swing');
}

function moveHammer(e){
  if (timeUp) return;
  const x = e.pageX;
  const y = e.pageY;
  hammer.style.left = (x + 25) + 'px';
  hammer.style.top = (y - 75) + 'px';
}


moles.forEach(mole => mole.addEventListener('click', bonk));
game.addEventListener('mousemove', moveHammer)
// hammer.addEventListener('click', swing)
hammer.addEventListener('transitionend', reload)
