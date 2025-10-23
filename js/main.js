(function () {
  const STORAGE_KEY = "theme";
  function setTheme(theme) {
    if (!theme) return;
    document.documentElement.setAttribute("data-bs-theme", theme);
    try { localStorage.setItem(STORAGE_KEY, theme); } catch {}
  }
  (function initTheme() {
    let theme = null;
    try { theme = localStorage.getItem(STORAGE_KEY); } catch {}
    if (!theme) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      theme = prefersDark ? "dark" : "light";
    }
    setTheme(theme);
  })();
  document.addEventListener("click", (e) => {
    const el = e.target.closest("[data-bs-theme-value]");
    if (!el) return;
    setTheme(el.getAttribute("data-bs-theme-value"));
  });
})();

function factorial(n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 1; i <= n; i++) result *= i;
  return result;
}

function calculatePower() {
  const inputEl = document.getElementById("userInput");
  const outEl = document.getElementById("output");
  const raw = (inputEl?.value || "").trim();
  if (raw === "") { outEl.textContent = "Please enter a number."; return; }
  const n = Number(raw);
  if (!Number.isFinite(n) || !Number.isInteger(n)) { outEl.textContent = "Please enter a whole number (integer)."; return; }
  if (n < 0) { outEl.textContent = "Factorial is undefined for negative numbers."; return; }
  if (n > 170) { outEl.textContent = "Number too large (n must be ≤ 170)."; return; }
  outEl.textContent = `${n}! = ${factorial(n).toLocaleString()}`;
}
window.calculatePower = calculatePower;
