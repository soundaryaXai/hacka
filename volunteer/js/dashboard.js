// js/volunteer.js

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll(".task-action button");

  buttons.forEach(button => {
    button.addEventListener("click", () => {
      button.innerText = "Accepted ✅";
      button.style.backgroundColor = "#ccc";
      button.disabled = true;
    });
  });
});
