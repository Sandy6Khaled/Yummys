import { displayUI } from "./displayUI.js";
import { foodDetails } from "./foodDetails.js";
export class CategoryFood {
  constructor() {
    this.ui = new displayUI();
  }
  async foodCategory() {
    $(".inner-loading-screen").fadeIn(300);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/categories.php`
    );
    const res = await api.json();
    console.log(res);
    $(".inner-loading-screen").fadeOut(300);
    this.ui.displayCategory(res);
    this.event();
  }
  event(){
    document.querySelectorAll('.meal .meal-layer').forEach((e)=>{
        e.addEventListener('click',()=>{
            console.log(e);
            const target=[...e.getElementsByTagName('h3')];
            console.log(target);
            const attrTarget= target[0].id;
            console.log(attrTarget);
            this.getEachCategory(attrTarget);
      })
    })
  }
  async getEachCategory(Category){
    $(".inner-loading-screen").fadeIn(300);
    const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${Category}`
      );
      const res = await api.json();
      console.log(res);
      $(".inner-loading-screen").fadeOut(300);
      this.ui.displayEachCategoriesFood(res);
      this.eventid();

    //   this.ui.displayCategory(res);
    //   this.event();
  }
  eventid(){
    document.querySelectorAll('.meal').forEach((e)=>{
      e.addEventListener('click',()=>{
        console.log(e);
        const getId=e.dataset.id;
        console.log(getId);
        this.getFoodDetails(getId);
        // this.details(getId);
      })
    })
  }
  getFoodDetails(foodId){
    const eachFoodDetail= new foodDetails(foodId);
    this.ui.closeSearchInputs();
  }
}
