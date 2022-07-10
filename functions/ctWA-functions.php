<?php
define('TAROT_DB_NAME', $wpdb->prefix . 'wa_tarot_cards');

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
    
    /**
     * ajoute le js et le css personnalisé à la liste d'attente 
     *
     * @return void
     */
    function ctWA_addJsEditor(){
        wp_enqueue_script('ctWA-tarot-js', trailingslashit(TAROT_PLUG_DIR).'assets/js/ctWA-plug.js',
        array('wp-blocks', 'wp-i18n', 'wp-editor')
        , true);
        wp_enqueue_style('ctWA-tarot-css', trailingslashit(TAROT_PLUG_DIR).'assets/css/ctWA-style.css' );
    }

    /**
 * ajoute la table personnalisée en bdd
 */
    function add_DB()
{    /**
     * Si inexistante, on créée la table SQL "commissions" après l'activation du thème
     */
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();


    $commissions_sql = "CREATE TABLE IF NOT EXISTS ". $wpdb->prefix . 'wa_tarot_cards'." (
    id int(255) NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    img varchar(255) NOT NULL,
    PRIMARY KEY  (id)
) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    dbDelta($commissions_sql);
}
    
/**
 * ajoute une route perso à l'API rest de WP
 *
 * @return void
 */
function ctWA_addRouteJson(){
register_rest_route('wa_tarot/v1', '/read', [
    'method' => 'GET', 
    'callback' => function(){
        return ['success' => 'Bonjour les gens'];
    }
]);
}









//     global $wp_scripts; 
//     echo '<pre style="padding: 200px;">';
//     print_r( $wp_scripts );
// echo '</pre>';
