// volunteer/js/dashboard.js

document.addEventListener("DOMContentLoaded", function () {
  // Dark Mode Toggle
  const toggle = document.getElementById("theme-toggle");
  if (toggle) {
    // Load saved theme
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.body.classList.add("dark-mode");
      toggle.checked = true;
    }

    // On toggle change
    toggle.addEventListener("change", () => {
      const isDark = toggle.checked;
      document.body.classList.toggle("dark-mode", isDark);
      localStorage.setItem("theme", isDark ? "dark" : "light");

      // Update chart colors if chart exists
      if (window.myChart) {
        const color = isDark ? "#fff" : "#000";
        window.myChart.options.plugins.legend.labels.color = color;

        if (window.myChart.options.scales) {
          if (window.myChart.options.scales.x?.ticks)
            window.myChart.options.scales.x.ticks.color = color;
          if (window.myChart.options.scales.y?.ticks)
            window.myChart.options.scales.y.ticks.color = color;
        }

        if (window.myChart.options.plugins.title)
          window.myChart.options.plugins.title.color = color;

        window.myChart.update();
      }
    });
  }

  // Toast function
  window.showToast = function (message) {
    const toast = document.getElementById("toast");
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3000);
  };

  // Search/filter logic
  const searchInput = document.getElementById("taskSearch");
  const taskList = document.getElementById("taskList");

  if (searchInput && taskList) {
    searchInput.addEventListener("input", () => {
      const query = searchInput.value.toLowerCase();
      const tasks = taskList.querySelectorAll(".task-card");
      tasks.forEach((task) => {
        const text = task.textContent.toLowerCase();
        task.style.display = text.includes(query) ? "block" : "none";
      });
    });
  }

  // Sample tasks — you can replace this with dynamic backend data
  const sampleTasks = [
    {
      title: "📦 Food Distribution",
      description: "Assist in distributing food packets at Mumbai shelter, 3 PM today."
    },
    {
      title: "🩺 Health Camp",
      description: "Help with registration and first-aid support, Pune."
    },
    {
      title: "🎓 Online Tutoring",
      description: "Teach basic English to underprivileged kids."
    }
  ];

  if (taskList) {
    taskList.innerHTML = sampleTasks.map(task => `
      <div class="task-card">
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <button class="apply-btn" onclick="showToast('Applied successfully!')">Apply</button>
      </div>
    `).join("");
  }
});

