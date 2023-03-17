import { displayUI } from "./displayUI.js";
import { foodDetails } from "./foodDetails.js";

export class Ingredients {
  constructor() {
    this.ui = new displayUI();
  }
  async foodingredients() {
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?i=list`
    );
    const res = await api.json();
    console.log(res);
    $(".inner-loading-screen").fadeOut(400);
    // this.ui.displayAreasofFood(res);
    this.ui.displayIngredientsofFood(res.meals.slice(0, 20));
    this.event();
  }

  event() {
    document.querySelectorAll(".ingredient").forEach((e) => {
      e.addEventListener("click", () => {
        console.log(e);
        const getIngredient = e.dataset.set;
        console.log(getIngredient);
        this.getFoodsByingredient(getIngredient);
      });
    });
  }
  async getFoodsByingredient(ingredient){
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`
      );
      const res = await api.json();
      console.log(res);
    $(".inner-loading-screen").fadeOut(400);
      this.ui.displayEachCategoriesFood(res);
      this.eventid();
  }
  eventid(){
    document.querySelectorAll('.meal').forEach((e)=>{
      e.addEventListener('click',()=>{
        console.log(e);
        const getId=e.dataset.id;
        console.log(getId);
        this.getFoodDetails(getId);
      })
    })
  }
  getFoodDetails(foodId){
    const eachFoodDetail= new foodDetails(foodId);
    this.ui.closeSearchInputs();
  }
}
