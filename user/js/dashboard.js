document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById("login-form");
  const registerForm = document.getElementById("register-form");
  const title = document.getElementById("form-title");

  const toRegister = document.getElementById("toggle-to-register");
  const toLogin = document.getElementById("toggle-to-login");

  toRegister.addEventListener("click", () => {
    loginForm.classList.remove("active");
    registerForm.classList.add("active");
    title.textContent = "Register - NGO";
    toRegister.style.display = "none";
    toLogin.style.display = "block";
  });

  toLogin.addEventListener("click", () => {
    registerForm.classList.remove("active");
    loginForm.classList.add("active");
    title.textContent = "Login - NGO";
    toLogin.style.display = "none";
    toRegister.style.display = "block";
  });
});
