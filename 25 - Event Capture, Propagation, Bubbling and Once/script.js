const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
}

divs.forEach(div => {
  return(
    div.addEventListener('click', logText);
  )
})
