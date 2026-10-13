let keydownCount = 0;
let movePlayerCount = 0;

function movePlayer() {
  // some expensive calculation

  movePlayerCount++;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    keydownCount++;
    throttledMovePlayer();
  }

  console.log({
    eventCount: keydownCount,
    functionCallCount: movePlayerCount,
  });
});

function throttle(func, delay) {
  let timeOut = null;
  return () => {
    if (!timeOut) {
      func();
      timeOut = setTimeout(() => {
        timeOut = null;
      }, delay);
    }
  };
}

const throttledMovePlayer = throttle(movePlayer, 500);
