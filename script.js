

// var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredients + // Whatever api key is ;

// $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response);
//   // display top recipe
//   // var newRecipeImage = ("<img>").attr("src", response.meals[0].strMealThumb)
//   // var newRecipeName = ("<h3>").text(response.meals[0].strMeal)

//   // var idMeal = response.meals[0].idMeal


  
//   /* $.ajax({
//     var queryURLRecipe = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + idMeal + // Whatever api key is ;
//     url: queryURLRecipe,
//     method: "GET"
//   }).then(function(response) {
//     console.log(response); */

//     // var mealInstructions = ("<p>").text(response.meals[0].strInstructions)
//     // var foodCountry = ("<p>").text(response.meals[0].strArea);
//     // var ingredient1 = ("<li>").text(response.meals[0].strIngredient1)
//     // var ingredient2 = ("<li>").text(response.meals[0].strIngredient2)
//     // var ingredient3 = ("<li>").text(response.meals[0].strIngredient3)
//     // var ingredient4 = ("<li>").text(response.meals[0].strIngredient4)
//     // var ingredient5 = ("<li>").text(response.meals[0].strIngredient6)

// //initial search to generate recipe list

// $(".search").on("click", function (event) {
//   event.preventDefault();


//   var ingredients = $("#ingredients").val();
//   var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=" + ingredients + "&number=5&apiKey=427db252e7484fb8be64ae2392879b2e";
// });



//   $.ajax({
//     url: queryURL,
//     method: "GET"
//   }).then(function (response) {
//     console.log(response);


//   }

//   );
// });



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
