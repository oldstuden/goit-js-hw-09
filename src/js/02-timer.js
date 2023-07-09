import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

// const flatpickr = require('flatpickr');
const btnStart = document.querySelector('button[data-start]');
const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

btnStart.addEventListener('click', handlerStart);
btnStart.disabled = true;
const currentDate = new Date();
let fromUserData;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: currentDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    fromUserData = selectedDates[0];
    if (currentDate > fromUserData) {
      Notiflix.Notify.failure('Please choose a date in the future');
      return;
    } else {
      btnStart.disabled = false;
    }
  },
};

const datePicker = flatpickr('#datetime-picker', options);

function handlerStart() {
  const id = setInterval(() => {
    const current = new Date();
    const timerTime = convertMs(fromUserData - current);
    if (timerTime.seconds >= 0) {
      days.textContent = timerTime.days.toString().padStart(2, '0');
      hours.textContent = timerTime.hours.toString().padStart(2, '0');
      minutes.textContent = timerTime.minutes.toString().padStart(2, '0');
      seconds.textContent = timerTime.seconds.toString().padStart(2, '0');
    } else {
      clearInterval(id);
      Notiflix.Notify.success('Congratulation!');
    }
  }, 1000);
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
