/* EyeCandy site. Lightweight on-scroll reveal + paw-trail accent.
   Pure DOM, no frameworks. Honors prefers-reduced-motion. */

(() => {
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Reveal sections as they enter viewport.
  const targets = document.querySelectorAll(
    '.feature, .discover, .detail, .candy, .duo, .notif, .profile, .cta'
  );

  if (reduce || !('IntersectionObserver' in window)) {
    targets.forEach((el) => el.classList.add('in'));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  );

  targets.forEach((el) => io.observe(el));

  // Smooth scroll for anchor links inside the nav. Native scroll-behavior
  // works in modern browsers, but set it explicitly on the html element so
  // older Safari respects it.
  document.documentElement.style.scrollBehavior = 'smooth';
})();
