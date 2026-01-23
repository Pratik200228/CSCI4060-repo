// Elements
const yearEl = document.getElementById("year");
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const themeBtn = document.getElementById("themeBtn");

const newsletterForm = document.getElementById("newsletterForm");
const formMsg = document.getElementById("formMsg");

const contactForm = document.getElementById("contactForm");
const contactMsg = document.getElementById("contactMsg");

const demoBtn = document.getElementById("demoBtn");

// Footer year
yearEl.textContent = new Date().getFullYear();

// Mobile menu toggle
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Close menu when clicking a link (mobile)
navLinks.querySelectorAll("a").forEach(a => {
  a.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Theme toggle (saved in localStorage)
function setTheme(mode) {
  document.body.classList.toggle("light", mode === "light");
  localStorage.setItem("theme", mode);
  themeBtn.textContent = mode === "light" ? "☀️" : "🌙";
}

const savedTheme = localStorage.getItem("theme") || "dark";
setTheme(savedTheme);

themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light");
  setTheme(isLight ? "dark" : "light");
});

// Fake newsletter submit
newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!email) return;

  formMsg.textContent = "✅ Thanks! You’re subscribed.";
  newsletterForm.reset();

  setTimeout(() => {
    formMsg.textContent = "";
  }, 2500);
});

// Fake contact submit
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !message) return;

  contactMsg.textContent = "✅ Message sent! We’ll reply soon.";
  contactForm.reset();

  setTimeout(() => {
    contactMsg.textContent = "";
  }, 2500);
});

// Demo button
demoBtn.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Demo: This button would open a demo page or modal in a real app.");
});
