/**
 * Created by ClareJacky on 4/30/15.
 */
var cityData;
var cityHtml;


var i = 0;

function getData () {

    for (i = 0; i < cityData.cities.length; i++) {
        $(".more-stuff").append(cityHtml);

        var locationNames = cityData.cities[i].location;
        var locationPops = cityData.cities[i].population;
        var locationAreas = cityData.cities[i].area;
        $(".more-stuff").children().children().first().append("<p>" + locationNames + "</p>");
        $(".more-stuff").children().children().first().append("<p>" + locationPops + "</p>");
        $(".more-stuff").children().children().first().append("<p>" + locationAreas + "</p>");

    }
}

$(document).ready(function(){
    $.get('data.json', function (data) {
        cityData = data;
        console.log(cityData);

    });
    $.get('location.html', function (data) {
        cityHtml = data;
        console.log(data);

    });


        $("#get-info-btn").on("click", function () {
            getData();
        });


    $(".more-stuff").on("click", "#remove", function () {
        $(this).closest().parent().empty();
    });
});


//tokyoName = data.locations[0].location;
//tokyoPop = data.locations[0].population;
//tokyoArea = data.locations[0].area;