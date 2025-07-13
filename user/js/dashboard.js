// js/user.js

document.addEventListener("DOMContentLoaded", () => {
  // Modal logic
  const modal = document.getElementById("taskModal");
  const openBtn = document.getElementById("openModal");
  const closeBtn = document.getElementById("closeModal");
  const form = document.getElementById("taskForm");
  const taskGrid = document.getElementById("taskGrid");

  if (modal && openBtn && closeBtn && form && taskGrid) {
    openBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
      modal.style.display = "none";
    });

    window.addEventListener("click", e => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });

    form.addEventListener("submit", e => {
      e.preventDefault();
      const title = document.getElementById("taskTitle").value.trim();
      const desc = document.getElementById("taskDesc").value.trim();

      if (title && desc) {
        const card = document.createElement("div");
        card.className = "task-card";
        card.innerHTML = `
          <h3>${title}</h3>
          <p>${desc}</p>
        `;
        taskGrid.prepend(card);
        form.reset();
        modal.style.display = "none";
        showToast("Task created successfully!");
      }
    });
  }

  // Toast notification
  window.showToast = function (message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3000);
  };

  // Dark Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    if (toggle) toggle.checked = true;
  }

  if (toggle) {
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Update chart colors if chart is present
      if (window.myChart) {
        const color = isDark ? "#fff" : "#000";

        window.myChart.options.plugins.legend.labels.color = color;

        if (window.myChart.options.scales?.x?.ticks) {
          window.myChart.options.scales.x.ticks.color = color;
        }

        if (window.myChart.options.scales?.y?.ticks) {
          window.myChart.options.scales.y.ticks.color = color;
        }

        if (window.myChart.options.plugins?.title) {
          window.myChart.options.plugins.title.color = color;
        }

        window.myChart.update();
      }
    });
  }
});




