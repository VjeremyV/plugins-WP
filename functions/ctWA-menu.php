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
  <div class='flash-messages'></div>
  <div id='create-container' class='ctWA-containers'>
    <h2>Créer d'une carte</h2>
    <form id='create-form' class="form-group ctWA-forms"  method="post">

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
    <form id='up-form' class="form-group ctWA-forms">
      <label for="upCardNom" class="form-label">Nom de la carte</label>
      <input class="form-control" type="text" name="upCardNom" id="upCardNom">

      <label class="form-label" for="upCardDescription">Description de la carte</label>
      <textarea class="form-control" name="upCardDescription" id="upCardDescription"></textarea>

      <label class="form-label" for="upCardImg">Image de la carte</label>
      <input class="form-control" type="file" name="upCardImg" id="upCardImg">

      <button id='updateButton' type="button" class="btn btn-primary my-3">mettre à jour</button>
    </form>
  </div>


  <div id='delete-container' class='ctWA-containers'>
    <h2>supprimer une carte</h2>
    <form id='delete-form' class="form-group ctWA-forms">
      <label for="deleteCardNom" class="form-label">Nom de la carte</label>
      <input class="form-control" type="text" name="deleteCardNom" id="deleteCardNom">

      <label class="form-label" for="deleteCardDescription">Description de la carte</label>
      <textarea class="form-control" name="deleteCardDescription" id="deleteCardDescription"></textarea>

      <label class="form-label" for="deleteCardImg">Image de la carte</label>
      <input class="form-control" type="file" name="deleteCardImg" id="deleteCardImg">

      <button id='deleteButton' type="button" class="btn btn-primary my-3">supprimer</button>
    </form>
  </div>
</div>