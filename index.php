<?php

/**
    Plugin Name: Tirage des cartes de Tarot WA
    Description: ajoute un encart qui permet au visiteur de tirer les cartes de tarot et obtenir une prédiction
    Author: Vaugoyeau Jérémy
    Author URI:       https://github.com/VjeremyV

 */

define('TAROT_PLUG_DIR', plugin_dir_url(__FILE__));
require_once plugin_dir_path(__FILE__) . 'functions/ctWA-functions.php';
register_activation_hook(__FILE__, 'add_DB');


function add_DB()
{    /**
     * Si inexistante, on créée la table SQL "commissions" après l'activation du thème
     */
    global $wpdb;
    $charset_collate = $wpdb->get_charset_collate();

    $cards_table_name = $wpdb->prefix . 'wa_tarot_cards';

    $commissions_sql = "CREATE TABLE IF NOT EXISTS $cards_table_name (
    id int(255) NOT NULL AUTO_INCREMENT,
    nom varchar(255) NOT NULL,
    img varchar(255) NOT NULL,
    PRIMARY KEY  (id)
) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    dbDelta($commissions_sql);
}