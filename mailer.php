<?php
if(isset($_POST['submit'])) {
$to = "josmavel@gmail.com, pilarcatunta@gmail.com, merinodavilam@gmail.com";
$subject = "Contacto desde Simetrika.pe";
 
// data the visitor provided
$name_field = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
$email_field = filter_var($_POST['email'], FILTER_VALIDATE_EMAIL);
$comment = filter_var($_POST['comment'], FILTER_SANITIZE_STRING);
$number = filter_var($_POST['phone'], FILTER_SANITIZE_NUMBER_INT);
 
//constructing the message
$body = " From: $name_field\n\n E-Mail: $email_field\n\n Telefono: $number\n\n ´Mensaje:\n\n $comment";
 
// ...and away we go!
mail($to, $subject, $body);
 
// redirect to confirmation
header('Location: confirmation.html');
} else {
// handle the error somehow
}
?>