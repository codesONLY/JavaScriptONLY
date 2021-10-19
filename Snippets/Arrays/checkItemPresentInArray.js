/**
 * Problem: Checks whether the dish you wish to eat is available in the menu
 */

let polarBearMenu = [
  "Chocolate Fudge",
  "Death by chocolate",
  "Gudbud",
  "Fruit zest",
];

let isYourDishAvailable = false;
let itemYouWishToEat = "Gudbud";

for (let itemNumber = 0; itemNumber < polarBearMenu.length; itemNumber++) {
  if (polarBearMenu[itemNumber] === itemYouWishToEat) {
    console.log("Yay " + itemYouWishToEat + " is there in the menu");
    isYourDishAvailable = true;
    break;
  } else {
    isYourDishAvailable = false;
  }
}

if (!isYourDishAvailable) {
  console.log("Oops! " + itemYouWishToEat + " is not available. Try searching at a different place.");
}
