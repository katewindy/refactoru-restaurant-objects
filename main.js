$(document).on('ready', function() {
  
});

var FoodItem = function (name, calories, vegan, glutenFree, citrusFree) {
	this.name = name;
	this.calories = calories;
	this.vegan = vegan;
	this.glutenFree = glutenFree;
	this.citrusFree = citrusFree;

	FoodItem.prototype.toString = function () {
		if (this.vegan) {
			var vegan = 'is';
		}
		else {
			var vegan = 'is not';
		}
		if (this.glutenFree) {
			var glutenFree = 'is';
		}
		else {
			var glutenFree = 'is not';
		}
		if (this.citrusFree) {
			var citrusFree = 'is';
		}
		else {
			var citrusFree = 'is not';
		}
		return 'This food is a ' + this.name + '.  It has ' + this.calories + ' calories. It ' + vegan + ' vegan. It ' + glutenFree + ' gluten free. It ' + citrusFree + ' citrus free.';
	};
};

var cookie = new FoodItem('cookie', 5000, false, false, false);
var burger = new FoodItem('burger', 200, true, true, true);
var fries = new FoodItem('fries', 40, false, true, true);

// console.log(cookie);

// console.log(cookie.toString());
// console.log(burger.toString());
// console.log(fries.toString());

var Drink = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	Drink.prototype.toString = function () {
		return 'This drink is a ' + this.name + '.  It is described as: ' + this.description + '. It costs $' + this.price + '. It contains ' + this.ingredients + '.';
	};
};

var Plate = function(name, description, price, ingredients) {
	this.name = name;
	this.description = description;
	this.price = price;
	this.ingredients = ingredients;

	Plate.prototype.toString = function () {
		return 'This plate is a ' + this.name + '.  It is described as: ' + this.description + '. It costs $' + this.price + '. It contains ' + this.ingredients + '.';
	};
};

var Order = function(plates) {
	this.plates = plates;

	// Order.prototype.toString = 
};

var Menu = function(plates) {
	this.plates = plates;

	Menu.prototype.toString = function(){
		var ingredientName = [];
		for (var i = 0; i < this.plates.length; i++){
			ingredientName.push(this.plates[i].name);
		}
		var menuString = 
	};
};

var Restaurant = function (name, description, menu){
	this.name = name;
	this.description = description;
	this.menu = menu;
};

var Customer = function(dietaryPreference) {
	this.dietaryPreference = dietaryPreference;
};



var ingredients = [burger.name, fries.name, cookie.name];

var testPlate = new Plate('Burger Plate', 'comes with a burger, fries and a cookie', 12.95, ingredients);

console.log(testPlate.toString());





var meat = new FoodItem('meat', 150, false, true, true);
var beans = new FoodItem('beans', 100, true, true, true);
var tortilla = new FoodItem('tortilla', 200, false, false, true);
var salsa = new	FoodItem('salsa', 200, true, true, false);
var avacado = new FoodItem('avacado', 250, true, true, true);
var tequila = new FoodItem('tequila', 400, true, true, true);
var margaritaMix = new FoodItem('margaritaMix', 300, true, true, true);

var burritoIngredients = [meat, beans, tortilla, salsa];
var guacIngredients = [meat, beans, tortilla, salsa, avacado];
var margaritaIngredients = [tequila, margaritaMix];

var burritoPlate = new Plate('burrito plate', 'a burrito on a plate', 10.95, burritoIngredients);
var guacPlate = new Plate('guacamole plate', 'burrito with guac', 11.95, guacIngredients);
var margarita = new Drink('margarita', 'just drink it', 1.00, margaritaIngredients);

var menuItems = [burritoPlate, guacPlate, margarita];

var restaurantMenu = new Menu(menuItems);

var someRestaurant = new Restaurant('Restaurant', 'cool place',restaurantMenu);

console.log(someRestaurant);





















