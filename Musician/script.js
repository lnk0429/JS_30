function playAudio(e) {
  const audioNum = this.document.querySelector(
    `audio[data-key="${e.keyCode}"]`
  );
  const keyEle = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if (!audioNum) return;
  audioNum.currentTime = 0;
  audioNum.play();
  keyEle.classList.add("playing");
}

function removeTransition(e) {
  if (e.propertyName !== "transform") return;
  this.classList.remove("playing");
}

const keys = document.querySelectorAll(".key");
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));

window.addEventListener("keydown", playAudio);
