document.addEventListener('DOMContentLoaded', () => {
  const videoElements = document.querySelectorAll('video[data-video]');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.play().catch(() => {});
      } else {
        entry.target.pause();
      }
    });
  }, { threshold: 0.6 });

  videoElements.forEach(video => {
    observer.observe(video);

    // 1. Lógica para Mute/Unmute (Ya funcionando)
    const btn = video.closest('.video-wrapper')?.querySelector('.mute-btn') 
               || video.nextElementSibling;

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation(); // Evita que el clic active también la pausa del video
        video.muted = !video.muted;
        if (video.volume === 0) video.volume = 1;
        btn.textContent = video.muted ? '🔇' : '🔊';
      });
    }

    // 2. NUEVO: Pausar/Reproducir al hacer clic sobre el video
    video.style.cursor = 'pointer'; // Feedback visual para el usuario
    video.addEventListener('click', () => {
      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  });
});