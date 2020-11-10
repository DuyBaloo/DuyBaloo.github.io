function ingrediantSearch(input) {
	console.log("Hello from Ingrediant");
	var searchString = input;
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
	
	console.log("Done with ingrediant");
}

function recipeSearch(input) {
	console.log("Hello from Recipe");
	var recipeString = input;

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
	
	console.log("Done with recipe");
}

function questionSearch(input) {
	console.log("Hello from Question");
	var sentenceString = input;
	var encString = encodeURIComponent(sentenceString);

	let requestString = "https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/quickAnswer?q=";

	requestString = requestString + encString;

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
		console.log("Done with question");
}


function search() {
	var searchString = document.getElementById("searchInput").value.toString();
	let value = "";

	for (i = 0; i < document.getElementsByName("customRadio").length; i++) {
		if (document.getElementsByName("customRadio")[i].checked) {
			value = document.getElementsByName("customRadio")[i].value.toString();
		}
	}

	console.log("Radio button value: " + value);
	console.log("Search value: " + searchString);

	if (value === "Ingrediant") {
		ingrediantSearch(searchString);
	}
	else if (value === "Recipe") {
		recipeSearch(searchString);
	}
	else if (value === "Question") {
		questionSearch(searchString);
	}
}
document.getElementById("searchForm").addEventListener("submit", search, true);

document.getElementById("btn").addEventListener("click", function(){ ingrediantSearch("apple"); });
document.getElementById("btn2").addEventListener("click", function(){ recipeSearch("chicken"); });
document.getElementById("btn3").addEventListener("click", function(){ questionSearch("How much vitamin C is in an apple?"); });