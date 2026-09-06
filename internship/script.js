const bar = document.getElementById("progress-bar");
const menu = document.querySelector(".menu-toggle");
const nav = document.getElementById("report-nav");
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

menu?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menu.setAttribute("aria-expanded", String(open));
});

navLinks.forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menu?.setAttribute("aria-expanded", "false");
}));

addEventListener("scroll", update, { passive: true });
addEventListener("resize", update);
update();
