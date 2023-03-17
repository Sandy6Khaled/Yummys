import { displayUI } from "./displayUI.js";
import { foodDetails } from "./foodDetails.js";
import { CategoryFood } from "./category.js";
import { Area } from "./area.js";
import { Ingredients } from "./ingredients.js";
export class food {
  constructor() {
    this.closeNav();
    $(document).ready(() => {
      this.searchByName(" ").then(() => {
        $(".loading-screen").fadeOut(400);
        // $("body").css("overflow", "visible");
      });
    });
    $(".side-nav-menu i.open-close-icon").click(() => {
      if ($(".side-nav-menu").css("left") == "0px") {
        this.closeNav();
      } else {
        this.openNav();
      }
    });
    this.categoryLinkaction = new CategoryFood();
    $("#category").click(() => {
      this.categoryLinkaction.foodCategory();
      this.closeNav();
      this.ui.closeSearchInputs();
    });
    this.areaLinkaction = new Area();
    $("#area").click(() => {
      this.areaLinkaction.foodarea();
      this.closeNav();
      this.ui.closeSearchInputs();
    });
    this.ingredientsLinkaction = new Ingredients();
    $("#ingredients").click(() => {
      this.ingredientsLinkaction.foodingredients();
      this.closeNav();
      this.ui.closeSearchInputs();
    });
    $("#search").click(() => {
      this.ui.showSearchInputs();
      this.closeNav();
      this.searchByName("");
      $("#search-by-name").keyup((e) => {
        this.searchByName(e.target.value);
      });
      $("#search-by-firstLetter").keyup((e) => {
        if (e.target.value == "") {
          this.searchByFirstName("a");
        } else {
          this.searchByFirstName(e.target.value);
        }
      });
    });
    $("#contact").click(() => {
      this.ui.showContacts();
      this.closeNav();
      this.ui.closeSearchInputs();
      $("#nameInput").keyup(() => {
        this.ui.inputsValidation();
      });
      $("#emailInput").keyup(() => {
        this.ui.inputsValidation();
      });
      $("#phoneInput").keyup(() => {
        this.ui.inputsValidation();
      });
      $("#ageInput").keyup(() => {
        this.ui.inputsValidation();
      });
      $("#passwordInput").keyup(() => {
        this.ui.inputsValidation();
      });
      $("#repasswordInput").keyup(() => {
        this.ui.inputsValidation();
      });
    });
    this.ui = new displayUI();
  }
  openNav() {
    $(".open-close-icon").removeClass("fa-align-justify");
    $(".open-close-icon").addClass("fa-x");
    $(".side-nav-menu").animate(
      {
        left: 0,
      },
      500
    );
    for (let i = 0; i < 5; i++) {
      $(".links li")
        .eq(i)
        .animate(
          {
            top: 0,
          },
          (i + 5) * 100
        );
    }
  }

  closeNav() {
    let boxWidth = $(".side-nav-menu .nav-tab").outerWidth();
    $(".open-close-icon").removeClass("fa-x");
    $(".open-close-icon").addClass("fa-align-justify");
    $(".side-nav-menu").animate(
      {
        left: -boxWidth,
      },
      0
    );
    $(".links li").animate(
      {
        top: 300,
      },
      500
    );
  }
  async searchByFirstName(foodLetter) {
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=${foodLetter}`
    );
    const res = await api.json();
    console.log(res);
    $(".inner-loading-screen").fadeOut(400);
    this.ui.displayData(res);
    this.event();
  }
  async searchByName(foodName) {
    $(".inner-loading-screen").fadeIn(400);
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`
    );
    const res = await api.json();
    console.log(res);
    $(".inner-loading-screen").fadeOut(400);
    this.ui.displayData(res);
    this.event();
  }
  event() {
    document.querySelectorAll(".meal").forEach((e) => {
      e.addEventListener("click", () => {
        console.log(e);
        const getId = e.dataset.id;
        console.log(getId);
        this.getFoodDetails(getId);
        // this.details(getId);
      });
    });
  }
  getFoodDetails(foodId) {
    const eachFoodDetail = new foodDetails(foodId);
    this.ui.closeSearchInputs();
  }
}
