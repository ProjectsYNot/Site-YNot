// public/ynot.js

document.addEventListener('DOMContentLoaded', () => {
    // Petit helper pour ne pas crasher si anime n'est pas chargé
    if (typeof anime === 'undefined') {
      console.warn('anime.js non chargé');
      return;
    }
  
    /* =========================
       1. Animation d’arrivée globale
       ========================= */
  
    // Hero (titre + texte + CTA)
    anime.timeline({
      easing: 'easeOutQuad',
      duration: 700
    })
      .add({
        targets: '.logo',
        scale: [0.6, 1],
        opacity: [0, 1],
        rotate: [-10, 0]
      })
      .add(
        {
          targets: 'h1',
          translateY: [20, 0],
          opacity: [0, 1]
        },
        '-=400'
      )
      .add(
        {
          targets: '.sub',
          translateY: [10, 0],
          opacity: [0, 1]
        },
        '-=450'
      )
      .add(
        {
          targets: '.cta-group .btn',
          translateY: [10, 0],
          opacity: [0, 1],
          delay: anime.stagger(80)
        },
        '-=450'
      )
      .add(
        {
          targets: '.badgebar .badge',
          translateY: [8, 0],
          opacity: [0, 1],
          delay: anime.stagger(50)
        },
        '-=350'
      );
  
    // Téléphone qui pop
    anime({
      targets: '.phone-mock',
      opacity: [0, 1],
      translateY: [30, 0],
      duration: 800,
      delay: 300,
      easing: 'easeOutQuad'
    });
  
    /* =========================
       2. Animation subtile des blobs
       ========================= */
  
    anime({
      targets: '.blob',
      translateY: [10, -10],
      duration: 6000,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    });
  
    anime({
      targets: '.blob-2',
      translateY: [-8, 8],
      translateX: [5, -5],
      duration: 7000,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    });
  
    anime({
      targets: '.blob-3',
      translateY: [0, -12],
      duration: 6500,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    });
  
    anime({
      targets: '.blob-4',
      translateY: [0, 10],
      duration: 7500,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    });
  
    anime({
      targets: '.blob-5',
      translateY: [0, -8],
      duration: 8000,
      direction: 'alternate',
      easing: 'easeInOutSine',
      loop: true
    });
  
    /* =========================
       3. Hover sur les boutons (hors téléphone)
       ========================= */
  
    // Tous les boutons .btn sauf ceux dans le téléphone
    document.querySelectorAll('.btn').forEach(btn => {
      if (btn.closest('.phone-mock')) return; // on ignore tout ce qui est dans le téléphone
  
      btn.addEventListener('mouseenter', () => {
        anime({
          targets: btn,
          scale: 1.04,
          translateY: -2,
          duration: 160,
          easing: 'easeOutQuad'
        });
      });
  
      btn.addEventListener('mouseleave', () => {
        anime({
          targets: btn,
          scale: 1,
          translateY: 0,
          duration: 160,
          easing: 'easeOutQuad'
        });
      });
    });
  
    // IMPORTANT : aucune animation sur les cards elles-mêmes
    // (Tennis / Foot / Volley + autres), donc pas de code anime() sur `.card` ici.
  
    /* =========================
       4. Animation des sections au scroll
       ========================= */
  
    const observerOptions = {
      threshold: 0.18
    };
  
    const observeAndAnimate = (selector, animationFn) => {
      const elements = document.querySelectorAll(selector);
      if (!elements.length) return;
  
      const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animationFn(entry.target);
            obs.unobserve(entry.target);
          }
        });
      }, observerOptions);
  
      elements.forEach(el => observer.observe(el));
    };
  
    // Feature cards (apparition au scroll uniquement)
    observeAndAnimate('.features .f', el => {
      anime({
        targets: el,
        opacity: [0, 1],
        translateY: [20, 0],
        duration: 500,
        easing: 'easeOutQuad'
      });
    });
  
    // Cartes du rail principal (apparition au scroll uniquement)
    observeAndAnimate('.rail .card', el => {
      anime({
        targets: el,
        opacity: [0, 1],
        translateY: [24, 0],
        duration: 500,
        easing: 'easeOutQuad'
      });
    });
  
    // Bloc newsletter
    observeAndAnimate('.cta', el => {
      anime({
        targets: el,
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        easing: 'easeOutQuad'
      });
    });
  
    /* =========================
       5. Micro-interaction sur le logo
       ========================= */
  
    const logo = document.querySelector('.logo');
    if (logo) {
      logo.addEventListener('mouseenter', () => {
        anime({
          targets: logo,
          rotate: [-5, 5],
          scale: 1.06,
          duration: 260,
          easing: 'easeOutQuad'
        });
      });
  
      logo.addEventListener('mouseleave', () => {
        anime({
          targets: logo,
          rotate: 0,
          scale: 1,
          duration: 220,
          easing: 'easeOutQuad'
        });
      });
    }
  });
  