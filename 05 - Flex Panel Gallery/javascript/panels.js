const panels =  document.querySelectorAll('.panel');

function handleClick() {
  this.classList.toggle('open');
}

function finishTransition(e) {
  if (e.propertyName.includes('flex')){
    this.classList.toggle('open-active');
  }
}

panels.forEach((panel) => {
  panel.addEventListener('click', handleClick);
  panel.addEventListener('transitionend', finishTransition)
})
