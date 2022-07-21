(()=>{

  
  /////////////////////////////////éléments du form création de carte ///////////////////////////
  let newCardName = document.getElementById("newCardNom");
  let newCardDescription = document.getElementById("newCardDescription");
  let newCardImg = document.getElementById("newCardImg");
  const create = document.getElementById("createButton");
  const createContainer = document.getElementById("create-container");
  //////////////////////////////////éléments du form update de carte /////////////////////
  let upCardNom = document.getElementById('upCardNom');
  const updateContainer = document.getElementById("update-container");
  const cardsSelectUpdate = document.getElementById('cardsSelectUpdate');
  ////////////////////////////////éléments du form delete
  const deleteContainer = document.getElementById("delete-container");
  
  ////////////////////////////////éléments généraux////////////////////////////////////////
  let cardsSelectDelete = document.getElementById('cardsSelectDelete');
  let buttons = document.querySelectorAll(".boutons");//boutons radios pour switch de formulaires
  let message = document.querySelector(".flash-messages");
  
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
  
  /**
   *permet l'update de la bdd pour une création ou une mise à jour
   * @param {*} img
   * @returns
   */
  async function updateDB(img, route, methode) {
    let formData = new FormData();
    formData.append("img", img.files[0]);
    fetch(
      route,
      {
        method: methode,
        body: formData,
      }
    )
      .then((res) => res.text())
      .then((data) => {
        if (data !== "Failure") {
          let donnees = {
            nom: newCardName.value,
            description: newCardDescription.value,
            img: newCardImg.files[0].name,
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
              message.innerHTML =
                '<p class="alert alert-success">La carte a bien été ajoutée</p>';
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
  
  
  
  create.addEventListener("click", function (e) {
    e.preventDefault();
    updateDB(newCardImg, document.location.origin + "/wp-content/plugins/cartes-tarot-WA/functions/ctWA-upload.php", "POST");
  });



  let path = document.location.origin + '/wp-json/wa_tarot/v1/read';
  fetch(path)
    .then(res => {
      return res.json()
    })
    .then((data) => {console.log([data]);
      
    createSelect(cardsSelectUpdate, data);}
    );

    function createSelect(select, options){
      console.log(typeof options);
      for (let option of options){
        console.log(option.nom);
        let element = document.createElement('input');
        element.value = option.nom;
        select.appendChild(element);
      }
    }
})()

