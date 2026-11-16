/**
 * vector-interactions.js
 * Micro-interactions vectorielles et physique de ressorts (Spring Physics)
 * Inspiré des créations Rive et de l'ingénierie d'animation de KavinduW1 & Emil Kowalski.
 */

class MunicipalVectorInteractions {
  constructor() {
    this.initInteractiveShield();
    this.initMagneticButtons();
    this.initStatsCounters();
    this.initParallaxCards();
    this.initSquishyToggles();
  }

  /**
   * 1. Armoiries & Blason 3D Interactif avec reflets spéculaires et parallax multi-couches
   * Inspiré des animations vectorielles Rive et des shaders 2.5D.
   */
  initInteractiveShield() {
    const shieldContainer = document.getElementById('interactive-shield-container');
    const shield = document.getElementById('municipal-shield');
    const sheen = document.getElementById('shield-sheen');

    if (!shieldContainer || !shield) return;

    let bounds;

    const onMouseEnter = () => {
      bounds = shieldContainer.getBoundingClientRect();
      shield.style.transition = 'transform 100ms ease-out, box-shadow 150ms ease-out';
    };

    const onMouseMove = (e) => {
      if (!bounds) bounds = shieldContainer.getBoundingClientRect();
      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width) - 0.5;
      const yPct = (mouseY / bounds.height) - 0.5;

      const maxRotate = 16; // degrés max
      const rotateX = -yPct * maxRotate;
      const rotateY = xPct * maxRotate;

      // Transformation 3D fluide
      shield.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.04, 1.04, 1.04)`;

      // Reflet spéculaire dynamique
      if (sheen) {
        const sheenX = (mouseX / bounds.width) * 100;
        const sheenY = (mouseY / bounds.height) * 100;
        sheen.style.background = `radial-gradient(circle at ${sheenX}% ${sheenY}%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0) 65%)`;
        sheen.style.opacity = '1';
      }

      // Parallaxe interne sur les couches SVG
      const layerEmblem = shield.querySelector('.shield-layer-emblem');
      const layerBanner = shield.querySelector('.shield-layer-banner');
      if (layerEmblem) {
        layerEmblem.style.transform = `translate3d(${xPct * 12}px, ${yPct * 12}px, 20px)`;
      }
      if (layerBanner) {
        layerBanner.style.transform = `translate3d(${xPct * 6}px, ${yPct * 6}px, 35px)`;
      }
    };

    const onMouseLeave = () => {
      shield.style.transition = 'transform 500ms cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 500ms ease';
      shield.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      if (sheen) {
        sheen.style.opacity = '0';
      }
      const layerEmblem = shield.querySelector('.shield-layer-emblem');
      const layerBanner = shield.querySelector('.shield-layer-banner');
      if (layerEmblem) layerEmblem.style.transform = 'translate3d(0, 0, 0)';
      if (layerBanner) layerBanner.style.transform = 'translate3d(0, 0, 0)';
    };

    shieldContainer.addEventListener('mouseenter', onMouseEnter);
    shieldContainer.addEventListener('mousemove', onMouseMove);
    shieldContainer.addEventListener('mouseleave', onMouseLeave);
  }

  /**
   * 2. Boutons magnétiques avec déformation élastique (Squishy Buttons)
   */
  initMagneticButtons() {
    const magneticBtns = document.querySelectorAll('.btn-magnetic');

    magneticBtns.forEach(btn => {
      let b;

      btn.addEventListener('mousemove', (e) => {
        b = b || btn.getBoundingClientRect();
        const x = e.clientX - b.left - b.width / 2;
        const y = e.clientY - b.top - b.height / 2;
        btn.style.transform = `translate3d(${x * 0.22}px, ${y * 0.22}px, 0)`;
      });

      btn.addEventListener('mouseleave', () => {
        btn.style.transform = 'translate3d(0, 0, 0)';
        b = null;
      });

      btn.addEventListener('mousedown', () => {
        btn.style.transform = 'scale(0.96)';
      });

      btn.addEventListener('mouseup', () => {
        btn.style.transform = 'scale(1.02)';
        setTimeout(() => {
          btn.style.transform = 'translate3d(0, 0, 0)';
        }, 140);
      });
    });
  }

  /**
   * 3. Compteurs de statistiques territoriales avec interpolation fluide (Spring Easing)
   */
  initStatsCounters() {
    const counters = document.querySelectorAll('[data-counter-target]');
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const targetStr = el.getAttribute('data-counter-target');
          const targetNum = parseFloat(targetStr.replace(/[^0-9.]/g, ''));
          const suffix = el.getAttribute('data-counter-suffix') || '';
          const prefix = el.getAttribute('data-counter-prefix') || '';
          const isDecimal = targetStr.includes('.');

          let startTimestamp = null;
          const duration = 1600; // ms

          const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            // Ease out quart: 1 - pow(1 - t, 4)
            const easeProgress = 1 - Math.pow(1 - progress, 4);
            const currentVal = (easeProgress * targetNum);

            el.textContent = prefix + (isDecimal ? currentVal.toFixed(1) : Math.floor(currentVal).toLocaleString('fr-FR')) + suffix;

            if (progress < 1) {
              window.requestAnimationFrame(step);
            } else {
              el.textContent = prefix + targetStr + suffix;
            }
          };

          window.requestAnimationFrame(step);
          obs.unobserve(el);
        }
      });
    }, { threshold: 0.3 });

    counters.forEach(c => observer.observe(c));
  }

  /**
   * 4. Cartes Bento avec illumination de bordure et curseur suiveur (Spotlight Effect)
   */
  initParallaxCards() {
    const cards = document.querySelectorAll('.card-spotlight');

    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
      });
    });
  }

  /**
   * 5. Micro-interactions de formulaire et célébration (Confetti Trigger)
   */
  triggerCelebration(originX, originY) {
    const count = 30;
    const container = document.body;

    for (let i = 0; i < count; i++) {
      const particle = document.createElement('div');
      particle.className = 'vector-particle';
      
      const colors = ['#059669', '#F59E0B', '#DC2626', '#3B82F6', '#10B981'];
      const color = colors[Math.floor(Math.random() * colors.length)];
      
      const angle = Math.random() * Math.PI * 2;
      const velocity = 40 + Math.random() * 90;
      const xDist = Math.cos(angle) * velocity;
      const yDist = Math.sin(angle) * velocity - 20;

      particle.style.cssText = `
        position: fixed;
        left: ${originX || window.innerWidth / 2}px;
        top: ${originY || window.innerHeight / 2}px;
        width: ${6 + Math.random() * 6}px;
        height: ${6 + Math.random() * 6}px;
        background: ${color};
        border-radius: ${Math.random() > 0.5 ? '50%' : '2px'};
        pointer-events: none;
        z-index: 99999;
        transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1), opacity 700ms ease;
        transform: translate(0, 0) scale(1);
      `;

      container.appendChild(particle);

      requestAnimationFrame(() => {
        particle.style.transform = `translate(${xDist}px, ${yDist}px) scale(0)`;
        particle.style.opacity = '0';
      });

      setTimeout(() => particle.remove(), 750);
    }
  }

  initSquishyToggles() {
    const toggles = document.querySelectorAll('.squishy-toggle');
    toggles.forEach(toggle => {
      toggle.addEventListener('click', () => {
        toggle.classList.add('squish-animate');
        setTimeout(() => toggle.classList.remove('squish-animate'), 260);
      });
    });
  }
}

// Initialisation globale
window.MunicipalVectorInteractions = MunicipalVectorInteractions;
