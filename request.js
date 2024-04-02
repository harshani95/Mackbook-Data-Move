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
    $(document).on('click', '.move-right', function(){
        var row = $(this).closest("tr");
        var text = row.find(".first-column").text();
        
        row.find(".first-column").css("visibility", "hidden");
        row.find(".third-column").text(text);
    });


    // Data moved to left
    $(document).on('click', '.move-left', function(){
        var row = $(this).closest("tr");
        var text = row.find(".third-column").text();
        
        row.find(".first-column").css("visibility", "visible").text(text);
        row.find(".third-column").text("");
    });

    });

