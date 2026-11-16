<?php
/**
 * header.php
 * En-tête standard et épuré du thème WordPress Atata — Communes du Bénin
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

<!-- Navigation Header : Minimaliste, Aéré & Épuré -->
<header class="site-header">
    <div class="container nav-container">
        <!-- Identité & Sélecteur compact -->
        <div class="brand-group">
            <a href="<?php echo esc_url(home_url('/')); ?>" class="brand-wrapper">
                <span class="flag-benin">
                    <span class="flag-g"></span>
                    <span class="flag-yr">
                        <span class="flag-y"></span>
                        <span class="flag-r"></span>
                    </span>
                </span>
                <div class="brand-text">
                    <span class="brand-main">Mairie de <strong data-bind="commune-name"><?php bloginfo('name'); ?></strong></span>
                    <span class="brand-sub" data-bind="commune-status-badge">Portail Municipal</span>
                </div>
            </a>

            <button class="commune-pill-btn" id="customizer-toggle-btn" title="Changer de commune béninoise">
                <span>Changer</span>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="6 9 12 15 18 9"/></svg>
            </button>
        </div>

        <!-- Navigation Centrale (3 volets clairs) -->
        <nav class="nav-center">
            <ul class="nav-links">
                <li><a href="#demarches" class="nav-link">Démarches Citoyennes</a></li>
                <li><a href="#tourisme" class="nav-link">Découvrir la Ville</a></li>
                <li><a href="#gouvernance" class="nav-link">Vie Municipale</a></li>
            </ul>
        </nav>

        <!-- Actions Droites -->
        <div class="nav-actions">
            <button class="search-pill-btn search-trigger-btn" title="Recherche (Ctrl + K)">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
                <span class="search-label">Recherche</span>
                <kbd class="search-kbd">⌘K</kbd>
            </button>
            <button class="btn btn-icon btn-subtle" id="theme-toggle-btn" title="Mode Sombre/Clair">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            </button>
            <a href="#allo-mairie" class="btn btn-primary btn-sm btn-magnetic">
                <span>Allô Mairie</span>
            </a>
        </div>
    </div>
</header>
