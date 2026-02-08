/* ======================================================
   DOM ELEMENTS
   Getting references to HTML elements from the page
   ====================================================== */

/* Buttons */
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

/* Text area where quotes/messages appear */
const quote = document.getElementById("quote");

/* Pages (for switching screens) */
const questionPage = document.getElementById("question-page");
const celebrationPage = document.getElementById("celebration-page");

/* ======================================================
   💡 CUSTOMIZE HERE → Funny / Cute Messages
   Shown every time "No" is clicked
   Add/remove/edit lines freely
   ====================================================== */
const quotes = [
  "Are you sureee? 🥺",
  "Think again… I'm cute tho 😌",
  "Don’t break my heart 😭",
  "Okay but the Yes button looks nicer 👀",
  "Last chance… say yes maybe? 💘",
];

/* ======================================================
   VARIABLES / STATE
   ====================================================== */

/* Tracks how big the Yes button becomes */
let yesSize = 1;

/* ======================================================
   "NO" BUTTON LOGIC
   ======================================================
   What happens when user clicks NO:
   1. Show random cute message
   2. Increase Yes button size (pressure tactic 😂)
   ====================================================== */
noBtn.addEventListener("click", () => {
  /* Pick random message */
  const random = quotes[Math.floor(Math.random() * quotes.length)];

  /* Show message on screen */
  quote.textContent = random;

  /* 💡 CUSTOMIZE HERE: Change growth speed (0.25 → faster/slower) */
  yesSize += 0.25;

  /* Make Yes button bigger */
  yesBtn.style.transform = `scale(${yesSize})`;
});

/* ======================================================
   "YES" BUTTON LOGIC
   ======================================================
   Switch from question page → celebration page
   ====================================================== */
yesBtn.addEventListener("click", () => {
  /* Hide first page */
  questionPage.classList.remove("active");

  /* Show celebration page */
  celebrationPage.classList.add("active");
});
