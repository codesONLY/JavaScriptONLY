/**
 * Problem: Checks whether pizza is available in the menu
 */

let polarBearMenu = [
  "Chocolate Fudge",
  "Death by chocolate",
  "Gudbud",
  "Fruit zest",
];

let isPizzaAvailable = false;
let itemYouWishToEat = "Gudbud";

for (let itemNumber = 0; itemNumber < polarBearMenu.length; itemNumber++) {
  if (polarBearMenu[itemNumber] === itemYouWishToEat) {
    console.log("Yay " + itemYouWishToEat + " is there in the menu");
    isPizzaAvailable = true;
    break;
  } else {
    isPizzaAvailable = false;
  }
}

if (isPizzaAvailable === false) {
  console.log("Oops! " + itemYouWishToEat + " is not available. Try searching at a different place.");
}
