// Search meal by name
// www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata
// List all meals by first letter
// www.themealdb.com/api/json/v1/1/search.php?f=a
// Lookup full meal details by id
// www.themealdb.com/api/json/v1/1/lookup.php?i=52772
// Lookup a single random meal
// www.themealdb.com/api/json/v1/1/random.php

// List all meal categories
// www.themealdb.com/api/json/v1/1/categories.php

// List all Categories, Area, Ingredients
// www.themealdb.com/api/json/v1/1/list.php?c=list
// www.themealdb.com/api/json/v1/1/list.php?a=list
// www.themealdb.com/api/json/v1/1/list.php?i=list
// Filter by main ingredient
// www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast

// Filter by Category
// www.themealdb.com/api/json/v1/1/filter.php?c=Seafood
// Filter by Area
// www.themealdb.com/api/json/v1/1/filter.php?a=Canadian

// console.log(rowFood);

// Must take a name from the user
// async function searchByFirstLetter() {
//   const api = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
//   );
//   const res = await api.json();
//   console.log(res);
// }
// // searchByFirstLetter();//Take first letter from the search inputs

// // foodDetails();//takes the id of the food
// async function allMeals() {
//   const api = await fetch(
//     "https://www.themealdb.com/api/json/v1/1/categories.php"
//   );
//   const res = await api.json();
//   console.log(res);
// }
// allMeals();//all Categories button
import { food } from "./food.js";
new food();


{
  /* <div class="col-md-3">
                <div onclick="getMealDetails('52977')" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="https://www.themealdb.com/images/media/meals/58oia61564916529.jpg" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>Corba</h3>
                    </div>
                </div>
        </div> */
}
