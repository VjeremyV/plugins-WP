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
    }

    /**
     * ajoute le css et le js de la partie front
     *
     * @return void
     */
    function ctWA_addFront(){
        wp_enqueue_style('ctWA-tarot-css', trailingslashit(TAROT_PLUG_DIR).'assets/css/ctWA-style.css' , false, '1.0', 'all');
        wp_enqueue_script('ctWA-tarot-front-js', trailingslashit(TAROT_PLUG_DIR).'assets/js/ctWA-front.js',
        []
        , true);
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


    $request = "CREATE TABLE IF NOT EXISTS ". $wpdb->prefix . 'wa_tarot_cards'." (
    id int(255) NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    description varchar(255) NULL,
    img varchar(255) NOT NULL,
    PRIMARY KEY  (id)
) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    dbDelta($request);
}
    
/**
 * récupère tous les éléments de la bdd
 *
 * @return void
 */
function read_DB(){
    global $wpdb;
    $request = 'SELECT * FROM '. $wpdb->prefix . 'wa_tarot_cards';
    $data= $wpdb->get_results(
        $wpdb->prepare($request)
    );
    return $data;
}

function write_DB(WP_REST_Request $request){
    $params= $request->get_params();
    global $wpdb;
    $nom = htmlentities($params['nom']);
    $description = htmlentities($params['description']);
    $image = htmlentities($params['img']);
    if($wpdb->query(
        $wpdb->prepare(
        "INSERT INTO ". TAROT_DB_NAME."
        (nom, description, img)
        VALUES ( %s, %s, %s )",
              $nom,
              $description,
              $image,
           
        )
        )){
         echo 'la carte a bien été ajoutée';   
        } else {
            echo 'la carte n\'a pas pu être ajoutée';
        }

        // echo json_encode(array('status'=> 1, 'params' => $params));
    
}
/**
 * ajoute une route perso à l'API rest de WP
 *
 * @return void
 */
function ctWA_addRouteJsonRead(){
register_rest_route('wa_tarot/v1', '/read', [
    'methods' => 'GET', 
    'callback' => function(){
        return read_DB();
    }
]);
}
/**
 * ajoute une route perso à l'API rest de WP
 *
 * @return void
 */
function ctWA_addRouteJsonWrite(){
register_rest_route('wa_tarot/v1', '/write', [
    'methods' => 'POST', 
    'callback' => 'write_DB',
    'args'=>array(
        'nom'=>array(
            'type'=>'string',
            'required'=> true,
            'validate_callback'=>function($param){
                if(empty($param)){
                    return false;
                } else {
                    return true;
                }
            }
        ),
        'description'=>array(
            'type'=>'string',
            'required'=> true,
            'validate_callback'=>function($param){
                if(empty($param)){
                    return false;
                } else {
                    return true;
                }
            }
        ),
        'img'=>array(
            'type'=>'string',
            'required'=> true,
            'validate_callback'=>function($param){
                if(empty($param)){
                    return false;
                } else {
                    return true;
                }
            }
        )
    )
]);
}











//     global $wp_scripts; 
//     echo '<pre style="padding: 200px;">';
//     print_r( $wp_scripts );
// echo '</pre>';
