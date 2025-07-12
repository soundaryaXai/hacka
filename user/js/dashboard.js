// js/user.js

document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById("taskModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("taskForm");
  const taskGrid = document.getElementById("taskGrid");

  if (openBtn && closeBtn && form && taskGrid) {
    openBtn.onclick = () => (modal.style.display = "flex");
    closeBtn.onclick = () => (modal.style.display = "none");
    window.onclick = e => {
      if (e.target === modal) modal.style.display = "none";
    };

    form.onsubmit = function (e) {
      e.preventDefault();
      const title = document.getElementById("taskTitle").value;
      const desc = document.getElementById("taskDesc").value;

      const card = document.createElement("div");
      card.className = "task-card";
      card.innerHTML = `
        <div class='task-title'>${title}</div>
        <div class='task-desc'>${desc}</div>
      `;
      taskGrid.prepend(card);
      form.reset();
      modal.style.display = "none";
    };
  }
});
