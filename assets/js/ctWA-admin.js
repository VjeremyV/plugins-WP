let newCardName = document.getElementById("newCardNom");
let newCardDescription = document.getElementById("newCardDescription");
let newCardImg = document.getElementById("newCardImg");
let newCardImgDB = "z-";
let message = document.querySelector(".flash-messages");
const create = document.getElementById("createButton");
let buttons = document.querySelectorAll(".boutons");
const createContainer = document.getElementById("create-container");
const updateContainer = document.getElementById("update-container");
const deleteContainer = document.getElementById("delete-container");

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
 *
 * @param {*} img
 * @returns
 */
async function updateDB(img) {
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
  updateDB(newCardImg);
});
