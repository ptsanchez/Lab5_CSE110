// expose.js

window.addEventListener('DOMContentLoaded', init);
const jsConfetti = new JSConfetti();

function init() {
  // TODO
  let select = document.getElementById("horn-select");
  let img_change = document.getElementsByTagName("img");
  let sound = document.getElementsByClassName("hidden"); 
  let button = document.getElementsByTagName("button");
  let input = document.querySelector("input");
  

  //change image and audio source based on selection
  select.addEventListener("change", () => {
    switch (select.value) {
      case "air-horn":
        img_change[0].src = "assets/images/air-horn.svg";
        sound[0].src = "assets/audio/air-horn.mp3"
        break;
      case "car-horn":
        img_change[0].src = "assets/images/car-horn.svg";
        sound[0].src = "assets/audio/car-horn.mp3"
        break;
      case "party-horn":
        img_change[0].src = "assets/images/party-horn.svg";
        sound[0].src = "assets/audio/party-horn.mp3"
        break;
    }
  });

  //when button is clicked, play sound
  button[0].addEventListener("click", () => {
    if (select.value == "party-horn") {
      jsConfetti.addConfetti();
    }
    sound[0].play();
  });

  input.addEventListener("input", () => {
    sound[0].volume = input.value / 100;
    if (input.value == 0) {
      img_change[1].src = "assets/icons/volume-level-0.svg";
    }
    else if (input.value > 0 && input.value < 33) {
      img_change[1].src = "assets/icons/volume-level-1.svg";
    }
    else if (input.value > 32 && input.value < 67) {
      img_change[1].src = "assets/icons/volume-level-2.svg";
    }
    else if (input.value > 66 && input.value <= 100) {
      img_change[1].src = "assets/icons/volume-level-3.svg";
    }
  });
}

