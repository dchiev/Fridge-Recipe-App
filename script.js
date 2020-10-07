//initial search to generate recipe list

$(".search").on("click", function (event) {
  event.preventDefault();

  var ingredients = $("#ingredients").val();
  var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&number=5&apiKey=427db252e7484fb8be64ae2392879b2e";


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);


  }

  );
});



$.ajax({
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chicken,rice,cheese&key=AIzaSyBo1tqJ0ySHIiCkSVqxphvMPpJrCSKDLYQ",
  method: "GET"
}).then(function (response) {
  console.log(response);
  var createDiv = $("<div>")

  var thumbnail = $("<img>").text(response.items[0].snippet.thumbnails.default.url);
  console.log(response.items[0].snippet.thumbnails.default.url)
  var url = $(".recipe").href("youtube.com/watch?v=" + (response.items[0].id.videoId))
  console.log("youtube.com/watch?v=" + (response.items[0].id.videoId))

  createDiv.append(thumbnail, url);
  $(".recipe").html("<h1>" + url + "</h1>");
}

);
