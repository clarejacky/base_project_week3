/**
 * Created by ClareJacky on 4/30/15.
 */
var cityData = null;
var cityHtml = null;


$(document).ready(function(){
    console.log(cityData, cityHtml);
    //$.get
    //$.ajax
    $("#get-info-btn").on("click", function (){
        if (cityHtml == null) {
            $.get('location.html', function(data) {
                cityHtml = data;
                console.log("it worked");
                $(".more-stuff").append(data);
            });
        } else {
            console.log ("you already got it");
        }



            $.get('data.json', function(data){
                console.log("second");
                var firstCity = data.locations[0].location;
                $(".more-stuff").children().children().append("<p>"+firstCity+"</p>");
            });

    });





});