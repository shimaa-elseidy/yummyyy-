/// <reference types="../@types/jquery" />

let allMeals = document.querySelector('.allMeals');
let loading = document.querySelector('.loading');

// ==========get all meals function============
async function getAllMeals(){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=`);
    let response = await api.json();
    console.log(response);
    displayMeals(response.meals)
    loading.classList.replace('d-flex', 'd-none');

    //=============call function show meal details===============
    
    let allMealsItems = document.querySelectorAll('.item');
    allMealsItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let mealId = item.getAttribute('id');
            getMealDetails(mealId)
        })
    })
}

getAllMeals()

// ==========display all meals function============
function displayMeals(mealsArray){
    let cartoona = ``;
    for(let i = 0; i < mealsArray.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${mealsArray[i].idMeal} class="item text-white">
                        <img src="${mealsArray[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h2 class="ms-2">${mealsArray[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona
}
//===================================================

// ==========get meal details function============
async function getMealDetails(id){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
    let response = await api.json();
    console.log(response);
    displayMealDetails(response);
    loading.classList.replace('d-flex', 'd-none');
}

//===================================================

// ==========display meal details function============
function displayMealDetails(meal){
    let cartoona = `
        <div class="col-md-4 text-white">
                    <img src="${meal.meals[0]?.strMealThumb}" class="w-100 rounded-4" alt="">
                    <h2 class="mt-2">${meal.meals[0]?.strMeal}</h2>
                </div>
                <div class="col-md-8 text-white">
                    <h2>Instructions</h2>
                    <p>${meal.meals[0].strInstructions}</p>
                    <h4>Area :${meal.meals[0].strArea} </h4>
                    <h4 class="my-3">Category : ${meal.meals[0].strCategory}</h4>
                    <h4 class="mb-3">Recipes  : </h4>
                    <div class="d-flex flex-wrap">
                        <p id="recipes">${meal.meals[0].strMeasure1 +''+meal.meals[0].strIngredient1}</p>
                        <p id="recipes">${meal.meals[0].strMeasure2 +''+meal.meals[0].strIngredient2}</p>
                        <p id="recipes">${meal.meals[0].strMeasure3 +''+meal.meals[0].strIngredient3}</p>
                        <p id="recipes">${meal.meals[0].strMeasure4 +''+meal.meals[0].strIngredient4}</p>
                        <p class="${meal.meals[0].strMeasure5 == " " || meal.meals[0].strMeasure5 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure5 +''+meal.meals[0].strIngredient5}</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <p class="${meal.meals[0].strMeasure6 == " " || meal.meals[0].strMeasure6 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure6 +''+meal.meals[0].strIngredient6}</p>
                        <p class="${meal.meals[0].strMeasure7 == " " || meal.meals[0].strMeasure7 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure7 +''+meal.meals[0].strIngredient7}</p>
                        <p class="${meal.meals[0].strMeasure8 == " " || meal.meals[0].strMeasure8 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure8 +''+meal.meals[0].strIngredient8}</p>
                        <p class="${meal.meals[0].strMeasure9 == " " || meal.meals[0].strMeasure9 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure9 +''+meal.meals[0].strIngredient9}</p>
                        <p class="${meal.meals[0].strMeasure10 == " " || meal.meals[0].strMeasure10 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure10 +''+meal.meals[0].strIngredient10}</p>
                    </div>
                    <div class="d-flex flex-wrap">
                        <p class="${meal.meals[0].strMeasure11 == " " || meal.meals[0].strMeasure11 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure11 +''+meal.meals[0].strIngredient11}</p>
                        <p class="${meal.meals[0].strMeasure12 == " " || meal.meals[0].strMeasure12 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure12 +''+meal.meals[0].strIngredient12}</p>
                        <p class="${meal.meals[0].strMeasure13 == " " || meal.meals[0].strMeasure13 == ""? 'd-none' : ''}" id="recipes">${meal.meals[0].strMeasure13 +''+meal.meals[0].strIngredient13}</p>
                    </div>
             
                    <h4 class="my-3">Tags  : </h4>
                    <span class="tags ${meal.meals[0].strTags == null? 'd-none' : 'd-inline-block'}" >${meal.meals[0]?.strTags?.split(',')[0]}</span>
                    <span class="tags ${meal.meals[0]?.strTags?.split(',')[1] == null? 'd-none' : 'd-inline-block'}" >${meal.meals[0]?.strTags?.split(',')[1]}</span>
                    <span class="tags ${meal.meals[0]?.strTags?.split(',')[2] == null? 'd-none' : 'd-inline-block'}" >${meal.meals[0]?.strTags?.split(',')[2]}</span>
                    
                    <br>
                    <a href="${meal.meals[0].strSource}" class="btn btn-success my-3 me-2">Source</a>
                    <a href="${meal.meals[0].strYoutube}" class="btn btn-danger my-3">Youtube</a>
                </div>
    `;
    document.querySelector('.meals').innerHTML = cartoona;
}
//===================================================

// ==========aside============
$('aside .sideBar-header i').on('click', function(){
   $('aside .outer-side').animate({width: 'toggle'}, 1000);
   $('.close-bar').toggleClass('fa-xmark')
})

document.getElementById('search').addEventListener('click', ()=>{
    displaySearch();
})
document.getElementById('category').addEventListener('click', ()=>{
    getAllCategories();
})
document.getElementById('area').addEventListener('click', ()=>{
    getAllAreas();
})
document.getElementById('integration').addEventListener('click', ()=>{
    getAllIntergrations();
})
document.getElementById('contactus').addEventListener('click', ()=>{
    displayContactUs();
})
 
// ==========search by name function============
async function searchByName(){
    let searchName = document.getElementById('searchName').value;
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
    let response = await api.json();
    console.log(response);
    displaySearchByName(response.meals);
    loading.classList.replace('d-flex', 'd-none');
    //=============call function show meal details===============
    
    let allMealsItems = document.querySelectorAll('.item');
    allMealsItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let mealId = item.getAttribute('id');
            getMealDetails(mealId);
            displayMealDetails(response);
        })
    })
}

// ==========display search by name function============
function displaySearchByName(searchData){
    let cartoona = ``;
    for(let i = 0; i < searchData.length ; i++){
        cartoona += `
                <div class="col-md-6">
                    <div class="search-by-name">
                        <input oninput="searchByName()" id="searchName" class="form-control" type="text" placeholder="Search By Name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="search-by-firstLetter">
                        <input oninput="searchByLetter()" id="searchLetter" class="form-control" type="text" placeholder="Search By First Letter" maxlength="1">
                    </div>
                </div>
                <div class="my-5">
                    <div class="row g-4 search-result">
    
                    </div>
                </div>
            <div class="col-md-3">
                    <div id=${searchData[i].idMeal} class="item text-white">
                        <img src="${searchData[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h2 class="ms-2">${searchData[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona
}

