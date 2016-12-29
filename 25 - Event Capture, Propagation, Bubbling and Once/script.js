const divs = document.querySelectorAll('div');

function logText(e) {
  console.log(this.classList.value);
  e.stopPropogation(); // stops bubbling returns first event only
}

divs.forEach(div => {
  return(
    // div.addEventListener('click', logText); // bubble up

    div.addEventListener('click', logText, {capture: true}); // fired on capture down

    div.addEventListener('click', logText, {
      capture: false,
      once: true
    }); // removes eventlistener after one trigger
  )
})
