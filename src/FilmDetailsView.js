import { insideMenu, render } from "./UILayer";
import { generateElementsList } from "./elementsList";
import { getPeople, getStarships, getVehicles, getPlanets } from "./SWAPIService";

export { generateFilmDetailsView };

function generateFilmDetailsView(film) {
    insideMenu(["Characters", "Starships", "Vehicles", "Planets"]);
    const back = document.querySelector(".backButton");
    const main = document.querySelector(".mainButton");
    const char = document.querySelector(".CharactersButton");
    const star = document.querySelector(".StarshipsButton");
    const veh = document.querySelector(".VehiclesButton");
    const plan = document.querySelector(".PlanetsButton");

    back.addEventListener("click", backfunction);
    main.addEventListener("click", render);
    char.addEventListener("click", () => showCharacters(film));
    star.addEventListener("click", () => showStarships(film));
    veh.addEventListener("click", () => showVehicles(film));
    plan.addEventListener("click", () => showPlanets(film));

    const view = document.querySelector(".view");

    const title = document.createElement("header");
    title.classList = "title";
    title.innerHTML = film.title;
    view.appendChild(title);

    const filmInfo = document.createElement("div");
    filmInfo.classList = "row";
    view.appendChild(filmInfo);

    const director = document.createElement("div");
    director.classList = "col-12 col-md-4";
    director.innerHTML = `<header>Director</header><span>${film.director}</span>`
    filmInfo.appendChild(director);

    const producer = document.createElement("div");
    producer.classList = "col-12 col-md-4";
    producer.innerHTML = `<header>Director</header><span>${film.producer}</span>`
    filmInfo.appendChild(producer);

    const date_relase = document.createElement("div");
    date_relase.classList = "col-12 col-md-4";
    date_relase.innerHTML = `<header>Director</header><span>${film.release_date}</span>`
    filmInfo.appendChild(date_relase);

    const chosenCategory = document.createElement("div");
    chosenCategory.classList = "categoryName";
    view.appendChild(chosenCategory);

    const links = document.createElement("div");
    links.classList = "row links";
    view.appendChild(links);

    const charactersCategory = document.createElement("div");
    charactersCategory.classList = "col-12 col-sm-6 col-lg-3 charactersCategory";
    charactersCategory.innerHTML = "Characters";
    links.appendChild(charactersCategory);
    charactersCategory.addEventListener("click", () => showCharacters(film));

    const starshipsCategory = document.createElement("div");
    starshipsCategory.classList = "col-12 col-sm-6 col-lg-3 strshipsCategory";
    starshipsCategory.innerHTML = "Starships";
    links.appendChild(starshipsCategory);
    starshipsCategory.addEventListener("click", () => showStarships(film));

    const vehiclesCategory = document.createElement("div");
    vehiclesCategory.classList = "col-12 col-sm-6 col-lg-3 vehiclesCategory";
    vehiclesCategory.innerHTML = "Vehicles";
    links.appendChild(vehiclesCategory);
    vehiclesCategory.addEventListener("click", () => showVehicles(film));

    const planetsCategory = document.createElement("div");
    planetsCategory.classList = "col-12 col-sm-6 col-lg-3 planetsCategory";
    planetsCategory.innerHTML = "Planets";
    links.appendChild(planetsCategory);
    planetsCategory.addEventListener("click", () => showPlanets(film));
}

async function showCharacters(film) {
    const chosenCategory = document.querySelector(".categoryName");
    chosenCategory.innerHTML = "Characters:";
    const links = document.querySelector(".links");
    links.innerHTML = "";
    const characters = await generateElementsList(film.characters, getPeople, generateCharacterDetailsView);
    characters.forEach(character => {
        links.appendChild(character);
    });

}

async function showStarships(film) {
    const chosenCategory = document.querySelector(".categoryName");
    chosenCategory.innerHTML = "Starships:";
    const links = document.querySelector(".links");
    links.innerHTML = "";
    const starships = await generateElementsList(film.starships, getStarships, generateStarshipDetailsView);
    starships.forEach(starship => {
        links.appendChild(starship);
    });
}

async function showVehicles(film) {
    const chosenCategory = document.querySelector(".categoryName");
    chosenCategory.innerHTML = "Vehicles:";
    const links = document.querySelector(".links");
    links.innerHTML = "";
    const vehicles = await generateElementsList(film.vehicles, getVehicles, generateVehicleDetailsView);
    vehicles.forEach(vehicle => {
        links.appendChild(vehicle);
    });

}

async function showPlanets(film) {
    const chosenCategory = document.querySelector(".categoryName");
    chosenCategory.innerHTML = "Planets:";
    const links = document.querySelector(".links");
    links.innerHTML = "";
    const planets = await generateElementsList(film.planets, getPlanets, generatePlanetDetailsView);
    planets.forEach(planet => {
        links.appendChild(planet);
    });
}

function generateCharacterDetailsView(){
    console.log("działa");
}

function generateStarshipDetailsView(){
    console.log("działa");
}

function generateVehicleDetailsView(){
    console.log("działa");
}

function generatePlanetDetailsView(){
    console.log("działa");
}


function backfunction(){

}