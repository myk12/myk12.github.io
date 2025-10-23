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

