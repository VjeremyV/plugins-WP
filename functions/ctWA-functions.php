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
    imgDB varchar(255) NOT NULL,
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

/**
 * créer une carte en bdd
 *
 * @param WP_REST_Request $request
 * @return void
 */
function write_DB(WP_REST_Request $request){
    $params= $request->get_params();
    global $wpdb;
    $nom = htmlentities($params['nom']);
    $description = htmlentities($params['description']);
    $image = htmlentities($params['img']);
    $imageDb = htmlentities($params['imgDB']);

    if($wpdb->query(
        $wpdb->prepare(
        "INSERT INTO ". TAROT_DB_NAME."
        (nom, description, img, imgDB)
        VALUES ( %s, %s, %s, %s )",
              $nom,
              $description,
              $image,
              $imageDb
           
        )
        )){
         echo 'la carte a bien été ajoutée';   
        } else {
            echo 'la carte n\'a pas pu être ajoutée';
        }

        // echo json_encode(array('status'=> 1, 'params' => $params));
    
}

/**
 * met à jour une carte en bdd
 *
 * @param WP_REST_Request $request
 * @return void
 */
function update_DB(WP_REST_Request $request){
    $params= $request->get_params();
    global $wpdb;
    $nom = htmlentities($params['nom']);
    $description = htmlentities($params['description']);
    $image = htmlentities($params['img']);
    $imageDb = htmlentities($params['imgDB']);
    if($wpdb->update(TAROT_DB_NAME, [
        'nom'=>$nom,
        'description' => $description,
        'img' => $image,
        'imgDB' => $imageDb]
    , ['id' => $params['id']])      
        ){
         echo 'la carte a bien été mise à jour';   
        } else {
            echo 'la carte n\'a pas pu être mise à jour';
        }
}


function delete_DB(WP_REST_Request $request){
    $params= $request->get_params();
    global $wpdb;
    if($wpdb->delete(TAROT_DB_NAME, ['id' => $params['id']], ['%d'])){
        echo 'la carte a bien été supprimée';   
    } else {
        echo 'erreur : la carte n\'a  pas pu être supprimée'; 
    }
}
/**
 * ajoute une route perso à l'API rest de WP pour la lecture des données
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
 * ajoute une route perso à l'API rest de WP pour la suppression d'une carte
 *
 * @return void
 */
function ctWA_addRouteJsonDelete(){
    register_rest_route('wa_tarot/v1', '/delete/(?P<id>[\d]+)', [
        'methods' => WP_REST_Server::DELETABLE, 
        'callback' => 'delete_DB'
    ]);
}



/**
 * ajoute une route perso à l'API rest de WP pour l'ecriture de données
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
        ),
        'imgDB'=>array(
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

/**
 * ajoute une route perso à l'API rest de WP pour la mise à jour de données
 *
 * @return void
 */
function ctWA_addRouteJsonUpdate(){
    register_rest_route('wa_tarot/v1', '/update/(?P<id>[\d]+)', array(
        'methods' => WP_REST_Server::EDITABLE,
        'callback' => 'update_DB',
        'args'=> array(
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
            ),
            'imgDB'=>array(
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
    ));

}










//     global $wp_scripts; 
//     echo '<pre style="padding: 200px;">';
//     print_r( $wp_scripts );
// echo '</pre>';
