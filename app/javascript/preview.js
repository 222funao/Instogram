document.addEventListener("turbo:load", () => {
  document.querySelectorAll("[data-carousel]").forEach(carousel => {

    const track = carousel.querySelector(".carousel-track")
    const items = carousel.querySelectorAll(".carousel-item")
    const dots = carousel.querySelectorAll(".dot")
    const nextBtn = carousel.querySelector(".next")
    const prevBtn = carousel.querySelector(".prev")

    let index = 0

    function updateCarousel() {
      track.style.transform = `translateX(-${index * 100}%)`

      dots.forEach(dot => dot.classList.remove("active"))
      if (dots[index]) dots[index].classList.add("active")
    }

    nextBtn?.addEventListener("click", () => {
      index = (index + 1) % items.length
      updateCarousel()
    })

    prevBtn?.addEventListener("click", () => {
      index = (index - 1 + items.length) % items.length
      updateCarousel()
    })

    dots.forEach(dot => {
      dot.addEventListener("click", () => {
        index = parseInt(dot.dataset.index)
        updateCarousel()
      })
    })
  })
})


