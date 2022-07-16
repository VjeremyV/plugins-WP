let newCardName = document.getElementById('newCardNom');
let newCardDescription = document.getElementById('newCardDescription');
let newCardImg = document.getElementById('newCardImg');
let message = document.querySelector('.flash-messages');
const create = document.getElementById('createButton');

/**
 * 
 * @param {*} img 
 * @returns 
 */
 function  uploadFiles(img){
  let formData = new FormData();           
  formData.append("img", img.files[0]);
   fetch(document.location.origin + '/wp-content/plugins/cartes-tarot-WA/functions/ctWA-upload.php', {
    method: "POST", 
    body: formData
  }).then(alert('The file has been uploaded successfully.'));    
  
}




create.addEventListener('click', (e) => {
  e.preventDefault()
  let data = {
    nom: newCardName.value,
    description: newCardDescription.value,
    img: newCardImg.files[0].name
  };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  fetch(document.location.origin + '/wp-json/wa_tarot/v1/write', options)
  .then((res) => {
    if(res.status === 200){
      uploadFiles(newCardImg);
            message.innerHTML = '<p class="alert alert-success">La carte a bien été ajoutée</p>';
    } else {
        message.innerText = 'Une erreur est survenu lors de l\'ajout de la carte';
        message.setAttribute('class', 'alert alert-danger');

    };
  });
})