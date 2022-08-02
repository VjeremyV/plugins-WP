(() => {
  onload = (event) => {
    let path = document.location.origin + "/wp-json/wa_tarot/v1/read";
    let cards = document.querySelectorAll(".card");
    let cardsContainer = document.querySelector('.cards');
    let numberOfCards;

    fetch(path)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        numberOfCards = data.length;
        console.log(cardsContainer);
        for(i=1; i <= numberOfCards; i++){
          let card = document.createElement('div');
          card.setAttribute('class', 'card');
          let cardFace = document.createElement('div');
          cardFace.setAttribute('class', 'card-face');
          card.appendChild(cardFace);
          cardsContainer.appendChild(card);
        }
      });

    console.log(cards);
  };
})();
