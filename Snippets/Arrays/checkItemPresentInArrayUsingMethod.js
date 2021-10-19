/**
 * Problem: Checks whether pizza is available in the menu
 */

let polarBearMenu = [
  "Chocolate Fudge",
  "Death by chocolate",
  "Gudbud",
  "Fruit zest",
];

let itemYouWishToEat = "Gudbud";

if (polarBearMenu.includes(itemYouWishToEat)) {
	console.log(itemYouWishToEat + " is present in the menu ");
} else {
	console.log(itemYouWishToEat + " is not present in the menu");
}