(() => {
  // Enhanced slideshow: autoplay, pause on hover, keyboard nav
  let slideIndex = 0;
  const slides = Array.from(document.getElementsByClassName('mySlides'));
  const dots = Array.from(document.querySelectorAll('.dot'));
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let timer = null;
  const INTERVAL = 4500; // autoplay interval in ms

  if (!slides.length) return; // nothing to do

  function showSlide(index) {
    slides.forEach((s, i) => {
      s.style.display = (i === index) ? 'block' : 'none';
      s.classList.toggle('fade', i === index);
    });
    dots.forEach((d, i) => {
      d.classList.toggle('active-dot', i === index);
    });
    slideIndex = index;
  }

  function nextSlide() { showSlide((slideIndex + 1) % slides.length); }
  function prevSlide() { showSlide((slideIndex - 1 + slides.length) % slides.length); }

  // Autoplay
  function start() {
    stop();
    timer = setInterval(nextSlide, INTERVAL);
  }
  function stop() { if (timer) { clearInterval(timer); timer = null; } }

  // Event wiring
  if (nextBtn) nextBtn.addEventListener('click', () => { nextSlide(); start(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prevSlide(); start(); });

  dots.forEach(d => {
    d.addEventListener('click', (e) => {
      const idx = Number(d.dataset.slide || d.getAttribute('data-slide')) - 1;
      if (!Number.isNaN(idx)) { showSlide(idx); start(); }
    });
  });

  // Pause on hover
  const container = document.querySelector('.slideshow-container');
  if (container) {
    container.addEventListener('mouseenter', stop);
    container.addEventListener('mouseleave', start);
  }

  // Keyboard navigation
  document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowRight') { nextSlide(); start(); }
    if (e.key === 'ArrowLeft') { prevSlide(); start(); }
  });

  // Initialize
  showSlide(0);
  start();
})();