const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;


slider.addEventListener('mousedown', (e) =>{
  isDown = true;
  startX = e.pageX - slider.offsetLeft
  slider.classList.add('active');
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mousemove', (e) =>{
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;
  console.log({walk});
  slider.scrollLeft = scrollLeft - walk;


});
slider.addEventListener('mouseup', () =>{
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseleave', () =>{
  isDown = false;
  slider.classList.remove('active');
});
