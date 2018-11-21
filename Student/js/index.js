$(document).ready(function() {
    $("#letters").hide().show(3000);
    $("#stuff").load("home.html");
    get_M_Names();

    $('.menuButton, .menuButton1, .menuButton2, .menuButton3').hover(function () {
            $(this).css("color", "gold");
        },
        function () {
            $(this).css("color", "burlywood");
        });


    $('.menuButton').click(function () {
        $("#stuff").empty()
            .animate({width: '72%', height: '400px'}, "slow")
            .promise().done(function() {
            $("#stuff").load("home.html");
        get_M_Names();
        });
    });

    $('.menuButton1').click(function(){
        $("#stuff").empty()
            .animate({width: '26%', height: '380px'}, "slow")
            .promise().done(function() {
            $("#stuff").load("carAddy.html");
        });
    });

    $('.menuButton2').click(function(){
        $("#stuff").empty()
           .animate({width: '25%', height: '350px'}, "slow")
            .promise().done(function() {
            $("#stuff").load("manufacturerAddy.html");
       });
    });

    $('.menuButton3').click(function(){
        // var hh = $("#cuccos").height();
        $("#stuff").empty()
            .animate({width: '85%', height: '110px'}, "slow")
            .promise().done(function() {
            $("#stuff").load("list.html");

        })
    });
});


function get_M_Names() {
    $.getJSON("manufacturers", function( data ) {
        for (var i = 0; i < data.length; i++) {
            var manufacturer = data[i];
            $(" .SelectM").append("<option value='"+ manufacturer.name +"'>"+ manufacturer.name +"</option>");
        }
    });
}
function M_NameCooki(name, value) {
    document.cookie = name + "=" + value + ";path=/manufacturer";
}

function M_NameCookiGo(event) {
    event.preventDefault();
    M_NameCooki("name" , $(".SelectM option:selected").text());
    $.getJSON("/manufacturer", function( data ) {
        $("#insertCarHere").html("<tr><th>Név</th>" +
            "<th>Fogyasztás</th>" +
            "<th>Szín</th>" +
            "<th>Raktáron</th>" +
            "<th>Évjárat</th>" +
            "<th>Lóerő</th>" +
            "</tr>");
        for (var i = 0; i < data.length; i++) {
            var car = data[i];
            $("#insertCarHere").append("<tr><td>"+ car.name +"</td>"+
                "<td>"+ car.consumption +"</td>"+
                "<td>"+ car.color +"</td>"+
                "<td>"+ car.available +"</td>"+
                "<td>"+ car.year +"</td>"+
                "<td>"+ car.horsepower +"</td>"+
                "</tr>");
        }
    });
}

function addCar(event){
    event.preventDefault();
    var formdata = {
        'name' : $('input[name=name]').val(),
        'consumption' : $('input[name=consumption]').val(),
        'color' : $('input[name=color]').val(),
        'manufacturer' : $('input[name=manufacturer]').val(),
        'year' : $('input[name=year]').val(),
        'available' : $('input[name=available]').val(),
        'horsepower' : $('input[name=horsepower]').val()
    };
    $.post( "/addCar", formdata, function( data ) {
    }, "json");
    return false;
}

function addM(event){
    event.preventDefault();
    var month = $('select[name=month]').val();
    var day = $('input[name=day]').val();
    var year = $('input[name=year]').val();
    console.log(month);
    var formdata = {
        'name' : $('input[name=name]').val(),
        'country' : $('input[name=country]').val(),
        'founded' : (month + " " + day + "," + year)
    };

    $.post( "/addManufacturers", formdata, function( data ) {
    }, "json");
    return false;
}