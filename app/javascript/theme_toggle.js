function initThemeToggle() {
  const btn = document.querySelector("#theme-toggle");
  if (!btn) return;

  // Estado inicial
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    btn.textContent = "☀️";
  } else {
    btn.textContent = "🌙";
  }

  btn.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark");

    // Cambiar icono
    btn.textContent = isDark ? "☀️" : "🌙";

    // Guardar preferencia
    localStorage.setItem("theme", isDark ? "dark" : "light");
  });
}

document.addEventListener("turbo:load", initThemeToggle);

document.addEventListener("turbo:load", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark");
  }
});


