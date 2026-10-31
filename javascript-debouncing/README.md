# Debouncing in JavaScript — Username Availability Demo

A beginner-friendly **vanilla JavaScript** demo from **f12-lab**, showing how debouncing reduces unnecessary function calls when someone types in a signup form.

The project compares two approaches:

- **Without debouncing:** `checkUsername()` runs on every `input` event.
- **With debouncing:** `checkUsername()` runs **500 ms after the latest input event**, provided no newer event resets the timer.

> **Note:** API requests are **simulated using `console.log()`**. There is no backend, real username availability check, or working signup process. The signup form is a visual teaching demo.

## Project structure

```text
javascript-debouncing/
├── index.html                # Signup form; selects which JS demo to run
├── style.css                 # Form styling
├── without-debouncing.js    # Runs on every input event
├── with-debouncing.js       # Debounce implementation (500 ms)
├── README.md
└── .gitignore
```

## Run locally

1. Download or clone this repository.
2. Open `index.html` in your browser (or use VS Code Live Server).
3. Open **Developer Tools → Console** (usually F12).
4. Type `ashish` in the username field and watch the console.

No installation, npm packages, build process, or API keys are required.

### Compare the two versions

In `index.html`, find the script tag near the end of the file.

**With debouncing (default):**

```html
<script src="with-debouncing.js"></script>
```

**Without debouncing:** change it to:

```html
<script src="without-debouncing.js"></script>
```

Only load **one** script at a time. Save the file and refresh the page before testing again (the console counter starts at zero on each reload).

## Expected behavior

Assume you type `ashish` continuously, with **less than 500 ms between input events**:

| Scenario               | Expected `checkUsername()` calls     |
| ---------------------- | ------------------------------------ |
| Without debouncing     | 6 calls, one per character           |
| With 500 ms debouncing | 1 call, 500 ms after the final input |

The debounced console output should be:

```text
API Call #1: ashish
```

If you pause for **500 ms or longer** while typing, the debounced function can execute more than once. Debouncing does not guarantee one call for an entire typing session.

## How the debounce function works

```javascript
function debounce(func, delay) {
  let timeOut;

  return (username) => {
    clearTimeout(timeOut);

    timeOut = setTimeout(() => {
      func(username);
    }, delay);
  };
}
```

1. `debounce()` receives the function to delay and a waiting period.
2. It returns a function that retains access to `timeOut` through a **closure**.
3. Each call cancels the previously scheduled timeout, if it is still pending.
4. It schedules a new timeout and stores its ID in `timeOut`.
5. If no newer call resets the timer, `func(username)` runs after the delay with the most recent username.

```javascript
const debouncedCheckUserName = debounce(checkUsername, 500);

usernameInput.addEventListener("input", (event) => {
  debouncedCheckUserName(event.target.value);
});
```

**Why create `debouncedCheckUserName` outside the listener?** Each input event must reuse the _same returned function_ so it can cancel the previous timeout. Creating a new debounced function inside the listener would give each event a separate timer.

## Debouncing vs. throttling

- **Debouncing:** wait until events pause for a specified duration before executing.
- **Throttling:** limit how frequently execution can occur during repeated events.

## Tutorial and source

- YouTube channel: **f12-lab**
- Debouncing video: **[]**
- Related Throttling tutorial: **https://youtu.be/4-VcNPlkEQI**

## Limitations

This is an educational demo, not production signup logic. The example does not validate a username against a server, submit a real registration, or handle network failures and stale API responses. The `debounce()` helper shown here intentionally forwards one argument (`username`) to keep the tutorial easy to follow.
