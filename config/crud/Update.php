<?php

// Headers requis
// Accès depuis n'importe quel site ou appareil (*)
header("Access-Control-Allow-Origin: *");

// Format des données envoyées
header("Content-Type: application/json; charset=UTF-8");

// Méthode autorisée
header("Access-Control-Allow-Methods: PUT");

// Durée de vie de la requête
header("Access-Control-Max-Age: 3600");

// Entêtes autorisées
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

if ($_SERVER['REQUEST_METHOD'] == 'PUT') {
    // La bonne méthode est utilisée
    // On inclut les fichiers de configuration et d'accès aux données
    include_once __DIR__ . '../Database.php';
    include_once __DIR__ . '../models/Cards.php';

    // On instancie la base de données
    $database = new Database();
    $db = $database->getConnection();

    // On instancie les cartes
    $cards = new Cards($db);

    // On récupère les données reçues
    $donnees = json_decode(file_get_contents("php://input"));

    // On vérifie qu'on a bien toutes les données
    if (!empty($donnees->id) && !empty($donnees->nom) && !empty($donnees->img)) {
        // On hydrate notre objet
        $cards->id = $donnees->id;
        $cards->nom = $donnees->nom;
        $cards->img = $donnees->img;
       
        if ($cards->update_card()) {
            // Ici la modification a fonctionné
            // On envoie un code 200
            http_response_code(200);
            echo json_encode(["message" => "La modification a été effectuée"]);
        } else {
            // Ici la création n'a pas fonctionné
            // On envoie un code 503
            http_response_code(503);
            echo json_encode(["message" => "La modification n'a pas été effectuée"]);
        }
    }
} else {
    // Mauvaise méthode, on gère l'erreur
    http_response_code(405);
    echo json_encode(["message" => "La méthode n'est pas autorisée"]);
}
