// Get DOM elements
const box = document.getElementById('box');
const message = document.getElementById('message');

let startTime;

// Function to show the box at a random position
function showBox() {
  const x = Math.random() * (window.innerWidth - 100);
  const y = Math.random() * (window.innerHeight - 100);

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
  box.style.backgroundColor = 'red';
  box.style.display = 'block';

  startTime = new Date().getTime();
}

// Function to start the game after a random delay
function startGame() {
  message.textContent = 'Wait for the box to appear...';
  box.style.display = 'none';

  const delay = Math.random() * 2000 + 1000; // 1s to 3s delay
  setTimeout(showBox, delay);
}

// Handle box click
box.onclick = function () {
  const endTime = new Date().getTime();
  const reactionTime = (endTime - startTime) / 1000; // in seconds

  message.textContent = `Your Reaction Time: ${reactionTime.toFixed(2)} seconds`;
  box.style.backgroundColor = 'green';

  // Start again after short delay
  setTimeout(startGame, 1000);
};

// Start the first round
startGame();
