const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.12 });

reveals.forEach((el) => observer.observe(el));


const mouseLight = document.querySelector('.mouse-light');

window.addEventListener('mousemove', (event) => {
  if (!mouseLight) return;
  mouseLight.style.left = `${event.clientX}px`;
  mouseLight.style.top = `${event.clientY}px`;
});

window.addEventListener('mouseleave', () => {
  if (!mouseLight) return;
  mouseLight.style.opacity = '0';
});

window.addEventListener('mouseenter', () => {
  if (!mouseLight) return;
  mouseLight.style.opacity = '.9';
});