// ==========search by letter function============
async function searchByLetter(){
    let searchLetter = document.getElementById('searchLetter').value;
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${searchLetter}`);
    let response = await api.json();
    console.log(response);
    displaySearchByLetter(response.meals);
    loading.classList.replace('d-flex', 'd-none');
    //=============call function show meal details===============
    
    let allMealsItems = document.querySelectorAll('.item');
    allMealsItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let mealId = item.getAttribute('id');
            getMealDetails(mealId);
            displayMealDetails(response);
        })
    })
}
// ==========display search by letter function============
function displaySearchByLetter(searchData){
    let cartoona = `
        <div class="col-md-6">
                    <div class="search-by-name">
                        <input oninput="searchByName()" id="searchName" class="form-control" type="text" placeholder="Search By Name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="search-by-firstLetter">
                        <input oninput="searchByLetter()" id="searchLetter" class="form-control" type="text" placeholder="Search By First Letter" maxlength="1">
                    </div>
                </div>
                <div class="my-5">
                    <div class="row g-4 search-result">
    
                    </div>
                </div>
    `;
    for(let i = 0; i < searchData.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${searchData[i].idMeal} class="item text-white">
                        <img src="${searchData[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h2 class="ms-2">${searchData[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona
}

function displaySearch(){
    let cartoona = `
                <div class="col-md-6">
                    <div class="search-by-name">
                        <input oninput="searchByName()" id="searchName" class="form-control" type="text" placeholder="Search By Name">
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="search-by-firstLetter">
                        <input oninput="searchByLetter()" id="searchLetter" class="form-control" type="text" placeholder="Search By First Letter" maxlength="1">
                    </div>
                </div>
                <div class="my-5">
                    <div class="row g-4 search-result">
    
                    </div>
                </div>
    `
    document.querySelector('.meals').innerHTML = cartoona;
}
//====================end of search=======================

// ==================Categories=====================

// ==========get all categories function============
async function getAllCategories(){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`);
    let response = await api.json();
    console.log(response);
    console.log(response.categories);
    displayCategories(response.categories);
    loading.classList.replace('d-flex', 'd-none');

    let allCategories = document.querySelectorAll('.item');
    allCategories.forEach((item)=>{
        item.addEventListener('click', function(){
            let categoryName = item.getAttribute('id');
            getCategoriesDetails(categoryName);
        })
    })
}

