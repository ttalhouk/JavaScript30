const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  // grabs the input field which can have access to it's properties
  const suffix = this.dataset['sizing'] || '';

  // set the style variable based on the field that is triggering the event listener
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(function(input) {
  input.addEventListener('change', handleUpdate);
  input.addEventListener('mousemove', handleUpdate);
})
