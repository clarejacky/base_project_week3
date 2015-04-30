/**
 * Created by ClareJacky on 4/30/15.
 */
var cityData = null;
var cityHtml = null;

var tokyoName;
var tokyoPop;
var tokyoArea;

var newyorkName;
var newyorkPop;
var neworkArea;

var torontoName;
var torontoPop;
var torontoArea;

$(document).ready(function(){

    $("#get-info-btn").on("click", function (){
            $.get('location.html', function(data) {
                cityHtml = data;
                $(".more-stuff").append(data);
            });

            $.get('data.json', function(data){
                cityData = data;
                tokyoName = data.locations[0].location;
                tokyoPop = data.locations[0].population;
                tokyoArea = data.locations[0].area;
                $(".more-stuff").children().first().append("<p>"+tokyoName+"</p>");
                $(".more-stuff").children().first().append("<p>"+tokyoPop+"</p>");
                $(".more-stuff").children().first().append("<p>"+tokyoArea+"</p>");

                tokyoName = data.locations[0].location;
                tokyoPop = data.locations[0].population;
                tokyoArea = data.locations[0].area;

            });

        //best to change scope with variable


    });

    $(".more-stuff").on("click", "#remove", function () {
        $(this).parent().parent().empty();
    });
});