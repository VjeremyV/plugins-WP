<?php

// accroche au hook d'action admin_menu ma fonction qui génère le menu de mon plugin

/**
 * ajoute mon menu au panneau d'admin de WP
 *
 * @return void
 */
function ctWA_addAdminLink(){
    add_menu_page('Configuration du tirage', // Titre de la page
    'Cartes Tarot', // Texte de l'onglet du menu
    'manage_options', // capacité de l'utilisateur à voir le menu selon son rôle
    __DIR__.'/ctWA-menu.php'); // ressource à appeler à l'affichage de la page;
}
    
    
    function ctWA_addJsEditor(){
        wp_enqueue_script('ctWA-tarot-js', trailingslashit(TAROT_PLUG_DIR).'assets/js/ctWA-plug.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor')
        , true);
        wp_enqueue_style('ctWA-tarot-css', trailingslashit(TAROT_PLUG_DIR).'assets/css/ctWA-style.css' );
    }

    
    add_action( 'admin_menu', 'ctWA_addAdminLink' );
    add_action( 'enqueue_block_editor_assets', 'ctWA_addJsEditor');








//     global $wp_scripts; 
//     echo '<pre style="padding: 200px;">';
//     print_r( $wp_scripts );
// echo '</pre>';
