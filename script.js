const bar = document.querySelector("#progress-bar");

function updateProgress() {
  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const value = scrollable > 0 ? (window.scrollY / scrollable) * 100 : 0;
  bar.style.width = `${Math.min(100, Math.max(0, value))}%`;
}

updateProgress();
window.addEventListener("scroll", updateProgress, { passive: true });
window.addEventListener("resize", updateProgress);
