$.ajax({
    url: "https://api.spoonacular.com/recipes/findByIngredients?ingredients=apples,+flour+sugar&number=5&apiKey=427db252e7484fb8be64ae2392879b2e",
    method: "GET"
  }).then(function(response) {
    console.log(response);


    }

  );

  $.ajax({
    url: "https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=chicken,rice,cheese&key=AIzaSyBo1tqJ0ySHIiCkSVqxphvMPpJrCSKDLYQ",
    method: "GET"
  }).then(function(response) {
    console.log(response);


    }

  );
  