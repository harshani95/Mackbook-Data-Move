<?php
if(isset($_POST['text'])) {
    $text = $_POST['text'];
    $row = "<tr><td class='first-column'>$text</td><td><button class='move-right'> >></button></td><td class='third-column'></td></tr>";
    echo $row;
}
?>