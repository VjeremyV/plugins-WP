(() => {
  /////////////////////////////////éléments du form création de carte ///////////////////////////
  const newCardName = document.getElementById("newCardNom");
  const newCardDescription = document.getElementById("newCardDescription");
  const newCardImg = document.getElementById("newCardImg");
  const create = document.getElementById("createButton");
  const createContainer = document.getElementById("create-container");
  //////////////////////////////////éléments du form update de carte /////////////////////
  const upCardNom = document.getElementById("upCardNom");
  const updateContainer = document.getElementById("update-container");
  const cardsSelectUpdate = document.getElementById("cardsSelectUpdate");
  const upCardDescription = document.getElementById("upCardDescription");
  const cardImgWAUpdate = document.querySelector('.cardImgWAUpdate');
  const update = document.getElementById('updateButton');
  ////////////////////////////////éléments du form delete
  const deleteContainer = document.getElementById("delete-container");

  ////////////////////////////////éléments généraux////////////////////////////////////////
  const cardsSelectDelete = document.getElementById("cardsSelectDelete");
  let buttons = document.querySelectorAll(".boutons"); //boutons radios pour switch de formulaires
  let message = document.querySelector(".flash-messages");
  let inputsOptions;

  /**
   *permet l'update de la bdd pour une création ou une mise à jour
   * @param {*} img
   * @returns
   */
  async function updateDB(cardName, cardDescription, img, route, methode) {
    let formData = new FormData();
    formData.append("img", img.files[0]);
    fetch(route, {
      method: methode,
      body: formData,
    })
      .then((res) => res.text())
      .then((data) => {
        if (data !== "Failure") {
          let donnees = {
            nom: cardName.value,
            description: cardDescription.value,
            img: img.files[0].name,
            imgDB: data,
          };
          const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(donnees),
          };
          fetch(
            document.location.origin + "/wp-json/wa_tarot/v1/write",
            options
          ).then((res) => {
            if (res.status === 200) {
              message.innerHTML = '<p class="alert alert-success">La carte a bien été ajoutée</p>';
              loadOptionsInput()
            } else {
              message.innerHTML =
                '<p class = "alert alert-danger" >Une erreur est survenu lors de l\'ajout de la carte </p>';
            }
          });
        } else {
          message.innerHTML =
            "<p class = \"alert alert-danger\" >Une erreur est survenu lors de l'upload de l'image </p>";
        }
        return data;
      });
  }

  /**
   * génère les liste d'input option relatives aux carte en bdd
   * @param {mixt} select
   * @param {array} options
   */
  function createSelect(select, options) {
    let optionsInput = options
      .map(
        (option) =>
          `
          <option value='${option.id}' id='${option.id}'>${option.nom}</option>
          `
      )
      .join("");
    select.innerHTML = optionsInput;
  }

   /**
   * charge les options des input select
   */
    function loadOptionsInput(){
      let path = document.location.origin + "/wp-json/wa_tarot/v1/read";
      fetch(path)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          inputsOptions = Array.from(data);
          cardImgWAUpdate.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${inputsOptions[0].imgDB}">`
          createSelect(cardsSelectUpdate, inputsOptions);
          createSelect(cardsSelectDelete, inputsOptions);
          cardsSelectDelete.value=inputsOptions[0].id;
          upCardNom.value = inputsOptions[0].nom;
          upCardDescription.value = inputsOptions[0].description;
        });
    }


  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      if (btn.checked) {
        switch (btn.getAttribute("id")) {
          case "create":
            createContainer.style.display = "block";
            updateContainer.style.display = "none";
            deleteContainer.style.display = "none";
            break;
          case "update":
            createContainer.style.display = "none";
            updateContainer.style.display = "block";
            deleteContainer.style.display = "none";

            break;

          case "delete":
            createContainer.style.display = "none";
            updateContainer.style.display = "none";
            deleteContainer.style.display = "block";
            break;
        }
      }
    });
  });

  create.addEventListener("click", function (e) {
    e.preventDefault();
    updateDB(
      newCardName, 
      newCardDescription,
      newCardImg,
      document.location.origin +
        "/wp-content/plugins/cartes-tarot-WA/functions/ctWA-upload.php",
      "POST"
    );
  });

  update.addEventListener('click', function(e) {
    e.preventDefault();


  })

 

  cardsSelectUpdate.addEventListener("change", (e) => {
    inputsOptions.forEach((element) => {
      if (element.id === e.target.value){
        upCardNom.value = element.nom;
        upCardDescription.value = element.description
        cardImgWAUpdate.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${element.imgDB}">`
      }
    })
  });

  loadOptionsInput();
})();
