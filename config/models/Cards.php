<?php

class Cards
{
    // Connexion
    private $connexion;
    private $table = TAROT_DB_NAME; // Table dans la base de données

    // Propriétés
    public $id;
    public $nom;
    public $img;


    /**
     * Constructeur avec $db pour la connexion à la base de données
     *
     * @param $db
     */
    public function __construct($db)
    {
        $this->connexion = $db;
    }

    /**
     * créer une carte
     */
    public function create_cards()
    {
        // Ecriture de la requête SQL en y insérant le nom de la table
        $sql = "INSERT INTO " . $this->table . " SET nom=:nom, img=:img";
        $query = $this->connexion->prepare($sql);
        if ($query->execute(['nom' => $this->nom, 'img' => $this->img])) {
            return true;
        }
        return false;
    }

    /**
     * retourne toutes les cartes
     */
    public function read_cards()
    {
        $sql = "SELECT * FROM " . $this->table;
        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On exécute la requête
        $query->execute();

        // On retourne le résultat
        return $query;
    }

    /**
     * retourne une carte
     */
    public function read_one_card()
    {
        $sql = "SELECT * FROM " . $this->table . "WHERE id=:id";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);


        // On exécute la requête
        $query->execute(['id' => $this->id]);

        // on récupère la ligne
        $row = $query->fetch(PDO::FETCH_ASSOC);

        // On hydrate l'objet
        $this->nom = $row['nom'];
        $this->img = $row['img'];
    }

    /**
     * modifier une carte
     */
    public function update_card()
    {    // On écrit la requête
        $sql = "UPDATE " . $this->table . " SET nom = :nom, img = :img WHERE id = :id";

        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On exécute
        if ($query->execute(['nom' => $this->nom, 'img' => $this->img])) {
            return true;
        }

        return false;
    }

    public function delete_card()
    {
        // On écrit la requête
        $sql = "DELETE FROM " . $this->table . " WHERE id = ?";
        // On prépare la requête
        $query = $this->connexion->prepare($sql);

        // On sécurise les données
        $this->id = htmlspecialchars(strip_tags($this->id));

        // On attache l'id
        $query->bindParam(1, $this->id);

        // On exécute la requête
        if ($query->execute()) {
            return true;
        }

        return false;
    }
}
