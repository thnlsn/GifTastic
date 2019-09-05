var searches = ["Superman", "Batman", "Spider-Man"];



$("#generate-button").click(function() {
    event.preventDefault()
    var search = $("#generate-form").val().trim();
    searches.push(search);
    renderButtons();

    // $("#button-container").prepend("<button data-character=" + '"Superman"' + ">Superman</button>");
});



console.log($("#numGifs").val().trim());














function renderButtons() {
    $("#button-container").empty();
    for (var i = 0; i < searches.length; i++) {
      var a = $("<button>");
      a.addClass("search-button");
      a.attr("data-character", searches[i]);
      a.text(searches[i]);
      $("#button-container").append(a);
    }
};



function addGifs() {
    //CODE TO ADD GIFS EQUAL TO THE NUMBER USER INPUTS
    var amount = $("#numGifs").val();
    console.log(amount);

    //for (var i = 0; i < amount);
};




// EVENTLISTENR This should applies to all generated buttons
$(document).on('click', ".search-button", function(){
    var name = $(this).data("character");
    console.log(name);
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=BS5fOBYxxU6oHWjuc6mYRkfGcio43Ih9";

    $.ajax({url:queryURL,method:"GET"})
        .done(function(response){
            console.log(response);
        });
});


































renderButtons();
















/* 



eventlistener on all buttons with class .search-button
- when those ar clicked run the function ADDGIFS

onclick for generate button
- when clicked run function ADDBUTTON

function ADDBUTTON
function to generate button based on text in form, with class of .search-button

function ADDGIFS
function to generate gifs equal to number inputted and of the topic on button



*/