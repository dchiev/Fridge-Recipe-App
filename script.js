var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var searchButton = $("button");


$(".search").on("click", function (event) {
  event.preventDefault();

  var ingredient1 = input1.val();
  var ingredient2 = input2.val();
  var ingredient3 = input3.val();
  // replace spaces from inputs

  var ingredients = ingredient1 + "," + ingredient2 + "," + ingredient3;
  ingredients.replace(/ /g, "_");

  var queryURL = "https://www.themealdb.com/api/json/v2/9973533/filter.php?i=" + ingredients

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    // display top recipe
    var newRecipeImage = ("<img>").attr("src", response.meals[0].strMealThumb)
    var newRecipeName = ("<h3>").text(response.meals[0].strMeal)

    $("#recipe").append(newRecipeName);
    newRecipeName.append(newRecipeImage);


    var mealId = response.meals[0].idMeal
  });

  var queryURLRecipe = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + mealId
  $.ajax({
    url: queryURLRecipe,
    method: "GET"
  }).then(function (response) {
    console.log(response);

    var mealInstructions = ("<p>").text(response.meals[0].strInstructions)
    // var foodCountry = ("<p>").text(response.meals[0].strArea);
    var ingredient1 = ("<li>").text(response.meals[0].strIngredient1)
    var ingredient2 = ("<li>").text(response.meals[0].strIngredient2)
    var ingredient3 = ("<li>").text(response.meals[0].strIngredient3)
    var ingredient4 = ("<li>").text(response.meals[0].strIngredient4)
    var ingredient5 = ("<li>").text(response.meals[0].strIngredient6)

    //initial search to generate recipe list

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

  )});
