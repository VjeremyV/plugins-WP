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

    $commissions_table_name = $wpdb->prefix . 'test';

    $commissions_sql = "CREATE TABLE IF NOT EXISTS $commissions_table_name (
    id mediumint(9) NOT NULL AUTO_INCREMENT,
    type varchar(45) DEFAULT NULL,
    amount decimal(10,2) DEFAULT NULL,
    user_id mediumint(9) DEFAULT NULL,
    order_id mediumint(9) DEFAULT NULL,
    line_product_id mediumint(9) DEFAULT NULL,
    line_product_rate decimal(10,2) DEFAULT NULL,
    line_product_quantity mediumint(9) DEFAULT NULL,
    line_subtotal decimal(10,2) DEFAULT NULL,
    user_notified varchar(45) DEFAULT NULL,
    time datetime DEFAULT CURRENT_TIMESTAMP NOT NULL,
    PRIMARY KEY  (id)
) $charset_collate;";

    require_once(ABSPATH . 'wp-admin/includes/upgrade.php');

    dbDelta($commissions_sql);
}