const usernameInput = document.querySelector('#username');
const statusElement = document.querySelector('#username-status');
let apiCallCount = 0;

// Demo only: this simulates an API call using a console log.
function checkUsername(username) {
  apiCallCount++;
  console.log(`API Call #${apiCallCount}: ${username}`);

  statusElement.textContent = username
    ? `Checking availability for "${username}"...`
    : '';
  statusElement.classList.toggle('visible', Boolean(username));
}

// Trailing-edge debounce: run only after no new call for `delay` ms.
function debounce(func, delay) {
  let timeOut;

  return (username) => {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      func(username);
    }, delay);
  };
}

const debouncedCheckUserName = debounce(checkUsername, 500);

usernameInput.addEventListener('input', (event) => {
  debouncedCheckUserName(event.target.value);
});

// This is a UI demonstration, not a functional signup form.
document.querySelector('#signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
});
document.querySelector('#login-link').addEventListener('click', (event) => {
  event.preventDefault();
});
