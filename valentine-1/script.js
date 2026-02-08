// --- DOM Elements: Getting references to HTML elements ---
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const noMessage = document.getElementById("no-message");
const questionPage = document.getElementById("question-page");
const celebrationPage = document.getElementById("celebration-page");
const container = document.querySelector(".container");

// --- 💡 CUSTOMIZE HERE: The 5 funny/romantic quotes for when 'No' is clicked ---
const funnyMessages = [
  "Are you sure? 🥺",
  "Think again, love! 🤔",
  "Don't do this to me! 💔",
  "But... I'm lovely! 🥰",
  "You can't say no! 😤",
];

let noClickCount = 0; // Tracks how many times 'No' was clicked

// ==========================================
// --- "No" Button Logic ---
// ==========================================
function moveButton() {
  // 1. Switch position to 'absolute' so it can move anywhere
  noBtn.classList.add("running");

  // 2. Get container size to keep button within bounds
  const containerRect = container.getBoundingClientRect();
  const btnWidth = noBtn.offsetWidth;
  const btnHeight = noBtn.offsetHeight;

  // 3. Calculate maximum allowed positions
  const maxX = containerRect.width - btnWidth;
  const maxY = containerRect.height - btnHeight;

  // 4. Generate random coordinates
  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  // 5. Apply the random position
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Event: Run away on hover (desktop)
noBtn.addEventListener("mouseover", moveButton);

// Event: Show quote and run away on click (mobile/desktop)
noBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Prevents page reload

  // Display quote based on how many times clicked
  noMessage.innerText = funnyMessages[noClickCount % funnyMessages.length];
  noClickCount++;

  // Move the button immediately after clicking
  moveButton();
});

// ==========================================
// --- "Yes" Button Logic ---
// ==========================================
yesBtn.addEventListener("click", () => {
  // Switch from page 1 to page 2
  questionPage.classList.remove("active");
  celebrationPage.classList.add("active");
});
