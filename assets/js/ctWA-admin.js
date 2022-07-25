(() => {
  /////////////////////////////////éléments du form création de carte ///////////////////////////
  const newCardName = document.getElementById("newCardNom"); //input nom formulaire de création
  const newCardDescription = document.getElementById("newCardDescription"); //input description formulaire de création
  const newCardImg = document.getElementById("newCardImg"); // input image formulaire de création
  const create = document.getElementById("createButton"); //bouton de soumission formulaire de création
  const createContainer = document.getElementById("create-container"); //container formulaire de création
  //////////////////////////////////éléments du form update de carte /////////////////////
  const upCardNom = document.getElementById("upCardNom"); //input nom formulaire de mise à jour
  const updateContainer = document.getElementById("update-container"); //container formulaire de mise à jour
  const cardsSelectUpdate = document.getElementById("cardsSelectUpdate"); //input select formulaire de mise à jour
  const upCardDescription = document.getElementById("upCardDescription"); //input description formulaire de mise à jour
  const cardImgWAUpdate = document.querySelector(".cardImgWAUpdate"); //conteneur de prévisualisation de l'image de la carte
  const update = document.getElementById("updateButton"); //boutton soumission formulaire de mise à jour
  const upCardImg = document.getElementById("upCardImg"); //input image formulaire de mise à jour
  ////////////////////////////////éléments du form delete
  const deleteContainer = document.getElementById("delete-container");//conteneur du formulaire de suppression
  const cardsSelectDelete = document.getElementById("cardsSelectDelete");//input select formulaire de suppression
  const cardTitleWaDelete = document.querySelector(".cardTitleWaDelete");//conteneur du titre formulaire de suppression
  const cardImgWADelete = document.querySelector(".cardImgWADelete");//conteneur de l'image formulaire de suppression
  const cardDescriptionWADelete = document.querySelector(".cardDescriptionWADelete");// conteneur de la description formulaire de suppression

  ////////////////////////////////éléments généraux////////////////////////////////////////
  let buttons = document.querySelectorAll(".boutons"); //boutons radios pour switch de formulaires
  let message = document.querySelector(".flash-messages");
  let inputsOptions;

  /**
   * upload une image avant la mise à jour ou l'ajout d'une carte en bdd
   * @param {string} cardName
   * @param {string} cardDescription
   * @param {string} img
   * @param {string} route
   * @param {string} methode
   * @param {string} messageDone
   * @param {string} messageFail
   */
  async function addCard(
    cardName,
    cardDescription,
    img,
    route,
    methode,
    messageDone,
    messageFail
  ) {
    let formData = new FormData();
    formData.append("img", img.files[0]);
    fetch(
      document.location.origin +
        "/wp-content/plugins/cartes-tarot-WA/functions/ctWA-upload.php",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        if (data !== "Failure") {
          addUpdadteCard(
            cardName,
            cardDescription,
            img,
            route,
            methode,
            data,
            messageDone,
            messageFail
          );
        } else {
          message.innerHTML =
            "<p class = \"alert alert-danger\" >Une erreur est survenu lors de l'upload de l'image </p>";
        }
        return data;
      });
  }

  /**
   * ajoute ou mets à jour une carte en bdd
   * @param {string} cardName
   * @param {string} cardDescription
   * @param {string} img
   * @param {string} route
   * @param {string} method
   * @param {string} imgData
   */
  function addUpdadteCard(
    cardName,
    cardDescription,
    img,
    route,
    method,
    imgData,
    messageDone,
    messageFail,
    isNameImgOk = false
  ) {
    let donnees;
    if (isNameImgOk === true) {
      donnees = {
        nom: cardName.value,
        description: cardDescription.value,
        img: img,
        imgDB: imgData,
      };
    } else {
      donnees = {
        nom: cardName.value,
        description: cardDescription.value,
        img: img.files[0].name,
        imgDB: imgData,
      };
    }
    const options = {
      method: method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(donnees),
    };
    fetch(route, options).then((res) => {
      if (res.status === 200) {
        message.innerHTML =
          '<p class="alert alert-success">' + messageDone + "</p>";
        clearMessage();
        loadOptionsInput();
      } else {
        message.innerHTML =
          '<p class = "alert alert-danger" >' + messageFail + "</p>";
        clearMessage();
      }
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
  function loadOptionsInput() {
    let path = document.location.origin + "/wp-json/wa_tarot/v1/read";
    fetch(path)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        inputsOptions = Array.from(data);
        cardImgWAUpdate.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${inputsOptions[0].imgDB}">`;
        createSelect(cardsSelectUpdate, inputsOptions);
        createSelect(cardsSelectDelete, inputsOptions);
        cardsSelectDelete.value = inputsOptions[0].id;
        upCardNom.value = inputsOptions[0].nom;
        upCardDescription.value = inputsOptions[0].description;
        cardTitleWaDelete.innerHTML = `<h3>${inputsOptions[0].nom}</h3>`;
        cardImgWADelete.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${inputsOptions[0].imgDB}">`;
        cardDescriptionWADelete.innerHTML = `<p>${inputsOptions[0].description}</p>`;
      });
  }

  /**
   * vide le contenu des messages
   */
  function clearMessage() {
    setTimeout(() => {
      message.innerHTML = "";
    }, 5000);
  }
  buttons.forEach((btn) => {
    //pour chaque boutons radio de selection de mode (creation, misa à jour ou suppression)
    btn.addEventListener("click", () => {
      //au click
      if (btn.checked) {
        //on vérifie quel bouton est check
        switch (
          btn.getAttribute("id") //on récupère l'id et on change la visibilité des formulaires en fonction du choix
        ) {
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

  /**
   * au click sur le bouton de validation du formulaire de création
   */
  create.addEventListener("click", function (e) {
    e.preventDefault();
    addCard(
      newCardName,
      newCardDescription,
      newCardImg,
      document.location.origin + "/wp-json/wa_tarot/v1/write",
      "POST",
      "La carte a bien été ajoutée",
      "Une erreur est survenu lors de l'ajout de la carte"
    );
  });

  /**
   * au click sur le bouton de validation du formulaire de mise à jour
   */
  update.addEventListener("click", function (e) {
    e.preventDefault();
    if (upCardImg.files[0]) {
      console.log(upCardNom.value);
      console.log(upCardDescription.value);
      addCard(
        upCardNom,
        upCardDescription,
        upCardImg,
        document.location.origin +
          "/wp-json/wa_tarot/v1/update/" +
          cardsSelectUpdate.value,
        "PUT",
        "La carte a bien été mise à jour",
        "Une erreur est survenu lors de la mise à jour de la carte"
      );
    } else {
      let imageUpdate;
      let imageDBupdate;
      inputsOptions.forEach((element) => {
        if (element.id === cardsSelectUpdate.value) {
          imageUpdate = element.img;
          imageDBupdate = element.imgDB;
        }
      });
      addUpdadteCard(
        upCardNom,
        upCardDescription,
        imageUpdate,
        document.location.origin +
          "/wp-json/wa_tarot/v1/update/" +
          cardsSelectUpdate.value,
        "PUT",
        imageDBupdate,
        "La carte a bien été mise à jour",
        "Une erreur est survenu lors de la mise à jour de la carte",
        true
      );
    }
  });

  /**
   * au changement de valeur de l'input select de mise à jour
   */
  cardsSelectUpdate.addEventListener("change", (e) => {
    inputsOptions.forEach((element) => {
      if (element.id === e.target.value) {
        upCardNom.value = element.nom;
        upCardDescription.value = element.description;
        cardImgWAUpdate.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${element.imgDB}">`;
      }
    });
  });

  /**
   * au changement de valeur de l'input select de suppression
   */
  cardsSelectDelete.addEventListener("change", (e) => {
    inputsOptions.forEach((element) => {
      if (element.id === e.target.value) {
        cardTitleWaDelete.innerHTML = `<h3>${element.nom}</h3>`;
        cardImgWADelete.innerHTML = `<img class='imgCardWA'src="${document.location.origin}/wp-content/plugins/cartes-tarot-WA/assets/uploads/${element.imgDB}">`;
        cardDescriptionWADelete.innerHTML = `<p>${element.description}</p>`;
      }
    });
  });
  loadOptionsInput();
})();
