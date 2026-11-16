<?php
/**
 * inc/customizer.php
 * Options du personnaliseur WordPress pour adapter le thème à n'importe quelle commune du Bénin
 */

if (!defined('ABSPATH')) {
    exit;
}

function communes_benin_customize_register($wp_customize) {
    // 1. Section Identité Communale
    $wp_customize->add_section('communes_identity_section', [
        'title'       => __('Territoire & Identité Communale', 'communes-benin'),
        'priority'    => 30,
        'description' => __('Paramétrez la commune du Bénin pour ce portail.', 'communes-benin'),
    ]);

    // Choix de la Commune
    $wp_customize->add_setting('commune_id', [
        'default'           => 'cotonou',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('commune_id', [
        'label'    => __('Commune Active', 'communes-benin'),
        'section'  => 'communes_identity_section',
        'type'     => 'select',
        'choices'  => [
            'cotonou'     => 'Cotonou (Littoral)',
            'porto-novo'  => 'Porto-Novo (Ouémé)',
            'ouidah'      => 'Ouidah (Atlantique)',
            'parakou'     => 'Parakou (Borgou)',
            'abomey'      => 'Abomey (Zou)',
            'nikki'       => 'Nikki (Borgou)',
            'natitingou'  => 'Natitingou (Atacora)',
        ],
    ]);

    // Statut Particulier / Ordinaire
    $wp_customize->add_setting('commune_status_label', [
        'default'           => 'Commune à statut particulier',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('commune_status_label', [
        'label'   => __('Statut Administratif', 'communes-benin'),
        'section' => 'communes_identity_section',
        'type'    => 'text',
    ]);

    // Slogan Communal
    $wp_customize->add_setting('commune_slogan', [
        'default'           => 'Métropole d\'Avenir et Porte Océane de l\'Afrique de l\'Ouest',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('commune_slogan', [
        'label'   => __('Devise / Slogan', 'communes-benin'),
        'section' => 'communes_identity_section',
        'type'    => 'text',
    ]);

    // 2. Section Gouvernance (Maire & Secrétaire Exécutif)
    $wp_customize->add_section('communes_governance_section', [
        'title'    => __('Gouvernance & Exécutif (Réforme 2022)', 'communes-benin'),
        'priority' => 35,
    ]);

    // Nom du Maire
    $wp_customize->add_setting('commune_mayor_name', [
        'default'           => 'Luc Sètondji ATROKPO',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('commune_mayor_name', [
        'label'   => __('Nom du Maire', 'communes-benin'),
        'section' => 'communes_governance_section',
        'type'    => 'text',
    ]);

    // Nom du Secrétaire Exécutif (SE)
    $wp_customize->add_setting('commune_se_name', [
        'default'           => 'Ange Paterne AMOUSSOUGAN',
        'sanitize_callback' => 'sanitize_text_field',
    ]);
    $wp_customize->add_control('commune_se_name', [
        'label'       => __('Nom du Secrétaire Exécutif (SE)', 'communes-benin'),
        'description' => __('Ordonnateur unique du budget communal (Loi sur la décentralisation 2022).', 'communes-benin'),
        'section'     => 'communes_governance_section',
        'type'        => 'text',
    ]);
}
add_action('customize_register', 'communes_benin_customize_register');
