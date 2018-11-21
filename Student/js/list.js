
$(document).ready(function(){
    $.getJSON( "cars", function( data ) {
        for (var i = 0; i < data.length; i++) {
            var car = data[i];
            $("#cars").append("<tr><td>"+ car.name +"</td>"+
                "<td>"+ car.consumption +"</td>"+
                "<td>"+ car.color +"</td>"+
                "<td>"+ car.manufacturer +"</td>"+
                "<td>"+ car.available +"</td>"+
                "<td>"+ car.year +"</td>"+
                "<td>"+ car.horsepower +"</td>"+
                "</tr>");
        }
    });
        $.getJSON( "manufacturers", function( data ) {
            for (var i = 0; i < data.length; i++) {
                var manufacturer = data[i];
                $("#manufacturers").append("<tr><td>"+ manufacturer.name +"</td>"+
                    "<td>"+ manufacturer.country +"</td>"+
                    "<td>"+ manufacturer.founded +"</td>"+
                    "</tr>");
            }
        });


});