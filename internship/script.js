const bar = document.getElementById("progress-bar");
const navLinks = [...document.querySelectorAll('nav a[href^="#"]')];
const sections = navLinks.map(link => document.querySelector(link.getAttribute("href"))).filter(Boolean);

function update() {
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const ratio = height > 0 ? window.scrollY / height : 0;
  if (bar) bar.style.width = Math.min(100, Math.max(0, ratio * 100)) + "%";

  let active = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 130) active = section;
  }
  navLinks.forEach(link => link.classList.toggle("active", active && link.getAttribute("href") === "#" + active.id));
}
addEventListener("scroll", update, { passive: true });
addEventListener("resize", update);
update();
