import Notiflix, { Notify } from 'notiflix';
function createPromise(pos, delay) {
  return new Promise((res, rej) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ pos, delay });
      } else {
        // Reject
        rej({ pos, delay });
      }
    }, delay);
  });
}
const selectors = {
  delay: document.querySelector('input[name = delay]'),
  step: document.querySelector('input[name = step]'),
  amound: document.querySelector('input[name = amount]'),
};
const form = document.querySelector('.form');
form.addEventListener('submit', handlerSubmit);
function handlerSubmit(evt) {
  evt.preventDefault();
  let delay = Number(selectors.delay.value);
  let step = Number(selectors.step.value);
  let amound = Number(selectors.amound.value);
  for (let pos = 1; pos <= amound; pos += 1) {
    createPromise(pos, delay)
      .then(({ pos, delay }) => {
        Notify.success(`✅ Fulfilled promise ${pos} in ${delay} ms`);
      })
      .catch(({ pos, delay }) => {
        Notify.failure(`❌ Rejected promise ${pos} in ${delay} ms`);
      });
    delay += step;
  }
}
