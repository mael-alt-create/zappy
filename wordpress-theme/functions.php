<?php
/**
 * functions.php
 * Configuration et fonctionnalités du thème Communes du Bénin
 */

if (!defined('ABSPATH')) {
    exit; // Sécurité
}

define('COMMUNES_BENIN_VERSION', '1.0.0');

/**
 * 1. Configuration initiale du thème
 */
function communes_benin_setup() {
    // Internationalisation
    load_theme_textdomain('communes-benin', get_template_directory() . '/languages');

    // Balise <title> automatique
    add_theme_support('title-tag');

    // Images à la une
    add_theme_support('post-thumbnails');
    set_post_thumbnail_size(1200, 630, true);

    // Support des menus
    register_nav_menus([
        'primary' => __('Menu Principal Mairie', 'communes-benin'),
        'footer'  => __('Menu Pied de Page', 'communes-benin'),
    ]);

    // HTML5 moderne
    add_theme_support('html5', [
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
    ]);

    // Logo personnalisé
    add_theme_support('custom-logo', [
        'height'      => 90,
        'width'       => 90,
        'flex-height' => true,
        'flex-width'  => true,
    ]);
}
add_action('after_setup_theme', 'communes_benin_setup');

/**
 * 2. Enregistrement des styles et scripts
 */
function communes_benin_scripts() {
    // Polices Google
    wp_enqueue_style(
        'communes-fonts',
        'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Playfair+Display:ital,wght@0,600;0,700;1,400&display=swap',
        [],
        null
    );

    // Styles du thème
    wp_enqueue_style('communes-main', get_template_directory_uri() . '/css/main.css', [], COMMUNES_BENIN_VERSION);
    wp_enqueue_style('communes-animations', get_template_directory_uri() . '/css/animations.css', ['communes-main'], COMMUNES_BENIN_VERSION);

    // Scripts JavaScript
    wp_enqueue_script('communes-data', get_template_directory_uri() . '/js/communes-data.js', [], COMMUNES_BENIN_VERSION, true);
    wp_enqueue_script('communes-vector', get_template_directory_uri() . '/js/vector-interactions.js', [], COMMUNES_BENIN_VERSION, true);
    wp_enqueue_script('communes-app', get_template_directory_uri() . '/js/app.js', ['communes-data', 'communes-vector'], COMMUNES_BENIN_VERSION, true);
}
add_action('wp_enqueue_scripts', 'communes_benin_scripts');

/**
 * 3. Enregistrement des Custom Post Types (Démarches & Patrimoine)
 */
function communes_benin_register_cpt() {
    // CPT Démarches Administratives
    register_post_type('demarche', [
        'labels' => [
            'name'          => __('Démarches Citoyennes', 'communes-benin'),
            'singular_name' => __('Démarche', 'communes-benin'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-clipboard',
        'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
    ]);

    // CPT Patrimoine & Tourisme
    register_post_type('patrimoine', [
        'labels' => [
            'name'          => __('Patrimoine & Tourisme', 'communes-benin'),
            'singular_name' => __('Site Touristique', 'communes-benin'),
        ],
        'public'       => true,
        'has_archive'  => true,
        'menu_icon'    => 'dashicons-location-alt',
        'supports'     => ['title', 'editor', 'thumbnail', 'custom-fields'],
        'show_in_rest' => true,
    ]);
}
add_action('init', 'communes_benin_register_cpt');

/**
 * 4. Inclusion du Customizer WordPress
 */
require_once get_template_directory() . '/inc/customizer.php';
