const REDUCE = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const EASE_OUT = 'cubic-bezier(.16,.84,.32,1)';
const EASE_IN  = 'cubic-bezier(.6,0,.2,1)';

// Modifié avec un threshold à 0 et rootMargin positif pour charger les éléments en avance
const revealIO = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateReveal(entry.target);
      revealIO.unobserve(entry.target);
    }
  });
}, { threshold: 0, rootMargin: '0px 0px 200px 0px' });

function animateReveal(el) {
  if (!el) return;
  const idx = +el.dataset.idx || 0;
  if (REDUCE) { el.classList.add('in'); return; }
  
  // VITESSE RALENTIE : Animation fluide sur 1.4s et décalage de 200ms
  el.animate(
    [
      { opacity: 0, clipPath: 'inset(0 100% 0 0)', transform: 'translateY(10px)' },
      { opacity: 1, clipPath: 'inset(0 0% 0 0)', transform: 'translateY(0)' }
    ],
    { duration: 1400, delay: idx * 200, easing: EASE_OUT, fill: 'forwards' }
  );
  el.classList.add('in');
}

window.observeReveals = function () {
  const els = document.querySelectorAll('.reveal:not(.in)');
  els.forEach((el, i) => {
    if (!el.dataset.idx) el.dataset.idx = i;
    
    // SÉCURITÉ ACCUEIL : On force l'affichage immédiat du haut de page
    if (+el.dataset.idx <= 5) {
      animateReveal(el);
    } else if (revealIO) {
      revealIO.observe(el);
    }
  });
};

// INITIALISATION DU CHARGEMENT SÉCURISÉ
window.addEventListener('load', () => {
  
  // 1. GESTION DU RIDEAU (TRANSITION) - MÉTHODE RADICALE ÉVITANT L'ÉCRAN NOIR
  const transition = document.getElementById('page-transition');
  if (transition) {
    if (REDUCE) {
      transition.style.display = 'none';
    } else {
      // On lance l'animation visuelle
      transition.animate(
        [{ transform: 'scaleY(1)' }, { transform: 'scaleY(0)' }],
        { duration: 500, easing: EASE_IN, fill: 'forwards' }
      );
      // SÉCURITÉ ABSOLUE : Quoi qu'il arrive, on fait disparaître le bloc après 500ms
      setTimeout(() => {
        transition.style.display = 'none';
      }, 500);
    }
  }

  // 2. Ligne de scan cyberpunk
  const scan = document.getElementById('scan-line');
  if (scan && !REDUCE) {
    scan.animate(
      [{ top: '-160px' }, { top: '100vh' }],
      { duration: 2500, easing: 'linear', iterations: Infinity }
    );
  }

  // 3. Menu Mobile Toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    let busy = false;
    toggle.addEventListener('click', () => {
      if (busy) return;
      busy = true;
      const isOpen = links.classList.contains('open');
      if (!isOpen) {
        links.classList.add('open');
        const h = links.scrollHeight;
        if (REDUCE) { links.style.height = h + 'px'; busy = false; return; }
        const anim = links.animate([{ height: '0px' }, { height: h + 'px' }], { duration: 320, easing: EASE_OUT });
        anim.onfinish = () => { links.style.height = h + 'px'; busy = false; };
      } else {
        const h = links.scrollHeight;
        if (REDUCE) { links.classList.remove('open'); links.style.height = '0px'; busy = false; return; }
        const anim = links.animate([{ height: h + 'px' }, { height: '0px' }], { duration: 260, easing: EASE_IN });
        anim.onfinish = () => { links.classList.remove('open'); links.style.height = '0px'; busy = false; };
      }
    });
  }

  // 4. Barre de navigation effet scroll
  const nav = document.querySelector('.topnav');
  if (nav) {
    const onScroll = () => { nav.classList.toggle('scrolled', window.scrollY > 30); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  // 5. Lancement de la construction des cartes ou observation
  if (typeof window.buildHomeCards === 'function') {
    window.buildHomeCards();
  } else {
    window.observeReveals();
  }
});