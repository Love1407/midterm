// ========== Dark / Light Mode Toggle ==========
(function () {
  const STORAGE_KEY = "theme";

  function setTheme(theme) {
    if (!theme) return;
    document.documentElement.setAttribute("data-bs-theme", theme);
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch {}
  }

  // Load theme from storage or use system default
  (function initTheme() {
    let theme = null;
    try {
      theme = localStorage.getItem(STORAGE_KEY);
    } catch {}
    if (!theme) {
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      theme = prefersDark ? "dark" : "light";
    }
    setTheme(theme);
  })();

  // Handle click events for theme buttons
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-bs-theme-value]");
    if (!el) return;
    const value = el.getAttribute("data-bs-theme-value");
    setTheme(value);
  });
})();

// ========== Factorial Calculator ==========
function factorial(n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

function calculatePower() {
  const inputEl = document.getElementById("userInput");
  const outputEl = document.getElementById("output");
  const rawValue = inputEl.value.trim();

  if (rawValue === "") {
    outputEl.textContent = "Please enter a number.";
    return;
  }

  const n = Number(rawValue);

  if (!Number.isInteger(n) || n < 0) {
    outputEl.textContent = "Please enter a non-negative integer.";
    return;
  }

  if (n > 170) {
    outputEl.textContent = "Number too large. Use 170 or less.";
    return;
  }

  const result = factorial(n);
  outputEl.textContent = `${n}! = ${result.toLocaleString()}`;
}

// Allow pressing Enter key to calculate
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") calculatePower();
});

// Make calculatePower available to HTML onclick
window.calculatePower = calculatePower;

// Confirm the script is loaded in console
console.log("✅ main.js loaded successfully");
