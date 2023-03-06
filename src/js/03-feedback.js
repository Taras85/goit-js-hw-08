import throttle from 'lodash.throttle';

const feedBackForm = document.querySelector('.feedback-form');

feedBackForm.addEventListener('submit', feedBackSabmit);
feedBackForm.addEventListener('input', throttle(feedBackInput, 500));

function feedBackSabmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  feedBackForm.reset();
  localStorage.removeItem('feedback-form-state');
}
function feedBackInput() {
  const userData = {
    email: feedBackForm.elements.email.value,
    message: feedBackForm.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(userData));
}
let storageFeedback = JSON.parse(localStorage.getItem('feedback-form-state'));
if (storageFeedback !== null) {
  feedBackForm.elements.email.value = storageFeedback.email;
  feedBackForm.elements.message.value = storageFeedback.message;
}
