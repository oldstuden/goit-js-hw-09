import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(Date.parse(selectedDates[0]));
  },
};
flatpickr('#datetime-picker', options);
const selectedData = document.querySelector('#datetime-picker');
console.log(selectedData.value);
