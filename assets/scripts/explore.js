// explore.js

window.addEventListener('DOMContentLoaded', init);


function init() {
  // TODO
  let synth = window.speechSynthesis;
  let voiceSelect = document.getElementById("voice-select");
  let button = document.getElementsByTagName("button");
  let textarea = document.getElementById("text-to-speak");
  let img = document.getElementsByTagName("img");

  let voices = [];
  let utterance = new SpeechSynthesisUtterance();

  function populateVoiceList() {
    voices = synth.getVoices();
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
  
      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }
  
  button[0].addEventListener("click", () => {
    utterance = new SpeechSynthesisUtterance(textarea.value);
    let selectedOption = voiceSelect.selectedOptions[0].getAttribute("data-name");

    for (let i = 0; i < voices.length; i++) {
      if (voices[i].name === selectedOption) {
        utterance.voice = voices[i];
      }
    }
    
  utterance.addEventListener('start', () => {
    img[0].src = "assets/images/smiling-open.png"; 
  });

  utterance.addEventListener('end', () => {
    img[0].src = "assets/images/smiling.png";
  });
  
  synth.speak(utterance);
  });
}