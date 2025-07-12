// volunteer/js/dashboard.js
document.addEventListener("DOMContentLoaded", function () {
  const tasks = [
    {
      title: "Medical Camp Help",
      description: "Register patients at Mumbai clinic on 16 July.",
      location: "Mumbai",
      skill: "First Aid",
    },
    {
      title: "Online Tutoring",
      description: "Teach school kids for 1 hour from home.",
      location: "Delhi",
      skill: "Teaching",
    },
    {
      title: "Tech Setup Support",
      description: "Assist with laptop setups at NGO event in Pune.",
      location: "Pune",
      skill: "Tech Support",
    },
  ];

  const taskList = document.getElementById("taskList");
  const locationFilter = document.getElementById("location");
  const skillFilter = document.getElementById("skills");

  function renderTasks() {
    const locationVal = locationFilter.value;
    const skillVal = skillFilter.value;

    taskList.innerHTML = "";

    const filtered = tasks.filter(task => {
      return (locationVal === "all" || task.location === locationVal) &&
             (skillVal === "all" || task.skill === skillVal);
    });

    if (filtered.length === 0) {
      taskList.innerHTML = "<p>No matching tasks found.</p>";
      return;
    }

    filtered.forEach(task => {
      const card = document.createElement("div");
      card.className = "task-card";

      card.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description}</p>
        <p><strong>Location:</strong> ${task.location}</p>
        <p><strong>Skill:</strong> ${task.skill}</p>
        <button class="apply-btn">Apply</button>
      `;

      taskList.appendChild(card);
    });
  }

  locationFilter.addEventListener("change", renderTasks);
  skillFilter.addEventListener("change", renderTasks);

  renderTasks();
});
