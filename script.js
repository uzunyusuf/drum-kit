const playSound = (e) => {
  let pressedKey;
  let pressedDrum;
  let audio;

  if (e.type === 'click') {
    pressedKey = e.currentTarget.innerText;
    console.log(pressedKey)
  } else {
    pressedKey = e.key;
  }

  if ('wasdjkl'.includes(pressedKey)) {
    pressedDrum = document.querySelector(`.${pressedKey}.drum`);
    pressedDrum.classList.add('pressed');
    setTimeout(() => {
      pressedDrum.classList.remove('pressed');
    }, 100);
    audio = new Audio(`./sounds/tom-${pressedKey}.mp3`);
    audio.play();
  }
}
document.querySelectorAll(".drum").forEach(element => element.addEventListener("click", playSound));
document.addEventListener("keydown", playSound);