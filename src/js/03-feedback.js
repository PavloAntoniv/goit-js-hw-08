import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

const STORAGE_KEY = 'feedback-form-state';

const savedState = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

emailInput.value = savedState.email || '';
messageInput.value = savedState.message || '';

const saveState = throttle(() => {
  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}, 500);

form.addEventListener('input', event => {
  if (event.target === emailInput || event.target === messageInput) {
    saveState();
  }
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const state = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));

  console.log(state);

  emailInput.value = '';
  messageInput.value = '';

  localStorage.removeItem(STORAGE_KEY);
});
