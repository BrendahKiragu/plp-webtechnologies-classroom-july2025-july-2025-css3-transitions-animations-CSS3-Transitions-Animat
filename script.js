/* -------------------------------
   Part 2: JavaScript Functions
------------------------------- */

// Calculate square from input field
function calculateFromInput() {
  const input = document.getElementById("squareInput").value;
  const resultEl = document.getElementById("squareResult");

  if (input && !isNaN(input)) {
    const result = calculateSquare(Number(input));
    resultEl.textContent = `✅ Square of ${input} is ${result}`;
  } else {
    resultEl.textContent = "⚠️ Please enter a valid number.";
  }
}

// Core calculation function
function calculateSquare(num) {
  return num * num;
}

// Greeting function
function showGreeting(name) {
  alert(`Hello, ${name}! Welcome to the interactive page 🎉`);
}

// Toggle background color
const colors = ["black", "green", "white", "red"];
let currentIndex = 0;

function toggleBackground() {
  document.body.style.backgroundColor = colors[currentIndex];
  currentIndex = (currentIndex + 1) % colors.length; // loop back after last color
}

/* -------------------------------
   Part 3: Trigger Animations
------------------------------- */
function animateBox() {
  const box = document.querySelector(".animated-box");
  box.classList.toggle("move");
}

function flipCard() {
  const card = document.querySelector(".flip-inner");
  card.classList.toggle("flip");
}

/* -------------------------------
   Ball Animation Game
------------------------------- */
let ball = document.getElementById("ball");
let container = document.querySelector(".ball-container");
let ballInterval = null;
let direction = 1; // 1 → right, -1 → left
let position = 0;

function startBall() {
  if (ballInterval) return;
  ballInterval = setInterval(() => {
    position += 4 * direction;

    if (position + ball.offsetWidth >= container.offsetWidth || position <= 0) {
      direction *= -1;
    }

    ball.style.left = position + "px";
  }, 20);
}

function stopBall() {
  clearInterval(ballInterval);
  ballInterval = null;
}

function resumeBall() {
  startBall();
}
