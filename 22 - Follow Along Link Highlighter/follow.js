const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink(){
  // get coordinates and info on element
  const linkCoords = this.getBoundingClientRect();
  console.log(linkCoords);

  // adjust coordinates based on scroll
  const cords = {
    width:linkCoords.width,
    height:linkCoords.height,
    top:linkCoords.top + window.scrollY,
    left:linkCoords.left + window.scrollX,
  }

  // apply the highlight 
  highlight.style.width = `${cords.width}px`;
  highlight.style.height = `${cords.height}px`;
  highlight.style.transform = `translate(${cords.left}px, ${cords.top}px)`

}

triggers.forEach(trigger => {
  trigger.addEventListener('mouseenter',highlightLink);
})
