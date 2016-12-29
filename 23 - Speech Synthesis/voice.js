const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

function populateVoices(){
  voices = this.getVoices();
  console.log(voices);
  const voiceOptions = voices
    // .filter(voice => voice.lang.includes('en'))
    .map((voice) => {
      return(
        `
          <option value='${voice.name}'>${voice.name} (${voice.lang})</option>
        `
      )
    })
    .join('');
  voicesDropdown.innerHTML = voiceOptions;
}

function setVoice(){
  // find voice with name that matches input field
  msg.voice = voices.find(voice => voice.name === this.value)
  toggle();
}

function setOption(e) {
  console.log(e.target.name, e.target.value);

  msg[e.target.name] = e.target.value;
  console.log(msg);
  toggle();
}


function toggle(startOver = true){
  speechSynthesis.cancel();
  if (startOver) {
    speechSynthesis.speak(msg);
  }
}

speechSynthesis.addEventListener('voiceschanged', populateVoices);
voicesDropdown.addEventListener('change', setVoice);
speakButton.addEventListener('click', toggle);
stopButton.addEventListener('click', () => toggle(false));

options.forEach(option => {
  option.addEventListener('change', setOption)
})
