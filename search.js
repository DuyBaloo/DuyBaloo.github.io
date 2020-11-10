function ingrediantSearch() {
	var searchString = "chicken,carrots,potatoes";
	var ingrediantArr = searchString.split(',');

	var ingrediantString = ingrediantArr.map(ingrediant => ingrediant + '%2C');

	let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/find" +
	"ByIngredients?number=5&ranking=1&ingredients=";

	requestString = requestString + ingrediantString;

	fetch(requestString, {
		"method": "GET",
		"headers": {
			"x-rapidapi-key": "1c21a777d3msh628208c1292df8fp188f2djsn6a46b7c57061",
			"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
		}
	})
	.then(response => {
		console.log(response.json());
	})
	.catch(err => {
		console.error(err);
	});

}

function recipeSearch() {
	var recipeString = "burger";

	let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/search?query=";

	requestString = requestString + recipeString;

	fetch(requestString, {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "1c21a777d3msh628208c1292df8fp188f2djsn6a46b7c57061",
		"x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com"
	}
	})
	.then(response => {
		console.log(response.json());
	})
	.catch(err => {
		console.error(err);
	});
}

document.getElementById("btn").addEventListener("click", ingrediantSearch, true);