const $time = document.querySelector(".reloj");

function updateClock() {
  const now = new Date();
  const hour = String(now.getHours()).padStart(2, "0");
  const minute = String(now.getMinutes()).padStart(2, "0");
  const time = `${hour} : ${minute}`;
  $time.innerHTML = time;
}
setInterval(() => {
  updateClock();
}, 1000);
