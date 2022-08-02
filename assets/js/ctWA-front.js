(() => {
  onload = (event) => {
    let path = document.location.origin + "/wp-json/wa_tarot/v1/read";
    let cards = document.querySelectorAll('.cardT')
    let cardsBack = document.querySelectorAll('.cardT-back');
    cardsBack.forEach((cardBack) => {
      cardBack.style.background= "url("+document.location.origin+"/wp-content/plugins/cartes-tarot-WA/assets/uploads/back.jpg) center/cover"
    });
    cards.forEach((card) => {
      card.addEventListener('click', (e) => {
        card.style.transition = '1.5s ease'
        card.style.transform = 'translateY(250px)'
        card.style.opacity = '0'
        console.log('a');
      })
    })
    fetch(path)
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
   
      });

  };
})();
