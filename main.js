$(document).on('ready', function() {
  
});
// Create a food item
var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

	FoodItem.prototype.toString = function () {
		if (this.vegan) {
			var vegan = 'Yes';
		}
		else {
			var vegan = 'No';
		}
		if (this.glutenFree) {
			var glutenFree = 'Yes';
		}
		else {
			var glutenFree = 'is not';
		}
		if (this.citrusFree) {
			var citrusFree = 'Yes';
		}
		else {
			var citrusFree = 'No';
		}
		return '\n' + this.name + '\nCalories: ' + this.calories + '\nVegan: ' + vegan + '\nGluten Free: ' + glutenFree + '\nCitrus Free: ' + citrusFree;
	};
};

//Create a drink item
var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	Drink.prototype.toString = function () {

		var ingredientNames = '\n';
		for (var i = 0; i < this.ingredients.length; i++){
			ingredientNames = ingredientNames + this.ingredients[i].name + '\n';
		};
		
		return '\n' + this.name + '\n' + this.description + '\n$' + this.price + '\nIngredients: ' + ingredientNames;
	};

	Drink.prototype.isVegan = function () {
		for (var i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].vegan !== true){
				return false;
			};
		};
		return true;
	};

	Drink.prototype.isGlutenFree = function () {
	for (var i = 0; i < this.ingredients.length; i++){
		if (this.ingredients[i].glutenFree !== true){
			return false;
		};
	};
	return true;
	};

	Drink.prototype.isCitrusFree = function () {
		for (var i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].isCitrusFree !== true){
				return false;
			};
		};
		return true;
	};
};

// Create a plate object
var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	Plate.prototype.toString = function () {
		var ingredientNames = '\n';
		for (var i = 0; i < this.ingredients.length; i++){
			ingredientNames = ingredientNames + this.ingredients[i].name + '\n';
		};
		return '\n' + this.name + '\n' + this.description + '\n$' + this.price + '\nIngredients: ' + ingredientNames;
	};

	Plate.prototype.isVegan = function () {
		for (var i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].vegan !== true){
				return false;
			};
		};
		return true;
	};

	Plate.prototype.isGlutenFree = function () {
		for (var i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].glutenFree !== true){
				return false;
			};
		};
		return true;
	};

	Plate.prototype.isCitrusFree = function () {
		for (var i = 0; i < this.ingredients.length; i++){
			if (this.ingredients[i].isCitrusFree !== true){
				return false;
			};
		};
		return true;
	};
};

//constructor for orders
var Order = function(plates) {
	this.plates = plates;
};
//constructor for menus 
var Menu = function(plates) {
	this.plates = plates;

	Menu.prototype.toString = function(){
		var ingredientName = [];
		for (var i = 0; i < this.plates.length; i++){
			ingredientName.push(this.plates[i].name);
		}
		console.log(ingredientName);
		var menuString = "Plates offered: " + ingredientName;
		console.log(menuString);
	};
};
// Constructor for restaurants
var Restaurant = function (name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;

	Restaurant.prototype.toString = function () {
		var plateNames = '\n';
		for (var i = 0; i < this.menu.plates.length; i++){
			plateNames = plateNames + this.menu.plates[i].name + '\n';
		};
		return 'Welcome to ' + this.name + '.  The available plates are: ' + plateNames;
	};

	Restaurant.prototype.create = function () {
		return $('<h1 class="restaurantName">').text(this.name);
	};
};

// Constructor for customers
var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};


// Creating ingredients
var meat = new FoodItem('meat', 150, false, true, true);
var beans = new FoodItem('beans', 100, true, true, true);
var tortilla = new FoodItem('tortilla', 200, false, false, true);
var salsa = new	FoodItem('salsa', 200, true, true, false);
var avacado = new FoodItem('avacado', 250, true, true, true);
var tequila = new FoodItem('tequila', 400, true, true, true);
var margaritaMix = new FoodItem('margarita mix', 300, true, true, true);


// Making ingredients into arrays because yeah, we are
var burritoIngredients = [meat, beans, tortilla, salsa];
var guacIngredients = [meat, beans, tortilla, salsa, avacado];
var margaritaIngredients = [tequila, margaritaMix];


//create Plates
var burritoPlate = new Plate('burrito plate', 'a burrito on a plate', 10.95, burritoIngredients);
var guacPlate = new Plate('guacamole plate', 'burrito with guac', 11.95, guacIngredients);

//create drink
var margarita = new Drink('margarita', 'just drink it', 1.00, margaritaIngredients);

//create array of menu items
var menuItems = [burritoPlate, guacPlate, margarita];

//create new menu
var restaurantMenu = new Menu(menuItems);

//create restaurant!  YAYYYYYYYYY!
var someRestaurant = new Restaurant('Neato Restaurant', 'cool place',restaurantMenu);

console.log(someRestaurant);





