// ==========display categories function============
function displayCategories(allCategories){
    let cartoona = ``;
    for(let i = 0; i < allCategories.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${allCategories[i].strCategory} class="item py-2 text-white">
                        <img src="${allCategories[i].strCategoryThumb}" class="w-100" alt="">
                        <div class="item-inner text-center p-2 text-black">
                            <h2 class="ms-2">${allCategories[i].strCategory}</h2>
                            <p class="ms-2">${allCategories[i].strCategoryDescription.split(' ').splice(0,20).join(' ')}</p>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

// ==========get categories details function============
async function getCategoriesDetails(name){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${name}`);
    let response = await api.json();
   let categoriesList = response.meals.splice(0,20);
   console.log(categoriesList);
   displayCategoriesDetails(categoriesList);
   loading.classList.replace('d-flex', 'd-none');

   let allCategories = document.querySelectorAll('.item');
    allCategories.forEach((item)=>{
        item.addEventListener('click', function(){
            let CategoryMealId = item.getAttribute('id');
            getMealDetails(CategoryMealId);
            displayMealDetails(response);
        })
    })
}

// ==========display category details function============
function displayCategoriesDetails(Categories){
    let cartoona = ``;
    for(let i = 0; i < Categories.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${Categories[i].idMeal} class="item text-white">
                        <img src="${Categories[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h2 class="ms-2">${Categories[i].strMeal}</h2>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

//==================end of categories=======================

// ==================Areas=====================

// ==========get all areas function============
async function getAllAreas(){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`);
    let response = await api.json();
    console.log(response.meals);
    displayAreas(response.meals);
    loading.classList.replace('d-flex', 'd-none');

    let allAreas = document.querySelectorAll('.item');
    allAreas.forEach((item)=>{
        item.addEventListener('click', ()=>{
           let nameOfArea = item.getAttribute('id');
           getAreaDetails(nameOfArea)
        })
    })
}

// ==========display areas function============
function displayAreas(areasData){
    let cartoona = ``;
    for(let i = 0; i < areasData.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${areasData[i].strArea} class="item text-white text-center">
                        <i class="fa-solid fa-house fa-4x mb-2"></i>
                        <h3>${areasData[i].strArea}</h3>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

// ==========get area details function============
async function getAreaDetails(name){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${name}`);
    let response = await api.json();
    let allAreas = response.meals.splice(0,20);
    displayAreaDetails(allAreas);
    loading.classList.replace('d-flex', 'd-none');

    let allItems = document.querySelectorAll('.item');
    allItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
           let itemId = item.getAttribute('id');
           getMealDetails(itemId);
           displayMealDetails(response)
        })
    })
}

// ==========display area details function============
function displayAreaDetails(areaData){
    let cartoona = ``;
    for(let i = 0; i < areaData.length; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${areaData[i].idMeal} class="item text-white">
                        <img src="${areaData[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h4 class="ms-2">${areaData[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

//==================end of areas=======================

// ==================Integrations=====================

// ==========get  all integrations function============
async function getAllIntergrations(){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`);
    let response = await api.json();
    let allIntegrations = response.meals.splice(0,20);
    console.log(allIntegrations);
    displayIntegrations(allIntegrations);
    loading.classList.replace('d-flex', 'd-none');
    
    let allItems = document.querySelectorAll('.item');
    allItems.forEach((item)=>{
        item.addEventListener('click', ()=>{
            let integrationName = item.getAttribute('id');
            console.log(integrationName);
            getIntegrationsDetails(integrationName)
        })
    })
}

// ==========display integrations function============
function displayIntegrations(integrationData){
    let cartoona = ``;
    for(let i = 0; i < integrationData.length ; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${integrationData[i].strIngredient} class="item text-white text-center">
                        <i class="fa-solid fa-drumstick-bite fa-4x mb-2"></i>
                        <h3>${integrationData[i].strIngredient}</h3>
                        <p>${integrationData[i].strDescription.split(' ').splice(0,20).join(' ')}</p>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

// ==========get integrations details function============
async function getIntegrationsDetails(name){
    loading.classList.replace('d-none', 'd-flex');
    let api = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`);
    let response = await api.json();
    console.log(response);
    let allIntegrations = response?.meals;
    console.log(allIntegrations);
    displayIntegrationsDetails(allIntegrations);
    loading.classList.replace('d-flex', 'd-none');

    let allItems = document.querySelectorAll('.item');
        allItems.forEach((item)=>{
            item.addEventListener('click', ()=>{
            let itemId = item.getAttribute('id');
            getMealDetails(itemId);
            displayMealDetails(response)
        })
    })
}

// ==========display integrations details function============
function displayIntegrationsDetails(integrationData){
    let cartoona = ``;
    for(let i = 0; i < integrationData?.length; i++){
        cartoona += `
            <div class="col-md-3">
                    <div id=${integrationData[i].idMeal} class="item text-white">
                        <img src="${integrationData[i].strMealThumb}" class="w-100" alt="">
                        <div class="item-inner d-flex align-items-center text-black">
                            <h4 class="ms-2">${integrationData[i].strMeal}</h4>
                        </div>
                    </div>
                </div>
        `
    }
    document.querySelector('.meals').innerHTML = cartoona;
}

//==================end of integrations=======================

// ==================validation=====================
function displayContactUs(){
    let cartoona = `
        <div class="container vh-100 d-flex justify-content-center align-items-center">
                <div class="row g-4 w-75 m-auto">
                    <div class="col-md-6">
                        <input oninput="validName(); inputsValidation();" id="nameInput" type="text" class="form-control" placeholder="Enter Your Name">
                        <div class="alert alert-danger d-none my-3 alert-name">Enter valid name</div>
                    </div>
                    <div class="col-md-6">
                        <input oninput="validEmail(); inputsValidation();" id="emailInput" type="email" class="form-control" placeholder="Enter Your Email">
                        <div class="alert alert-danger d-none my-3 alert-email">invalid email</div>
                    </div>
                    <div class="col-md-6">
                        <input oninput="validPhone(); inputsValidation();" id="phoneInput" type="tel" class="form-control" placeholder="Enter Your Phone">
                        <div class="alert alert-danger d-none my-3 alert-phone">Enter valid phone number</div>
                    </div>
                    <div class="col-md-6">
                        <input oninput="validAge(); inputsValidation();" id="ageInput" type="number" class="form-control" placeholder="Enter Your Age">
                        <div class="alert alert-danger d-none my-3 alert-age">Enter valid age</div>
                    </div>
                    <div class="col-md-6">
                        <input oninput="validPassword(); inputsValidation();" id="passwordInput" type="password" class="form-control" placeholder="Enter Your Password">
                        <div class="alert alert-danger d-none my-3 alert-password">Enter valid password *Minimum eight characters, at least one letter and one number:*</div>
                    </div>
                    <div class="col-md-6">
                        <input oninput="validRepassword(); inputsValidation();" id="repasswordInput" type="password" class="form-control" placeholder="Enter Your Repassword">
                        <div class="alert alert-danger d-none my-3 alert-repassword">Enter valid password</div>
                    </div>
                    <div class="text-center mt-4">
                        <button  id="btnSubmit" type="submit" disabled="true" >Submit</button>
                    </div>
                </div>
        </div>
    `
    document.querySelector('.meals').innerHTML = cartoona;
}

function validName(){
    let regexStyle = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/
    if(regexStyle.test(nameInput.value)){
        document.querySelector('.alert-name').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-name').classList.replace('d-none', 'd-block');
        return false;
    }
}

function validEmail(){
    let regexStyle =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    if(regexStyle.test(emailInput.value)){
        document.querySelector('.alert-email').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-email').classList.replace('d-none', 'd-block');
        return false;
    }
}

function validPhone(){
    let regexStyle = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
    if(regexStyle.test(phoneInput.value)){
        document.querySelector('.alert-phone').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-phone').classList.replace('d-none', 'd-block');
        return false
    }
}

function validAge(){
    let regexStyle = /^([1-7][0-9]|80)$/
    if(regexStyle.test(ageInput.value)){
        document.querySelector('.alert-age').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-age').classList.replace('d-none', 'd-block');
        return false;
    }
}

function validPassword(){
    let regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regexStyle.test(passwordInput.value)){
        document.querySelector('.alert-password').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-password').classList.replace('d-none', 'd-block');
        return false;
    }
}

function validRepassword(){
    let regexStyle = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
    if(regexStyle.test(repasswordInput.value)){
        document.querySelector('.alert-repassword').classList.replace('d-block', 'd-none');
        return true;
    }else{
        document.querySelector('.alert-repassword').classList.replace('d-none', 'd-block');
        return false;
    }
}

function inputsValidation(){
    if(validName() && validEmail() && validPhone() && validAge() && validPassword() && validRepassword()){
        document.getElementById('btnSubmit').disabled = false;
        document.getElementById('btnSubmit').style.cssText = 'border-color: red !important';
        console.log(document.getElementById('btnSubmit'));
    }else{
        document.getElementById('btnSubmit').disabled = true;
    }
}

