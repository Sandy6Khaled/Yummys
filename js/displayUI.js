export class displayUI {
  constructor() {
    this.rowFood = document.getElementById("foodRow");
    // this.details = new foodDetails();
    this.searchContainer = document.getElementById("searchContainer");

    this.nameInputTouched = false;
    this.emailInputTouched = false;
    this.phoneInputTouched = false;
    this.ageInputTouched = false;
    this.passwordInputTouched = false;
    this.repasswordInputTouched = false;
  }
  //onkeyup="searchByName(this.value)"
  //onkeyup="searchByFLetter(this.value)"
  showSearchInputs() {
    this.searchContainer.innerHTML = `
    <div class="row py-4 ">
        <div class="col-md-6 ">
            <input id="search-by-name" class="form-control bg-transparent text-white" type="text" placeholder="Search By Name">
        </div>
        <div class="col-md-6">
            <input id="search-by-firstLetter" maxlength="1" class="form-control bg-transparent text-white" type="text" placeholder="Search By First Letter">
        </div>
    </div>`;

    this.rowFood.innerHTML = "";
  }
  closeSearchInputs() {
    this.searchContainer.innerHTML = "";
  }
  // onclick="foodDetails('${res.meals[i].idMeal}')"
  displayData(res) {
    console.log(res.meals[0].strMealThumb);
    let cartona = "";
    console.log(res.meals.length);
    for (let i = 0; i < res.meals.length; i++) {
      // console.log(res.meals[i].idMeal);
      cartona += `
              <div class="col-md-3">
                      <div data-id="${res.meals[i].idMeal}" class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                          <img class="w-100" src="${res.meals[i].strMealThumb}" alt="">
                          <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                              <h3>${res.meals[i].strMeal}</h3>
                          </div>
                      </div>
              </div>
              `;
      // console.log(cartona);
    }
    this.rowFood.innerHTML = cartona;
  }
  displayEachMeal(res) {
    let ingredients = ``;
    console.log(res.strIngredient1);
    for (let i = 1; i <= 20; i++) {
      if (res[`strIngredient${i}`]) {
        ingredients += `<li class="alert alert-info m-2 p-1">${
          res[`strMeasure${i}`]
        } ${res[`strIngredient${i}`]}</li>`;
      }
    }
    let cartona = `
          <div class="col-md-4">
                      <img class="w-100 rounded-3" src="${res.strMealThumb}" alt="">
                          <h2>${res.strMeal}</h2>
                  </div>
                  <div class="col-md-8">
                      <h2>Instructions</h2>
                      <p>${res.strInstructions}</p>
                      <h3><span class="fw-bolder">Area : </span>${res.strArea}</h3>
                      <h3><span class="fw-bolder">Category : </span>${res.strCategory}</h3>
                      <h3>Recipes :</h3>
                      <ul class="list-unstyled d-flex g-3 flex-wrap">
                      ${ingredients}
                      </ul>
      
                      <h3>Tags :</h3>
                      <ul class="list-unstyled d-flex g-3 flex-wrap">
                          <li class="alert alert-danger m-2 p-1">${res.strTags}</li>
                      </ul>
      
                      <a target="_blank" href="${res.strSource}" class="btn btn-success">Source</a>
                      <a target="_blank" href="${res.strYoutube}" class="btn btn-danger">Youtube</a>
                  </div>
          `;
    this.rowFood.innerHTML = cartona;
  }
  //onclick="getCategoryMeals('Beef')"
  displayCategory(res) {
    let cartona = "";
    console.log(res.categories.length);
    for (let i = 0; i < res.categories.length; i++) {
      cartona += `
        <div class="col-md-3">
            <div class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                <img class="w-100" src="${
                  res.categories[i].strCategoryThumb
                }" alt="">
                <div class="meal-layer position-absolute text-center text-black p-2">
                    <h3 id="${res.categories[i].strCategory}">${
        res.categories[i].strCategory
      }</h3>
                    <p>${res.categories[i].strCategoryDescription
                      .split(" ")
                      .slice(0, 20)
                      .join(" ")}</p>
                </div>
            </div>
        </div>`;
    }
    this.rowFood.innerHTML = cartona;
  }
  //onclick="getMealDetails('52874')"
  displayEachCategoriesFood(res) {
    let cartona = "";
    for (let i = 0; i < res.meals.length; i++) {
      cartona += `
        <div class="col-md-3">
                <div data-id=${res.meals[i].idMeal} class="meal position-relative overflow-hidden rounded-2 cursor-pointer">
                    <img class="w-100" src="${res.meals[i].strMealThumb}" alt="" srcset="">
                    <div class="meal-layer position-absolute d-flex align-items-center text-black p-2">
                        <h3>${res.meals[i].strMeal}</h3>
                    </div>
                </div>
        </div>
        `;
    }
    this.rowFood.innerHTML = cartona;
  }
  //onclick="getAreaMeals('American')"
  displayAreasofFood(res) {
    let cartona = "";
    for (let i = 0; i < res.meals.length; i++) {
      cartona += `
        <div class="col-md-3">
                <div data-set="${res.meals[i].strArea}" class="area rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-house-laptop fa-4x"></i>
                        <h3>${res.meals[i].strArea}</h3>
                </div>
        </div>
        `;
    }
    this.rowFood.innerHTML = cartona;
  }
  //onclick="getIngredientsMeals('Chicken')"
  displayIngredientsofFood(res) {
    let cartona = "";
    for (let i = 0; i < res.length; i++) {
      cartona += `
        <div class="col-md-3">
                <div data-set="${
                  res[i].strIngredient
                }" class="ingredient rounded-2 text-center cursor-pointer">
                        <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                        <h3>${res[i].strIngredient}</h3>
                        <p>${res[i].strDescription
                          .split(" ")
                          .slice(0, 20)
                          .join(" ")}</p>
                </div>
        </div>
        `;
    }
    this.rowFood.innerHTML = cartona;
  }
  //onkeyup="inputsValidation()"
  showContacts() {
    this.rowFood.innerHTML = `<div class="contact min-vh-100 d-flex justify-content-center align-items-center">
    <div class="container w-75 text-center">
        <div class="row g-4">
            <div class="col-md-6">
                <input id="nameInput"  type="text" class="form-control" placeholder="Enter Your Name">
                <div id="nameAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Special characters and numbers not allowed
                </div>
            </div>
            <div class="col-md-6">
                <input id="emailInput" type="email" class="form-control " placeholder="Enter Your Email">
                <div id="emailAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Email not valid *exemple@yyy.zzz
                </div>
            </div>
            <div class="col-md-6">
                <input id="phoneInput" type="text" class="form-control " placeholder="Enter Your Phone">
                <div id="phoneAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid Phone Number
                </div>
            </div>
            <div class="col-md-6">
                <input id="ageInput" type="number" class="form-control " placeholder="Enter Your Age">
                <div id="ageAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid age
                </div>
            </div>
            <div class="col-md-6">
                <input  id="passwordInput" type="password" class="form-control " placeholder="Enter Your Password">
                <div id="passwordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid password *Minimum eight characters, at least one letter and one number:*
                </div>
            </div>
            <div class="col-md-6">
                <input  id="repasswordInput" type="password" class="form-control " placeholder="Repassword">
                <div id="repasswordAlert" class="alert alert-danger w-100 mt-2 d-none">
                    Enter valid repassword 
                </div>
            </div>
        </div>
        <button id="submitBtn" disabled class="btn btn-outline-danger px-2 mt-3">Submit</button>
    </div>
</div> `;
     this.submitBtn = document.getElementById("submitBtn");

    document.getElementById("nameInput").addEventListener("focus", () => {
      this.nameInputTouched = true;
    });

    document.getElementById("emailInput").addEventListener("focus", () => {
      this.emailInputTouched = true;
    });

    document.getElementById("phoneInput").addEventListener("focus", () => {
      this.phoneInputTouched = true;
    });

    document.getElementById("ageInput").addEventListener("focus", () => {
      this.ageInputTouched = true;
    });

    document.getElementById("passwordInput").addEventListener("focus", () => {
      this.passwordInputTouched = true;
    });

    document.getElementById("repasswordInput").addEventListener("focus", () => {
      this.repasswordInputTouched = true;
    });
  }
  inputsValidation() {
    if (this.nameInputTouched) {
      if (this.nameValidation()) {
        document
          .getElementById("nameAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("nameAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (this.emailInputTouched) {
      if (this.emailValidation()) {
        document
          .getElementById("emailAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("emailAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.phoneInputTouched) {
      if (this.phoneValidation()) {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("phoneAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.ageInputTouched) {
      if (this.ageValidation()) {
        document
          .getElementById("ageAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("ageAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (this.passwordInputTouched) {
      if (this.passwordValidation()) {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("passwordAlert")
          .classList.replace("d-none", "d-block");
      }
    }
    if (this.repasswordInputTouched) {
      if (this.repasswordValidation()) {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-block", "d-none");
      } else {
        document
          .getElementById("repasswordAlert")
          .classList.replace("d-none", "d-block");
      }
    }

    if (
      this.nameValidation() &&
      this.emailValidation() &&
      this.phoneValidation() &&
      this.ageValidation() &&
      this.passwordValidation() &&
      this.repasswordValidation()
    ) {
      this.submitBtn.removeAttribute("disabled");
    } else {
      this.submitBtn.setAttribute("disabled", true);
    }
  }

  nameValidation() {
    return /^[a-zA-Z ]+$/.test(document.getElementById("nameInput").value);
  }

  emailValidation() {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      document.getElementById("emailInput").value
    );
  }

  phoneValidation() {
    return /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(
      document.getElementById("phoneInput").value
    );
  }

  ageValidation() {
    return /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/.test(
      document.getElementById("ageInput").value
    );
  }

  passwordValidation() {
    return /^(?=.*\d)(?=.*[a-z])[0-9a-zA-Z]{8,}$/.test(
      document.getElementById("passwordInput").value
    );
  }

  repasswordValidation() {
    return (
      document.getElementById("repasswordInput").value ==
      document.getElementById("passwordInput").value
    );
  }
}
