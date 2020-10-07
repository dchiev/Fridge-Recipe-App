
var queryURL = "https://www.themealdb.com/api/json/v1/1/filter.php?i=" + ingredients + // Whatever api key is ;

$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  // display top recipe
  // var newRecipeImage = ("<img>").attr("src", response.meals[0].strMealThumb)
  // var newRecipeName = ("<h3>").text(response.meals[0].strMeal)

  // var idMeal = response.meals[0].idMeal


  
  /* $.ajax({
    var queryURLRecipe = "https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772" + idMeal + // Whatever api key is ;
    url: queryURLRecipe,
    method: "GET"
  }).then(function(response) {
    console.log(response); */

    // var mealInstructions = ("<p>").text(response.meals[0].strInstructions)
    // var foodCountry = ("<p>").text(response.meals[0].strArea);
    // var ingredient1 = ("<li>").text(response.meals[0].strIngredient1)
    // var ingredient2 = ("<li>").text(response.meals[0].strIngredient2)
    // var ingredient3 = ("<li>").text(response.meals[0].strIngredient3)
    // var ingredient4 = ("<li>").text(response.meals[0].strIngredient4)
    // var ingredient5 = ("<li>").text(response.meals[0].strIngredient6)

    }


 

  
  
  

  );

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chicken,rice,cheese&key=AIzaSyBo1tqJ0ySHIiCkSVqxphvMPpJrCSKDLYQ",
    method: "GET"
  }).then(function(response) {
    console.log(response);


    }

  );
  