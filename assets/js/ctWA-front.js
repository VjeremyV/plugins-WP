(() => {
  onload = (event) => {
    let path = document.location.origin + "/wp-json/wa_tarot/v1/read"; //le chemin vers l'api de lecture des cartes

    //paquet de cartes
    let cards = document.querySelectorAll(".cardT"); //selection de toutes les cartes
    let cardsBack = document.querySelectorAll(".cardT-back"); // selection de tous les dos de carte

    //Carte resultat
    let tCardBack = document.querySelector(".t-card-back"); //selection du dos de la grande carte choisie
    let cardResultContainer = document.querySelector(".card-result"); // conteneur de tout le resultat
    let cardResult = document.querySelector(".bigCardResult"); //conteneur du visuel de la carte resultat
    let cardResultImg = document.querySelector(".t-card-img");
    let cardResultTitle = document.querySelector(".t-card-title");
    let cardResultDesc = document.querySelector(".t-card-description");
    //pour chaque dos de carte on assigne un background
    let resetCard = false; //variable pour savoir si la carte resultat est retournée ou non
    let cardsData; //resultat de la requete des données des cartes

    /**
     * verifie sur un fichier existe
     * @param {} urlToFile
     * @returns
     */
    function doesFileExist(urlToFile) {
      var xhr = new XMLHttpRequest();
      xhr.open("HEAD", urlToFile, false);
      xhr.send();

      return xhr.status !== 404;
    }

    /**
     * affice l'image choisi en tant que dos de carte
     */
    function showBack() {
      let path = `${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/`;
      let extensions = ["jpg", "jpeg", "png", "wepb", "PNG"];
      extensions.forEach((ext) => {
        if (doesFileExist(path + "back." + ext)) {
      
          tCardBack.style.background =
            "url(" +
            document.location.origin +
            "/wp-content/plugins/cartes-tarot-WA/assets/uploads/back." +
            ext +
            ") center/cover";
          cardsBack.forEach((cardBack) => {
            cardBack.style.background =
              "url(" +
              document.location.origin +
              "/wp-content/plugins/cartes-tarot-WA/assets/uploads/back." +
              ext +
              ") center/cover ";
          });
        }
      });
    }

    showBack();
    // pour le dos de carte de la grande carte resultat on assigne un background
    // tCardBack.style.background= "url("+document.location.origin+"/wp-content/plugins/cartes-tarot-WA/assets/uploads/back.jpg) center/cover"

    //pour chaque carte
    cards.forEach((card) => {
      //au clique
      card.addEventListener("click", () => {
        if (resetCard) {
          cardResult.style.transform = "rotateY(0)";
          resetCard = false;
          cardResultTitle.innerText = "";
          cardResultDesc.innerText = "";
        }

        cardResultContainer.style.transition = "none";
        cardResultContainer.style.transform = "translateY(200px)";
        cardResultContainer.style.opacity = "0";
        //on modifie le style de la carte
        card.style.transition = "1.5s ease";
        card.style.transform = "translateY(250px)";
        card.style.opacity = "0";

        //on fait apparaitre la carte resultat
        setTimeout(() => {
          cardResultContainer.style.transition = "1.5s ease";
          cardResultContainer.style.transform = "translateY(0)";
          cardResultContainer.style.opacity = "1";
        }, 700);

        //on rend la carte resultat clicable
        cardResult.style.pointerEvents = "auto";
      });
    });

    //on fetch l'api pour obtenir les resultats de la bdd
    fetch(path)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        cardsData = Array.from(data);
        //si on a les données alors on pourra retourner la carte
        cardResult.addEventListener("click", () => {
          let randomCard = Math.floor(Math.random() * data.length);
          cardResultImg.style.background = `url("${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${data[randomCard].imgDB}") center/cover`;
          cardResultTitle.innerText = data[randomCard].nom;
          cardResultDesc.innerText = data[randomCard].description;
          cardResult.style.transform = "rotateY(180deg)";
          resetCard = true;
          cardResult.style.pointerEvents = "none";
        });
      });
  };
})();
