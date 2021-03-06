var input1 = $("#input1");
var input2 = $("#input2");
var input3 = $("#input3");
var searchButton = $("#button");



searchButton.on("click", function (event) {
  event.preventDefault();
  $(".Recipe").empty();
  $("#recipe").show();
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
      $("#RecipeName").text(response.meals[0].strMeal)
      var newRecipeImage = $("<img>").attr("src", response.meals[0].strMealThumb);
      $("#instructionlabel").text("Instructions: ")
      $("#mealInstructions").text(response.meals[0].strInstructions);
      $("#RecipeCuisine").text("Country: ")
      $("#RecipeCountry").text(response.meals[0].strArea);
      $("#Ingredients").text("Ingredients: ");
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

      $("#recipe-img").append(newRecipeImage);
      $("#ingredientsList").append(ingredientList1);
      $("#ingredientsList").append(ingredientList2);
      $("#ingredientsList").append(ingredientList3);
      $("#ingredientsList").append(ingredientList4);
      $("#ingredientsList").append(ingredientList5);
      $("#ingredientsList").append(ingredientList6);
      $("#ingredientsList").append(ingredientList7);
      $("#ingredientsList").append(ingredientList8);
      $("#ingredientsList").append(ingredientList9);
      $("#ingredientsList").append(ingredientList10);



      /* $("#RecipeName").append(newRecipeName);
      // $("#recipe-img").append(newRecipeImage);
     $(".Recipe").append(instructionLabel);
      $("#mealInstructions").append(mealInstructions);
      $(".RecipeCuisine").append(foodCountry);
      $("#Ing") */



    });


    var RecipeName = response.meals[0].strMeal
    console.log(RecipeName)

    $.ajax({


      url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" + RecipeName + "&key=AIzaSyC1Xe-IzjAp8zLY0M09YXNCronqEYAL1ws",

      method: "GET"
    }).then(function (response) {
      console.log(response);

      var thumbnail = (response.items[0].snippet.thumbnails.default.url);
      var url = "https://youtube.com/watch?v=" + response.items[0].id.videoId
      var name = response.items[0].snippet.title
      console.log(response.items[0].snippet.thumbnails.default.url)
      console.log("youtube.com/watch?v=" + (response.items[0].id.videoId))

      $("#YoutubeVideo").append(`<a href=${url}>${name}</a>`)
      var image = $("<img>").attr("src", thumbnail);
      $("#YoutubeImg").append(`<img src=${thumbnail}>`)
    }
    )
  })
});

