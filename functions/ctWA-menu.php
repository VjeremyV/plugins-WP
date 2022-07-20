<?php
wp_enqueue_style('ctWA-tarot-bootstrap-admin', 'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"');
wp_enqueue_style('ctWA-tarot-css-admin', trailingslashit(TAROT_PLUG_DIR) . 'assets/css/ctWA-admin.css', false, '1.0', 'all');

wp_enqueue_script(
  'ctWA-tarot-bootstrp-admin-js',
  'https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js',
  [],
  true
);
wp_enqueue_script(
  'ctWA-tarot-admin-js',
  trailingslashit(TAROT_PLUG_DIR) . 'assets/js/ctWA-admin.js',
  [],
  true
);


?>

<div class="wrap">
  <h1 class="text-center">Configuration Plugin Tarot</h1>
  <div class="container">
    <ul class="d-flex justify-content-center">
      <li class="m-2"><input type="radio" id="create" name="choice" value="Créer une carte" checked class="boutons"><label for="create">Créer une carte</label>
      </li>
      <li class="m-2"><input type="radio" id="update" name="choice" value="update" class="boutons"><label for="update">Modifier une carte</label></li>
      <li class="m-2"><input type="radio" id="delete" name="choice" value="delete" class="boutons"> <label for="delete">Supprimer une carte</label></li>
    </ul>

  </div>
  <div id='create-container' class='ctWA-containers'>
    <h2>Créer d'une carte</h2>
    <form id='create-form' class="form-group ctWA-forms" method="post">

      <label for="newCardNom" class="form-label">Nom de la carte</label>
      <input class="form-control" type="text" name="newCardNom" id="newCardNom">

      <label class="form-label" for="newCardDescription">Description de la carte</label>
      <textarea class="form-control" name="newCardDescription" id="newCardDescription"></textarea>

      <label class="form-label" for="newCardImg">Image de la carte</label>
      <input class="form-control" type="file" name="newCardImg" id="newCardImg">

      <button id='createButton' type="button" class="btn btn-primary my-3">créer</button>
    </form>
  </div>


  <div id='update-container' class='ctWA-containers'>
    <h2>Modifier d'une carte</h2>
    <div>
      <form id='up-form' class="form-group ctWA-forms">
      <select name="cardsSelectUpdate" id="cardsSelectUpdate">
        <option value="">--Choisissez la carte--</option>
      </select>

        <label for="upCardNom" class="form-label">Nom de la carte</label>
        <input class="form-control" type="text" name="upCardNom" id="upCardNom">

        <label class="form-label" for="upCardDescription">Description de la carte</label>
        <textarea class="form-control" name="upCardDescription" id="upCardDescription"></textarea>

        <label class="form-label" for="upCardImg">Image de la carte</label>
        <input class="form-control" type="file" name="upCardImg" id="upCardImg">

        <button id='updateButton' type="button" class="btn btn-primary my-3">mettre à jour</button>
      </form>
    </div>
    <hr />
    <div class="d-flex justify-content-center align-items-center">
      <h3>Aperçu</h3>
      <div classs='cardTitleWaUpdate'></div>
      <div class="cardImgWAUpdate"></div>
      <div class='cardDescriptionWAUpdate'></div>
    </div>
  </div>


  <div id='delete-container' class='ctWA-containers'>
    <h2>supprimer une carte</h2>
    <form id='delete-form' class="form-group ctWA-forms">
      <select name="cardsSelectDelete" id="cardsSelectDelete">
        <option value="">--Choisissez la carte--</option>
      </select>

      <button id='deleteButton' type="button" class="btn btn-primary my-3">supprimer</button>
    </form>
    <div class="d-flex justify-content-center align-items-center">
      <div classs='cardTitleWaDelete'></div>
      <div class="cardImgWADelete"></div>
      <div class='cardDescriptionWADelete'></div>
    </div>
  </div>
</div>

<div class='flash-messages text-center'></div>
