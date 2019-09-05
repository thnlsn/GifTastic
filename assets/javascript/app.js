//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

var searches = ["Superman", "Batman", "Spider-Man"];

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

$("#generate-button").click(function() {
    event.preventDefault()
    var search = $("#generate-form").val().trim();
    searches.push(search);
    renderButtons();

    // $("#button-container").prepend("<button data-character=" + '"Superman"' + ">Superman</button>");
});

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

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

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

// EVENTLISTENR This should applies to all generated buttons
$(document).on('click', ".search-button", function(){
    var name = $(this).data("character");
    console.log(name);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + name + "&api_key=BS5fOBYxxU6oHWjuc6mYRkfGcio43Ih9";

    $.ajax({
        url:queryURL,
        method:"GET"
    })
        .done(function(response){
            console.log(response);

            //RUN THE ADDGIFS FUNCTION
            var amount = $("#numGifs").val();
            console.log(amount);
            $("#gif-container").empty();
        
            for (var i = 0; i < amount; i++) {


                //<div><img src="" alt=""></div>

/*                 $("#gif-container").append(response.data[i].images.fixed_height.url); */

                var characterDiv = $("<div>");
                var p = $("<p>").text("Rating: " + response.data[i].rating);
                var characterGif = $("<img>");
                characterGif.attr('src',response.data[i].images.fixed_height.url);
                characterDiv.append(p);
                characterDiv.append(characterGif);
                console.log(response.data[i].images.fixed_height.url)
                $("#gif-container").append(characterDiv);
                

















                /*                 console.log(response.data[i].url)
                gifUrl = response.data[i];
                gif.attr("src", gifUrl);
                gif.attr("alt", "gif");
                $("#button-container").prepend(gif); */

/*                 var imageUrl = response.data.image_original_url;

                //
                var catImage = $("<img>");
      
                //
                catImage.attr("src", imageUrl);
                catImage.attr("alt", "cat image");
      
                //
                $("#gif-container").prepend(catImage); */
            }
        });
        
});

//▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

































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