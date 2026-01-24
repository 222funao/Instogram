document.addEventListener("turbo:load", () => {
  document.querySelectorAll(".toggle-comments-btn").forEach(button => {
    button.addEventListener("click", () => {
      const box = button.nextElementSibling

      box.classList.toggle("hidden")

      button.textContent = box.classList.contains("hidden")
        ? "Ver comentarios"
        : "Ocultar comentarios"
    })
  })
})

