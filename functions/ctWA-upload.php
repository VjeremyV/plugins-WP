<?php

$extensions= ['jpg', 'jpeg', 'png', 'wepb', 'PNG'];
/* Get the name of the uploaded file */
$filename = $_FILES['img']['name'];
$info= new SplFileInfo($filename);
$fileExtension = $info->getExtension();

if(in_array($fileExtension, $extensions)){
    $dir = '../assets/uploads/';
    $files = glob("dossier/*.*");
    $compteur = count($files);
    $countFile = $compteur+1;
    $date = date('YmdHms');

    /* Choose where to save the uploaded file */
    $location = '../assets/uploads/' .$filename;
    
    /* Save the uploaded file to the local filesystem */
    if ( move_uploaded_file($_FILES['img']['tmp_name'], '../assets/uploads/'.$date.$countFile.'.'.$fileExtension) ) { 
      echo $date.$countFile.'.'.$fileExtension; 
    } else { 
      echo 'Failure'; 
    }
} else {
  echo 'Failure';
}

?>