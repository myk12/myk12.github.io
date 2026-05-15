// Hero Dynamic Text
const words = ["Network & Distributed System", "Data Center Network", "Optical Circuit Switching"];
let i = 0;
setInterval(() => {
  const el = document.getElementById("dynamic");
  if (el) el.innerText = words[i % words.length];
  i++;
}, 2000);

// Skill Bar Animation
window.addEventListener("load", () => {
  document.querySelectorAll(".skill-bar").forEach(bar => {
    const level = bar.getAttribute("data-level");
    bar.style.width = level + "%";
  });
});

// Floating sidebar toggle
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("mySidebar");
  const toggle = document.getElementById("sidebar-toggle");
  const icon = toggle?.querySelector("i");
  const mobileQuery = window.matchMedia("(max-width: 768px)");

  if (!sidebar || !toggle) return;

  const setCollapsed = (collapsed) => {
    sidebar.classList.toggle("collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));

    if (icon) {
      icon.classList.toggle("fa-bars", collapsed);
      icon.classList.toggle("fa-times", !collapsed);
    }
  };

  const syncForViewport = () => {
    setCollapsed(mobileQuery.matches);
  };

  syncForViewport();

  toggle.addEventListener("click", () => {
    setCollapsed(!sidebar.classList.contains("collapsed"));
  });

  sidebar.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      if (mobileQuery.matches) setCollapsed(true);
    });
  });

  mobileQuery.addEventListener("change", syncForViewport);
});

