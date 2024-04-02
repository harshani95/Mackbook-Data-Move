<?php
if(isset($_POST['action']) && isset($_POST['text'])) {
    $action = $_POST['action'];
    $text = $_POST['text'];
    if($action === "moveRight") {
        // Do whatever you need to do when moving right
        echo "Moved to right";
    } elseif($action === "moveLeft") {
        // Do whatever you need to do when moving left
        echo "Moved to left";
    }
}
?>
