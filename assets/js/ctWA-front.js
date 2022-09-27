(() => {
  onload = (event) => {
    
    let container = document.querySelector('.cards');
    if(container){
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
    let cardsAlreadyGone = []; // cartes déjà selectionnées
    let count = 1;
    let currentdraw = [];
    let miniaturesImgContainer = document.querySelectorAll('.minImgCardResultContainer');
    let resetBtn = document.getElementById('resetTarotBtn');


  
/**
 * renvoit l'id d'une carte différent à chaque tirage jusqu'à arriver au bout du paquet
 * @param {number} numberOfCards 
 * @returns 
 */
    function getNewRandomCard(numberOfCards, data){
      console.log(data);
      let randomCard = Math.floor(Math.random() * numberOfCards);
      if(!cardsAlreadyGone.includes(randomCard)){
        cardsAlreadyGone.push(randomCard);
        let back = `url("${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${data[randomCard].imgDB}") center/cover`;
        let cardtitle = data[randomCard].nom;
        let carddesc= data[randomCard].description;
        cardResultImg.style.background = back;
        cardResultTitle.innerText = cardtitle;
        cardResultDesc.innerText = carddesc;
        cardResult.style.transform = "rotateY(180deg)";
        cardResult.style.pointerEvents = "none";
        resetCard = true;
        showMini(back, cardtitle, carddesc);
      } else if(numberOfCards == cardsAlreadyGone.length){
        cardsAlreadyGone = [];
        getNewRandomCard(numberOfCards, data);
      } else {
        getNewRandomCard(numberOfCards, data);

      } 
    }
    

    /**
     * affiche les miniatures des img des cartes tirées
     * @param {} back 
     * @param {*} title 
     * @param {*} desc 
     */
    function showMini(back, title, desc){
      let cardContainer = document.getElementById('img'+count);
      cardContainer.style.background = back;
      cardContainer.style.border = 'none';
      currentdraw.push({id: 'img'+count, titre: title, description: desc})
      count++;
      checkResetGame();
    }

    resetBtn.addEventListener('click', ()=> {
      resetTarotGame()    
    })
    /**
     * vérifie si il faut reinitialiser le jeu une fois toutes les cartes tirées
     */
    function checkResetGame(){
      if(count == 8 ){
        resetBtn.style.opacity = "1";
        resetBtn.style.pointerEvents = 'auto';
        resetBtn.setAttribute('class', 'hoverbton');
      }
    }

    /**
     * reinitialise le jeu
     */
    function resetTarotGame(){
      resetCard = true;
      hideBigCard();//on cache la grosse carte

      //on efface toutes les petites cartes
      miniaturesImgContainer.forEach((miniature)=> {
        miniature.style.background = 'none';
        miniature.style.border = '1px solid black';
      })
      //on efface les textes de resultat
        let bigMiniContainer = document.getElementById('miniResumeCardsResultsContainer');
        bigMiniContainer.innerHTML=``;

      //on reinitialise le compteur et le tirage actuel
      currentdraw = [];
      count = 1;
      cardsAlreadyGone = [];

      //on remet les cartes dans le paquet
      cards.forEach((card)=> {
        card.style.pointerEvents = 'auto';
        card.style.transform = "none";
        card.style.opacity = "1";

        //on cache le boutton de reset à nouveau
        resetBtn.style.opacity = "0";
        resetBtn.style.pointerEvents = 'none';
        resetBtn.removeAttribute('class');

      })
    }
    /**
     * cache la grosse carte de resultat
     */
    function hideBigCard(){
      cardResultContainer.style.opacity = "0";
      cardResult.style.transform = "rotateY(0)";
      resetCard = false;
      cardResultTitle.innerText = "";
      cardResultDesc.innerText = "";
    }
 
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
        if(count<8){
          if (resetCard) {
            hideBigCard();
          }
  
          cardResultContainer.style.transition = "none";
          cardResultContainer.style.transform = "translateY(200px)";
          cardResultContainer.style.opacity = "0";
          //on modifie le style de la carte
          card.style.pointerEvents = 'none';
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
        }
      });
    });


    miniaturesImgContainer.forEach((mini)=> {
      mini.addEventListener('mouseover', ()=> {
        let id = mini.getAttribute('id');
        let bigMiniContainer = document.getElementById('miniResumeCardsResultsContainer');
        currentdraw.forEach((element) => {
          if(element.id == id){
            bigMiniContainer.innerHTML = `
            <h4>${element.titre}</h4>
            <p>${element.description}</p>
            `;
          }
        })
      })
    })


    let csvFile = document.location.origin + "/wp-content/plugins/cartes-tarot-WA/assets/cards.csv";
    fetch(csvFile).then((res)=> {
      return res.text();
    }).then((data) => {
      let lines = data.split('\n');
      lines.pop();
      let arrayData = lines.map((el) => {
        let miniel = el.split(';');
        return {id : String(miniel[0]), nom: miniel[1], description: miniel[2], img: miniel[3], imgDB: String(miniel[4])}
      })
      let cardsData = Array.from(arrayData)
 //si on a les données alors on pourra retourner la carte
 cardResult.addEventListener("click", () => {
  let numberOfCards = cardsData.length;
  getNewRandomCard(numberOfCards, cardsData);
});

    })


  };
}

})();
