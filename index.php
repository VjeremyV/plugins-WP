<?php

/**
    Plugin Name: Tirage des cartes de Tarot WA
    Description: ajoute un encart qui permet au visiteur de tirer les cartes de tarot et obtenir une prédiction
    Author: Vaugoyeau Jérémy
    Author URI:       https://github.com/VjeremyV

 */
require_once plugin_dir_path(__FILE__) . 'functions/ctWA-functions.php';

define('TAROT_PLUG_DIR', plugin_dir_url(__FILE__));
register_activation_hook(__FILE__, 'add_DB');
add_action( 'admin_menu', 'ctWA_addAdminLink' );
add_action( 'enqueue_block_editor_assets', 'ctWA_addJsEditor');
add_action('rest_api_init', 'ctWA_addRouteJson');

