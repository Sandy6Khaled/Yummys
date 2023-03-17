import { displayUI } from "./displayUI.js";
import { foodDetails } from "./foodDetails.js";
export class Area {
  constructor() {
    this.ui = new displayUI();
  }
  async foodarea() {
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/list.php?a=list`
    );
    const res = await api.json();
    console.log(res);
    $(".inner-loading-screen").fadeOut(400);
    this.ui.displayAreasofFood(res);
    this.event();
  }

  event() {
    document.querySelectorAll(".area").forEach((e) => {
      e.addEventListener("click", () => {
        console.log(e);
        const getarea = e.dataset.set;
        console.log(getarea);
        this.getFoodsinArea(getarea);
        // this.details(getId);
      });
    });
  }
  async getFoodsinArea(area){
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`
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
        // this.details(getId);
      })
    })
  }
  getFoodDetails(foodId){
    const eachFoodDetail= new foodDetails(foodId);
    this.ui.closeSearchInputs();
  }
}
