/**
 * app.js
 * Logique principale du portail réutilisable des Communes du Bénin 🇧🇯
 * Gère le changement dynamique de commune, la palette ⌘K, les démarches,
 * le signalement citoyen et le mode clair/sombre.
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialisation de l'état
  const state = {
    currentCommuneId: 'cotonou',
    currentTheme: localStorage.getItem('commune_theme_mode') || 'light',
    activeTab: 'all',
    activeIncidentType: 'voirie'
  };

  // Instanciation du moteur d'interactions vectorielles
  const vectorEngine = new window.MunicipalVectorInteractions();

  // 2. Gestion du mode Sombre / Clair
  const applyThemeMode = (mode) => {
    document.documentElement.setAttribute('data-theme', mode);
    localStorage.setItem('commune_theme_mode', mode);
    state.currentTheme = mode;

    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    if (themeToggleBtn) {
      themeToggleBtn.innerHTML = mode === 'dark' 
        ? `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>`
        : `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>`;
    }
  };

  applyThemeMode(state.currentTheme);

  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      applyThemeMode(state.currentTheme === 'dark' ? 'light' : 'dark');
    });
  }

  // 3. Basculement de Commune (Commune Switcher Multi-Tenant)
  const switchCommune = (communeId) => {
    const profile = COMMUNES_DATABASE.profiles[communeId];
    if (!profile) return;

    state.currentCommuneId = communeId;

    // Mise à jour des variables CSS thématiques
    const root = document.documentElement;
    root.style.setProperty('--primary-theme', profile.themeColor);
    root.style.setProperty('--primary-accent', profile.accentColor);
    root.style.setProperty('--bg-gradient', profile.bgGradient);
    root.style.setProperty('--badge-bg', profile.badgeColor);

    // Mise à jour des éléments textuels
    document.querySelectorAll('[data-bind="commune-name"]').forEach(el => el.textContent = profile.name);
    document.querySelectorAll('[data-bind="commune-status"]').forEach(el => el.textContent = profile.status);
    document.querySelectorAll('[data-bind="commune-status-badge"]').forEach(el => el.textContent = profile.statusBadge);
    document.querySelectorAll('[data-bind="commune-department"]').forEach(el => el.textContent = profile.department);
    document.querySelectorAll('[data-bind="commune-slogan"]').forEach(el => el.textContent = profile.slogan);
    document.querySelectorAll('[data-bind="commune-description"]').forEach(el => el.textContent = profile.description);
    document.querySelectorAll('[data-bind="commune-mayor"]').forEach(el => el.textContent = profile.mayor);
    document.querySelectorAll('[data-bind="commune-mayor-title"]').forEach(el => el.textContent = profile.mayorTitle);
    document.querySelectorAll('[data-bind="commune-se"]').forEach(el => el.textContent = profile.se);
    document.querySelectorAll('[data-bind="commune-se-title"]').forEach(el => el.textContent = profile.seTitle);
    document.querySelectorAll('[data-bind="commune-budget"]').forEach(el => el.textContent = profile.budget);
    document.querySelectorAll('[data-bind="commune-phone"]').forEach(el => el.textContent = profile.contact.phone);
    document.querySelectorAll('[data-bind="commune-email"]').forEach(el => el.textContent = profile.contact.email);
    document.querySelectorAll('[data-bind="commune-address"]').forEach(el => el.textContent = profile.contact.address);

    // Mise à jour des statistiques
    const statPop = document.getElementById('stat-pop');
    if (statPop) {
      statPop.setAttribute('data-counter-target', profile.population);
      statPop.textContent = profile.population;
    }
    const statSup = document.getElementById('stat-sup');
    if (statSup) {
      statSup.setAttribute('data-counter-target', profile.superficie);
      statSup.textContent = profile.superficie;
    }
    const statArr = document.getElementById('stat-arr');
    if (statArr) {
      statArr.setAttribute('data-counter-target', profile.arrondissementsCount.toString());
      statArr.textContent = profile.arrondissementsCount.toString();
    }
    const statSat = document.getElementById('stat-sat');
    if (statSat) {
      statSat.setAttribute('data-counter-target', profile.satisfactionRate);
      statSat.textContent = profile.satisfactionRate;
    }

    // Mise à jour du Blason & Armoiries SVG
    renderMunicipalShield(profile);

    // Mise à jour de la grille Bento Tourisme & Patrimoine
    renderBentoHighlights(profile);

    // Mise à jour des circuits
    renderCircuits(profile);

    // Marquer les boutons actifs dans le sélecteur
    document.querySelectorAll('.commune-card-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-commune') === communeId);
    });

    // Notification Toast
    showToast(`Commune activée : ${profile.name} (${profile.statusBadge})`);
  };

  // 4. Rendu des Armoiries et Blason Vectoriel (SVG Dynamique)
  const renderMunicipalShield = (profile) => {
    const shieldContainer = document.getElementById('municipal-shield-svg-wrapper');
    if (!shieldContainer) return;

    // Détermine l'icône centrale selon la commune
    let centralIcon = '';
    if (profile.id === 'cotonou') {
      // Étoile & Flots marins / Port
      centralIcon = `
        <path d="M50 18 L55 35 L73 35 L58 46 L64 63 L50 52 L36 63 L42 46 L27 35 L45 35 Z" fill="#F59E0B" class="shield-layer-emblem"/>
        <path d="M25 72 Q50 64 75 72 Q50 80 25 72" fill="none" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
      `;
    } else if (profile.id === 'porto-novo') {
      // Masque Zangbéto & Lagune
      centralIcon = `
        <path d="M50 20 L30 65 L70 65 Z" fill="#F59E0B" class="shield-layer-emblem"/>
        <line x1="32" y1="50" x2="68" y2="50" stroke="#FFFFFF" stroke-width="2"/>
        <circle cx="50" cy="40" r="5" fill="#FFFFFF"/>
      `;
    } else if (profile.id === 'ouidah') {
      // Porte du Non-Retour & Dan (Python royal)
      centralIcon = `
        <rect x="30" y="25" width="40" height="40" rx="4" fill="none" stroke="#F59E0B" stroke-width="4"/>
        <path d="M38 65 Q50 45 62 65" fill="none" stroke="#FFFFFF" stroke-width="3"/>
        <circle cx="50" cy="35" r="4" fill="#F59E0B"/>
      `;
    } else if (profile.id === 'abomey') {
      // Jarre percée du Roi Ghézo & Bas-relief
      centralIcon = `
        <path d="M35 30 Q50 20 65 30 L62 60 Q50 68 38 60 Z" fill="#F59E0B" class="shield-layer-emblem"/>
        <circle cx="50" cy="45" r="3" fill="#78350F"/>
        <circle cx="45" cy="52" r="2.5" fill="#78350F"/>
        <circle cx="55" cy="52" r="2.5" fill="#78350F"/>
      `;
    } else if (profile.id === 'nikki') {
      // Cavalier & Trompes Royales Gaani
      centralIcon = `
        <path d="M40 25 L60 25 L55 60 L45 60 Z" fill="#F59E0B" class="shield-layer-emblem"/>
        <path d="M30 40 L70 30" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
        <circle cx="50" cy="20" r="6" fill="#FFFFFF"/>
      `;
    } else {
      // Tata Somba / Montagnes Atacora (Natitingou)
      centralIcon = `
        <path d="M25 65 L40 30 L55 65 Z" fill="#F59E0B" class="shield-layer-emblem"/>
        <path d="M50 65 L65 35 L80 65 Z" fill="#FFFFFF" opacity="0.8"/>
      `;
    }

    shieldContainer.innerHTML = `
      <svg viewBox="0 0 100 115" width="100%" height="100%" class="shield-svg" style="filter: drop-shadow(0 8px 16px rgba(0,0,0,0.3));">
        <defs>
          <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="${profile.themeColor}"/>
            <stop offset="100%" stop-color="${profile.badgeColor}"/>
          </linearGradient>
        </defs>
        <!-- Contour de l'écu -->
        <path d="M10 10 L90 10 Q90 65 50 105 Q10 65 10 10 Z" fill="url(#shieldGrad)" stroke="rgba(255,255,255,0.4)" stroke-width="2.5"/>
        <path d="M16 16 L84 16 Q84 62 50 98 Q16 62 16 16 Z" fill="none" stroke="rgba(255,255,255,0.18)" stroke-width="1.5"/>
        <!-- Emblème central -->
        ${centralIcon}
        <!-- Ruban inférieur -->
        <g class="shield-layer-banner">
          <path d="M20 96 Q50 90 80 96 L75 105 Q50 99 25 105 Z" fill="#F59E0B"/>
        </g>
      </svg>
    `;
  };

  // 5. Rendu des Trésors et du Patrimoine (Bento Grid)
  const renderBentoHighlights = (profile) => {
    const bentoContainer = document.getElementById('bento-highlights-container');
    if (!bentoContainer || !profile.highlights) return;

    bentoContainer.innerHTML = profile.highlights.map((item, idx) => {
      const isLarge = idx === 0;
      return `
        <div class="bento-card card-spotlight ${isLarge ? 'bento-card-lg' : ''}">
          <div class="bento-bg" style="background-image: url('${item.image}')"></div>
          <div class="bento-overlay"></div>
          <div class="bento-content">
            <span class="bento-tag">${item.badge}</span>
            <h3 class="bento-title">${item.title}</h3>
            <p class="bento-desc">${item.desc}</p>
            <div style="font-size: 0.8rem; color: rgba(255,255,255,0.7); display: flex; align-items: center; gap: 0.35rem; margin-top: 0.25rem;">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              ${item.location}
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Réinitialiser les effets spotlight sur les nouvelles cartes
    vectorEngine.initParallaxCards();
  };

  // 6. Rendu des Circuits Touristiques
  const renderCircuits = (profile) => {
    const circuitsContainer = document.getElementById('circuits-container');
    if (!circuitsContainer || !profile.circuits) return;

    circuitsContainer.innerHTML = profile.circuits.map(c => `
      <div style="background: var(--bg-surface); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; gap: 0.75rem;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${c.name}</h4>
          <span style="font-size: 0.75rem; font-weight: 600; padding: 0.2rem 0.6rem; border-radius: var(--radius-full); background: var(--primary-subtle); color: var(--primary-theme);">${c.duration} • ${c.distance}</span>
        </div>
        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.25rem;">
          ${c.steps.map((st, i) => `
            <span style="font-size: 0.8rem; background: var(--bg-surface-muted); padding: 0.25rem 0.6rem; border-radius: var(--radius-sm); color: var(--text-muted); display: inline-flex; align-items: center; gap: 0.3rem;">
              <strong style="color: var(--primary-theme);">${i + 1}.</strong> ${st}
            </span>
          `).join('')}
        </div>
      </div>
    `).join('');
  };

  // 7. Rendu des Démarches Administratives avec Filtre
  const renderProcedures = (category = 'all') => {
    const proceduresGrid = document.getElementById('procedures-grid');
    if (!proceduresGrid) return;

    const filtered = category === 'all' 
      ? COMMUNES_DATABASE.procedures 
      : COMMUNES_DATABASE.procedures.filter(p => p.category === category);

    proceduresGrid.innerHTML = filtered.map(proc => `
      <div class="procedure-card card-spotlight">
        <div class="procedure-header">
          <span class="procedure-badge">${proc.badge}</span>
          <span style="font-size: 0.75rem; color: var(--text-muted);">${proc.categoryName}</span>
        </div>

        <div>
          <h3 class="procedure-title">${proc.title}</h3>
          <p style="font-size: 0.9rem; color: var(--text-muted); margin-top: 0.5rem;">${proc.description}</p>
        </div>

        <div class="procedure-meta">
          <div class="procedure-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            <span>${proc.delay}</span>
          </div>
          <div class="procedure-meta-item">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>${proc.cost}</span>
          </div>
        </div>

        <div class="procedure-requirements">
          <strong>Prérequis & Pièces à fournir :</strong>
          <ul>
            ${proc.requirements.map(req => `<li>${req}</li>`).join('')}
          </ul>
        </div>

        <div style="display: flex; gap: 0.75rem; margin-top: 0.5rem;">
          <a href="${proc.linkUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-magnetic" style="flex: 1; text-align: center;">
            Initier en ligne
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          </a>
          <button class="btn btn-secondary btn-icon procedure-info-btn" data-proc-id="${proc.id}" title="Détails du dossier">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </button>
        </div>
      </div>
    `).join('');

    vectorEngine.initParallaxCards();
    vectorEngine.initMagneticButtons();
  };

  // Onglets Démarches
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabIndicator = document.getElementById('tab-slider-indicator');

  const updateTabIndicator = (activeBtn) => {
    if (!tabIndicator || !activeBtn) return;
    const parentRect = activeBtn.parentElement.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    tabIndicator.style.left = `${btnRect.left - parentRect.left}px`;
    tabIndicator.style.width = `${btnRect.width}px`;
  };

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeTab = btn.getAttribute('data-tab');
      updateTabIndicator(btn);
      renderProcedures(state.activeTab);
    });
  });

  // Positionner l'indicateur sur l'onglet actif initial
  const activeTabInitial = document.querySelector('.tab-btn.active');
  if (activeTabInitial) {
    setTimeout(() => updateTabIndicator(activeTabInitial), 100);
  }

  // 8. Module Signalement Citoyen "Allô Mairie"
  const incidentTypeButtons = document.querySelectorAll('.report-type-btn');
  incidentTypeButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      incidentTypeButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.activeIncidentType = btn.getAttribute('data-incident');
    });
  });

  const incidentForm = document.getElementById('incident-report-form');
  if (incidentForm) {
    incidentForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const locationInput = document.getElementById('incident-location').value;
      const descInput = document.getElementById('incident-desc').value;

      if (!locationInput) {
        showToast('Veuillez préciser le quartier ou le lieu.');
        return;
      }

      // Génération de ticket citoyen
      const prefix = state.currentCommuneId.toUpperCase().slice(0, 3);
      const ticketNum = `#${prefix}-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

      // Célébration vectorielle
      const submitBtn = incidentForm.querySelector('button[type="submit"]');
      const rect = submitBtn.getBoundingClientRect();
      vectorEngine.triggerCelebration(rect.left + rect.width / 2, rect.top);

      showToast(`Signalement enregistré ! Réf : ${ticketNum}. La DST municipale a été notifiée.`);
      incidentForm.reset();
    });
  }

  // 9. Command Palette (Recherche Globale ⌘K / Ctrl+K)
  const commandPaletteBackdrop = document.getElementById('command-palette-backdrop');
  const commandPaletteInput = document.getElementById('command-palette-input');
  const commandPaletteResults = document.getElementById('command-palette-results');

  const openCommandPalette = () => {
    if (!commandPaletteBackdrop) return;
    commandPaletteBackdrop.style.display = 'flex';
    commandPaletteInput.value = '';
    renderCommandResults('');
    commandPaletteInput.focus();
  };

  const closeCommandPalette = () => {
    if (!commandPaletteBackdrop) return;
    commandPaletteBackdrop.style.display = 'none';
  };

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      if (commandPaletteBackdrop.style.display === 'flex') {
        closeCommandPalette();
      } else {
        openCommandPalette();
      }
    } else if (e.key === 'Escape') {
      closeCommandPalette();
      closeCustomizer();
    }
  });

  if (commandPaletteBackdrop) {
    commandPaletteBackdrop.addEventListener('click', (e) => {
      if (e.target === commandPaletteBackdrop) closeCommandPalette();
    });
  }

  const searchTriggerBtns = document.querySelectorAll('.search-trigger-btn');
  searchTriggerBtns.forEach(b => b.addEventListener('click', openCommandPalette));

  const renderCommandResults = (query) => {
    if (!commandPaletteResults) return;
    const q = query.toLowerCase().trim();

    // Recherche dans les démarches
    const procMatches = COMMUNES_DATABASE.procedures.filter(p => 
      p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.categoryName.toLowerCase().includes(q)
    );

    // Recherche dans les communes
    const communeMatches = Object.values(COMMUNES_DATABASE.profiles).filter(c =>
      c.name.toLowerCase().includes(q) || c.department.toLowerCase().includes(q) || c.statusBadge.toLowerCase().includes(q)
    );

    let html = '';

    if (communeMatches.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 0.5rem 1rem; text-transform: uppercase;">Communes du Bénin</div>`;
      html += communeMatches.map(c => `
        <div class="command-item" data-action="switch-commune" data-id="${c.id}">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="display: inline-block; width: 10px; height: 10px; border-radius: 50%; background: ${c.themeColor};"></span>
            <div>
              <strong>${c.name}</strong>
              <div style="font-size: 0.75rem; color: var(--text-muted);">${c.department} • ${c.statusBadge}</div>
            </div>
          </div>
          <span style="font-size: 0.75rem; color: var(--primary-theme); font-weight: 600;">Sélectionner</span>
        </div>
      `).join('');
    }

    if (procMatches.length > 0) {
      html += `<div style="font-size: 0.75rem; font-weight: 700; color: var(--text-muted); padding: 0.5rem 1rem; text-transform: uppercase; margin-top: 0.5rem;">Démarches Citoyennes</div>`;
      html += procMatches.map(p => `
        <div class="command-item" data-action="goto-proc" data-url="${p.linkUrl}">
          <div>
            <strong>${p.title}</strong>
            <div style="font-size: 0.75rem; color: var(--text-muted);">${p.delay} • ${p.cost}</div>
          </div>
          <span style="font-size: 0.75rem; background: var(--bg-surface-muted); padding: 0.2rem 0.5rem; border-radius: var(--radius-sm);">En ligne</span>
        </div>
      `).join('');
    }

    if (!html) {
      html = `<div style="padding: 2rem; text-align: center; color: var(--text-muted); font-size: 0.9rem;">Aucun résultat pour "${query}". Essayez "Passeport", "Cotonou", "Permis", "Ouidah".</div>`;
    }

    commandPaletteResults.innerHTML = html;

    // Attacher les écouteurs de clics
    commandPaletteResults.querySelectorAll('.command-item').forEach(item => {
      item.addEventListener('click', () => {
        const action = item.getAttribute('data-action');
        if (action === 'switch-commune') {
          switchCommune(item.getAttribute('data-id'));
          closeCommandPalette();
        } else if (action === 'goto-proc') {
          window.open(item.getAttribute('data-url'), '_blank');
          closeCommandPalette();
        }
      });
    });
  };

  if (commandPaletteInput) {
    commandPaletteInput.addEventListener('input', (e) => {
      renderCommandResults(e.target.value);
    });
  }

  // 10. Drawer Customizer de Thème
  const customizerDrawer = document.getElementById('customizer-drawer');
  const customizerToggleBtn = document.getElementById('customizer-toggle-btn');
  const customizerCloseBtn = document.getElementById('customizer-close-btn');

  const openCustomizer = () => {
    if (customizerDrawer) customizerDrawer.style.display = 'flex';
  };
  const closeCustomizer = () => {
    if (customizerDrawer) customizerDrawer.style.display = 'none';
  };

  if (customizerToggleBtn) customizerToggleBtn.addEventListener('click', openCustomizer);
  if (customizerCloseBtn) customizerCloseBtn.addEventListener('click', closeCustomizer);

  // Remplissage des boutons de sélection de communes dans le tiroir
  const communeSelectGrid = document.getElementById('customizer-commune-grid');
  if (communeSelectGrid) {
    communeSelectGrid.innerHTML = Object.values(COMMUNES_DATABASE.profiles).map(c => `
      <button class="commune-card-btn ${c.id === state.currentCommuneId ? 'active' : ''}" data-commune="${c.id}">
        <div style="font-weight: 700;">${c.name}</div>
        <div style="font-size: 0.7rem; color: var(--text-muted);">${c.department}</div>
      </button>
    `).join('');

    communeSelectGrid.querySelectorAll('.commune-card-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        switchCommune(btn.getAttribute('data-commune'));
      });
    });
  }

  // 11. Système de Toast Notifications
  function showToast(message) {
    let toast = document.getElementById('system-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'system-toast';
      toast.style.cssText = `
        position: fixed;
        bottom: 24px;
        left: 24px;
        background: #0F172A;
        color: #FFFFFF;
        padding: 0.75rem 1.25rem;
        border-radius: var(--radius-md);
        box-shadow: 0 10px 25px rgba(0,0,0,0.3);
        border: 1px solid rgba(255,255,255,0.15);
        font-size: 0.85rem;
        font-weight: 600;
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: transform 200ms cubic-bezier(0.16, 1, 0.3, 1), opacity 200ms ease;
        transform: translateY(20px);
        opacity: 0;
      `;
      document.body.appendChild(toast);
    }

    toast.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10B981" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      <span>${message}</span>
    `;

    requestAnimationFrame(() => {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    clearTimeout(toast.timer);
    toast.timer = setTimeout(() => {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
    }, 3800);
  }

  // 12. Démarrage initial
  renderProcedures('all');
  switchCommune('cotonou');
});
