<?php


/* Get the name of the uploaded file */
$filename = $_FILES['img']['name'];

/* Choose where to save the uploaded file */
$location = '../assets/uploads/' .$filename;

/* Save the uploaded file to the local filesystem */
if ( move_uploaded_file($_FILES['img']['tmp_name'], $location) ) { 
  echo 'Success'; 
} else { 
  echo 'Failure'; 
}

?>