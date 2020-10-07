//initial search to generate recipe list

$(".search").on("click", function(event){
  event.preventDefault();

  var ingredients = $("#ingredients").val();
  var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients="+ ingredients+ "&number=5&apiKey=427db252e7484fb8be64ae2392879b2e";


$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);


    }

  );
});



  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chicken,rice,cheese&key=AIzaSyBo1tqJ0ySHIiCkSVqxphvMPpJrCSKDLYQ",
    method: "GET"
  }).then(function(response) {
    console.log(response);


    }

  );
