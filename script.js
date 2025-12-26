let time = 300; // 5 minutes

const timerEl = document.getElementById("timer");

setInterval(() => {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;
  timerEl.innerHTML = `${minutes}:${seconds}`;

  if (time > 0) time--;
}, 1000);
