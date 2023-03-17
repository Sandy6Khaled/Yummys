import { displayUI } from "./displayUI.js";
export class foodDetails {
  constructor(foodId) {
    this.eachfoodDetails(foodId);
    this.ui = new displayUI();
  }
  async eachfoodDetails(id) {
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const res = await api.json();
    $(".inner-loading-screen").fadeOut(400);
    // console.log(res.meals[0]);
    this.ui.displayEachMeal(res.meals[0]);
  }
}
