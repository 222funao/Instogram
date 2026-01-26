(function() {
  const forceDarkMode = () => {
    document.body.classList.add("dark");
    
    // Si tienes un botón de tema y quieres que muestre el sol
    const btn = document.querySelector("#theme-toggle");
    if (btn) btn.textContent = "☀️";
  };

  // 1. Ejecutar de inmediato
  forceDarkMode();

  // 2. Ejecutar cada vez que Turbo cambie de página
  document.addEventListener("turbo:load", forceDarkMode);

  // 3. Opcional: Limpiar el localStorage para que no haya conflictos
  localStorage.setItem("theme", "dark");
})();

