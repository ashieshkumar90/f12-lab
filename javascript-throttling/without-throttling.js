let keydownCount = 0;
let movePlayerCount = 0;

function movePlayer() {
  // some expensive calculation

  movePlayerCount++;
}

window.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    keydownCount++;
    movePlayer();
  }

  console.log({
    eventCount: keydownCount,
    functionCallCount: movePlayerCount,
  });
});
