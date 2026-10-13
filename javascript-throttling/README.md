# JavaScript Throttling | f12-lab

Learn how **Throttling works in JavaScript** with a practical keyboard event example.

This repository contains the source code demonstrated in the **f12-lab JavaScript Throttling tutorial**.

## 📌 About This Example

Imagine you're building a game where pressing the **Right Arrow key** moves a player.

Every keydown event triggers a `movePlayer()` function. If the user continuously presses the key, the function may execute many times within a short period.

If `movePlayer()` performs expensive operations, these repeated executions can affect application performance.

We can use **Throttling** to limit how frequently the function executes.

## 📂 Files

| File                    | Description                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------- |
| `without-throttling.js` | Calls `movePlayer()` on every Right Arrow keydown event.                                                      |
| `with-throttling.js`    | Uses a custom `throttle()` function to limit `movePlayer()` execution to at most once every 500 milliseconds. |

## 🚀 How to Run

No installation or external libraries required.

1. Open a webpage in your browser.
2. Open **Chrome DevTools** (`F12`).
3. Navigate to the **Console** tab.
4. Copy and paste the code from `without-throttling.js`.
5. Press and hold the **Right Arrow key** and observe the output.
6. Refresh the webpage to remove the previous event listener.
7. Copy and paste the code from `with-throttling.js`.
8. Press and hold the **Right Arrow key** again and compare the results.

**Note:** Make sure the webpage has keyboard focus and allows pasting code into DevTools. Run each example separately.

## 🔍 Expected Behavior

### Without Throttling

Every Right Arrow keydown event executes `movePlayer()`.

Example console output:

```js
{ eventCount: 1, functionCallCount: 1 }
{ eventCount: 2, functionCallCount: 2 }
{ eventCount: 3, functionCallCount: 3 }
```

Both counts increase together.

### With Throttling

The `throttle()` function allows `movePlayer()` to execute immediately on the first event, then prevents additional executions during the next 500 milliseconds.

Example console output:

```js
{ eventCount: 1, functionCallCount: 1 }
{ eventCount: 2, functionCallCount: 1 }
{ eventCount: 3, functionCallCount: 1 }
{ eventCount: 4, functionCallCount: 2 }
```

The event count continues increasing, while the function execution count increases less frequently.

_Note: Output values are illustrative. Actual counts depend on keyboard events and their timing._

## ⚙️ How Throttling Works

1. The first event triggers `movePlayer()` immediately.
2. A timer starts for 500 milliseconds.
3. Additional events during this interval do not execute `movePlayer()`.
4. After 500 milliseconds, the timer state resets.
5. The next event can execute `movePlayer()` again.

The implementation uses **JavaScript closures** and `setTimeout()` to maintain the timer state between function calls.

## 🎯 Key Takeaways

- Throttling controls how frequently a function can execute.
- It is useful for frequently triggered events such as `scroll`, `resize`, and `keydown`.
- It can help reduce unnecessary expensive function executions.
- A closure allows the throttled function to retain its timer state.

## 🎥 Watch the Full Tutorial

For a step-by-step explanation and live demonstration, watch the tutorial on **f12-lab**.

**YouTube Channel:** https://www.youtube.com/@f12-lab

**Tutorial Video:**

---

**Happy Coding! 🚀**

_f12-lab — Learn JavaScript with practical examples._
