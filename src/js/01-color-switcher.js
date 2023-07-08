const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');
const bodyColor = document.querySelector('body');
stopBtn.disabled = true;
let timerId = null;
console.log(startBtn);
console.log(stopBtn);
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    const randomColor = getRandomHexColor();
    bodyColor.style.backgroundColor = randomColor;
  }, 1000);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});
stopBtn.addEventListener('click', () => {
  clearInterval(timerId);
  startBtn.disabled = false;
  stopBtn.disabled = true;
});
