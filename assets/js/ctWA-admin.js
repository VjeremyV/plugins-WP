let newCardName = document.getElementById('newCardNom');
let newCardDescription = document.getElementById('newCardDescription');
let newCardImg = document.getElementById('newCardImg');
let message = document.querySelector('.flash-messages');
const submit = document.getElementById('createButton');

submit.addEventListener('click', (e) => {
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
        message.innerHTML = '<p class="alert alert-success">La carte a bien été ajoutée</p>';
    } else {
        message.innerText = 'Une erreur est survenu lors de l\'ajout de la carte';
        message.setAttribute('class', 'alert alert-danger');

    };
  });
})