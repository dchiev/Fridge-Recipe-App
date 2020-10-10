var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var searchButton = $("#button");



searchButton.on("click", function (event) {
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

  /*   $("#recipe").append(newRecipeName);
    $("#recipe").append(newRecipeImage);
 */

    var mealId = response.meals[0].idMeal
    console.log(mealId);


    var queryURLRecipe = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + mealId
    $.ajax({
      url: queryURLRecipe,
      method: "GET"
    }).then(function (response) {
      console.log(response);
      var newRecipeName = $("<h3>").text(response.meals[0].strMeal)
      var newRecipeImage = $("<img>").attr("src", response.meals[0].strMealThumb)
      var mealInstructions = $("<p>").text(response.meals[0].strInstructions);
      var foodCountry = $("<p>").text(response.meals[0].strArea);
      var ingredientList1 = $("<li>").text(response.meals[0].strIngredient1);
      var ingredientList2 = $("<li>").text(response.meals[0].strIngredient2);
      var ingredientList3 = $("<li>").text(response.meals[0].strIngredient3);
      var ingredientList4 = $("<li>").text(response.meals[0].strIngredient4);
      var ingredientList5 = $("<li>").text(response.meals[0].strIngredient5);
      var ingredientList6 = $("<li>").text(response.meals[0].strIngredient6);
      var ingredientList7 = $("<li>").text(response.meals[0].strIngredient7);
      var ingredientList8 = $("<li>").text(response.meals[0].strIngredient8);
      var ingredientList9 = $("<li>").text(response.meals[0].strIngredient9);
      var ingredientList10 = $("<li>").text(response.meals[0].strIngredient10);
      var ingredientList11 = $("<li>").text(response.meals[0].strIngredient11);


      $(".Recipe").append(newRecipeName);
      $(".Recipe").append(newRecipeImage);
      $(".Recipe").append(mealInstructions);
      $(".Recipe").append(foodCountry);
      $(".Recipe").append(ingredientList1);
      $(".Recipe").append(ingredientList2);
      $(".Recipe").append(ingredientList3);
      $(".Recipe").append(ingredientList4);
      $(".Recipe").append(ingredientList5);
      $(".Recipe").append(ingredientList6);
      $(".Recipe").append(ingredientList7);
      $(".Recipe").append(ingredientList8);
      $(".Recipe").append(ingredientList9);
      $(".Recipe").append(ingredientList8);
      $(".Recipe").append(ingredientList9);
      $(".Recipe").append(ingredientList10);
      $(".Recipe").append(ingredientList11);


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
      $(".Recipe").append(`<a href=${url}>${name}</a>`)
      var image = $("<img>").attr("src", thumbnail);
      $(".Recipe").append(image)
      $(".Recipe").append(`<img src=${thumbnail}>`)
    }

    )
  })
});

