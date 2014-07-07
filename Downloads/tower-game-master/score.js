var myCards = [
    {
        "card1": {
            "id": "1",
            "red": "6",
            "blue": "0",
            "green": "4",
            "attack": "5",
            "image": "images/card1.png"
        },
        "card2": {
            "id": "2",
            "red": "8",
            "blue": "5",
            "green": "5",
            "attack": "8",
            "image": "images/card2.png"
        },
        "card3": {
            "id": "3",
            "red": "10",
            "blue": "0",
            "green": "0",
            "attack": "12",
            "image": "images/card3.png"
        }
    }
];

$(document).ready(function () {
    var red_val = 50;
    var blue_val = 50; // for blue
    var green_val = 50; // for green
    var red, blue, green;

    $('#red_score').text(red_val);
    $('#blue_score').text(blue_val);
    $('#green_score').text(green_val);

    $(".cards").click(function (event) {
        red = $(this).find('img').attr("data-val-red");
        blue = $(this).find('img').attr("data-val-blue");
        green = $(this).find('img').attr("data-val-green");


        var calRed = $('#red_score').text() - parseInt(red);
        var calBlue = $('#blue_score').text() - parseInt(blue);
        var calGreen = $('#green_score').text() - parseInt(green);

        console.log(calRed)
        if( (parseInt(calRed)<0) ){
            event.preventDefault();
            alert("not enough resources")
        }
        else{
            $("#red_score").text(calRed);
            $("#blue_score").text(calBlue);
            $("#green_score").text(calGreen);
        }

//        if ((calRed <= 50) && (calRed >= 40)) {
//
//            $("#tower_container2 img").attr('src', "images/right/Layer5.png");
//            $("#tower2").css({"height": "auto",
//                "width": "auto",
//                "bottom": "0%",
//                "position": "absolute"
//
//            });
//
//        }
//        else if ((calRed <= 39) && (calRed >= 30)) {
//            alert("bw 30 and 20");
//        }
//        else if ((calRed <= 29) && (calRed >= 10)) {
//            alert("bw 20 and 10");
//        }
//        else {
//            alert("Game over");
//        }

    });

});

