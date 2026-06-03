document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("wiki-search");
  const tagButtons = document.querySelectorAll(".tag-filter");
  const notes = document.querySelectorAll("[data-note]");
  const folders = document.querySelectorAll("[data-folder]");
  let activeTag = "";

  const updateVisibility = () => {
    const query = (search?.value || "").trim().toLowerCase();

    notes.forEach(note => {
      const haystack = [
        note.dataset.title || "",
        note.dataset.tags || "",
        note.dataset.conference || ""
      ].join(" ");
      const matchesSearch = !query || haystack.includes(query);
      const matchesTag = !activeTag || (note.dataset.tags || "").split(/\s+/).includes(activeTag);
      note.hidden = !(matchesSearch && matchesTag);
    });

    folders.forEach(folder => {
      const visibleNotes = folder.querySelectorAll("[data-note]:not([hidden])");
      folder.hidden = visibleNotes.length === 0;
    });
  };

  folders.forEach(folder => {
    const button = folder.querySelector(".folder-title");
    const list = folder.querySelector(".folder-files");
    if (!button || !list) return;

    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") !== "false";
      button.setAttribute("aria-expanded", String(!expanded));
      list.hidden = expanded;
    });
  });

  tagButtons.forEach(button => {
    button.addEventListener("click", () => {
      activeTag = button.dataset.tag || "";
      tagButtons.forEach(item => item.classList.toggle("active", item === button));
      updateVisibility();
    });
  });

  search?.addEventListener("input", updateVisibility);
});
