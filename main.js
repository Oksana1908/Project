$(document).ready(function() {
    $("#call").click(function (){
        $("#bot").show();
    });
    $("#icon").click(function () {
        let a = $("#bot");
        a[0].action = "";
        $(".bot").hide();
    });
});

