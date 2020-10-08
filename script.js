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
  url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chicken,rice,cheese&key=AIzaSyAnyIr0SyrbaQETex7dGCU_nF8Sv_foBRU",
  method: "GET"
}).then(function (response) {
  console.log(response);

  var thumbnail = (response.items[0].snippet.thumbnails.default.url);
  var url = "https://youtube.com/watch?v=" + response.items[0].id.videoId
  var name = response.items[0].snippet.title
  console.log(response.items[0].snippet.thumbnails.default.url)
  console.log("youtube.com/watch?v=" + (response.items[0].id.videoId))

  $(".Recipe").append(`<a href=${url}>${name}</a>`)
  var image = $("<img>").attr("src", thumbnail);
  $(".Recipe").append(image)
  $(".Recipe").append(`<img src=${thumbnail}>`)
}

);
