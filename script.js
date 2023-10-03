$(document).ready(function (){
    $("#dm").on("click", function(){
        if($(this).prop("checked")){
            $("header").css({"background-color": "#3498db", "color": "white"});
            $("footer").css({"background-color": "#004400", "color": "#ccffcc"});
            $("body").css({"background-color": "#444400"});
            $("#dm_lable").text("⛅");
        } 
        else{
            $("header").css({ "background-color":"white", "color": "#3498db"});
            $("footer").css({"background-color": "#ccffcc", "color": "#116611"});
            $("body").css({"background-color": "#eeeeaa"});
            $("#dm_lable").text("♌");        
        }       
    });

    const currentTime = new Date().getHours();
    if(currentTime >= 6 && currentTime < 18) {
        $("body").css("background-color", "#fffacd");
    } 
    else{
        $("body").css("background-color", "#191970");
    }

    $("#mybutton").hover(
        function () {
            $(this).text("Click Me");
        },
        function () {
           $(this).text("Hover Over Me");
        }
    );

    $("#mybutton").on("click", function(){
        alert("Button clicked!");
    });
});
