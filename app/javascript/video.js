/**
 * Lógica de Autoplay con Intersection Observer
 */
const startVideoObserver = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, { threshold: 0.6 });

  document.querySelectorAll('video[data-video]').forEach(v => observer.observe(v));
};

/**
 * Delegación de Eventos: Funciona aunque el video se cargue después
 */
document.addEventListener('click', (e) => {
  // 1. Lógica para Play/Pause al hacer clic en el video
  if (e.target.matches('video[data-video]')) {
    const video = e.target;
    video.paused ? video.play() : video.pause();
  }

  // 2. Lógica para el botón de Mute
  const muteBtn = e.target.closest('.mute-btn');
  if (muteBtn) {
    const videoWrapper = muteBtn.closest('.video-wrapper');
    const video = videoWrapper ? videoWrapper.querySelector('video') : muteBtn.previousElementSibling;
    
    if (video) {
      e.stopPropagation();
      video.muted = !video.muted;
      if (video.volume === 0) video.volume = 1;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
    }
  }
});

// Inicialización para SPA/Sistemas de navegación dinámica
const init = () => {
  startVideoObserver();
  // Forzar cursor pointer en videos
  document.querySelectorAll('video[data-video]').forEach(v => v.style.cursor = 'pointer');
};

// Ejecutar en carga inicial
document.addEventListener('DOMContentLoaded', init);

// ESCUCHAR CAMBIOS DE URL (Para Next.js, Astro, Elementor Pro)
window.addEventListener('popstate', () => setTimeout(init, 500)); 

// Si usas herramientas como Barba.js o Turbo
document.addEventListener('turbo:load', init);
document.addEventListener('barba:after', init);