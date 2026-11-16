<?php
/**
 * header.php
 * En-tête standard du thème WordPress Communes du Bénin
 */
?><!DOCTYPE html>
<html <?php language_attributes(); ?> data-theme="light">
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- 1. Bandeau Supérieur Institutionnel -->
<div class="top-bar-emergency">
    <div class="container top-bar-inner">
        <div style="display: flex; align-items: center; gap: 1rem;">
            <span class="official-stamp">
                <span class="flag-benin">
                    <span class="flag-g"></span>
                    <span class="flag-yr">
                        <span class="flag-y"></span>
                        <span class="flag-r"></span>
                    </span>
                </span>
                RÉPUBLIQUE DU BÉNIN • PORTAIL TERRITORIAL OFFICIEL
            </span>
            <span style="opacity: 0.6;">|</span>
            <span style="font-size: 0.8rem; color: #86EFAC;">
                Département du <strong data-bind="commune-department">Littoral</strong>
            </span>
        </div>

        <div style="display: flex; align-items: center; gap: 1.25rem;">
            <span style="font-size: 0.8rem;">Urgences : Police 166 | SAMU 130 | Pompiers 118</span>
            <a href="#allo-mairie" class="hero-tag" style="background: rgba(255,255,255,0.2);">Allô Mairie</a>
        </div>
    </div>
</div>

<!-- 2. En-tête Sticky -->
<header class="site-header">
    <div class="container nav-container">
        <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-wrapper">
            <div class="brand-seal-mini">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--primary-theme)" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div class="brand-text">
                <h1>Mairie de <span data-bind="commune-name"><?php bloginfo('name'); ?></span></h1>
                <p data-bind="commune-status-badge">Portail Municipal</p>
            </div>
        </a>

        <nav>
            <?php
            wp_nav_menu([
                'theme_location' => 'primary',
                'container'      => false,
                'menu_class'     => 'nav-links',
                'fallback_cb'    => false,
            ]);
            ?>
        </nav>

        <div class="nav-actions">
            <button class="commune-switcher-btn" id="customizer-toggle-btn">
                <span data-bind="commune-name"><?php bloginfo('name'); ?></span> ▾
            </button>
            <button class="btn btn-icon search-trigger-btn" title="Recherche (Ctrl + K)">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
            </button>
            <button class="btn btn-icon" id="theme-toggle-btn" title="Mode Sombre/Clair">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
        </div>
    </div>
</header>
