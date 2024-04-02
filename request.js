$(document).ready(function(){

    // Insert Data
    $('#submit').click(function(){
        var text = $('#inputText').val();

        if(text.trim() !== "") {
            $.ajax({
                url:'insert.php',
                method:'post',
                data:{text:text},
                success:function(response){
                    $("#dataTable").append(response);
                    $("#inputText").val("");
                }
            });
        }
    });

    //  Data moved to right
    $(document).on('click', '#btn-move-right', function(){
        var row = $(this).closest("tr");
        var text = row.find(".first-column").text();
        $.ajax({
            url: "move.php",
            type: "POST",
            data: {action: "moveRight", text: text},
            success: function(response){
                row.find(".third-column").text(text);
                row.remove();
            }
        });
    });

    // Data moved to left
    $(document).on("click", ".move-left", function(){
        var row = $(this).closest("tr");
        var text = row.find(".third-column").text();
        $.ajax({
            url: "move.php",
            type: "POST",
            data: {action: "moveLeft", text: text},
            success: function(response){
                var newRow = "<tr><td class='first-column'>" + text + "</td><td><button class='move-right'> >></button></td><td class='third-column'></td></tr>";
                $("#dataTable").append(newRow);
                row.remove();
            }
        });
    });

});
