// ******* UI Layer *********
import { getFilms, getFilm, SearchingMovies, getPlanets, getPlanet, getPeople, getCharacter, getVehicles, getVehicle } from "./SWAPIService.js";
import { generateElementsList } from "./elementsList.js";

// DOM nodes
let DOMallElem = document.querySelector(".b-body__content");

let $moviesList = DOMallElem.querySelector(".main-section__content-items");
let $movieInput = DOMallElem.querySelector("#movie-input");
let $searchButton = DOMallElem.querySelector("#movie-search");
let $nothingFinded = DOMallElem.querySelector(".main-section__content-input__caption-nothing-finded");
let $imageMainSect = DOMallElem.querySelector(".b-main__image-second--back-img");

const createCardTitle = (title) => {
    const divCardContent = document.createElement("div");
    divCardContent.className = "b-card__content b-card__header b-card__header--position";
    const h1 = document.createElement("h1");
    h1.innerText = title;
    h1.className = "b-card__header__caption";
    divCardContent.appendChild(h1);
    return divCardContent;
};
const createDivTransparency = () => {
    const divTransparency = document.createElement("div");
    divTransparency.className = "card__bacground--transparency"
    return divTransparency;
}
const createCardContent = (header, name, classNameDiv, classNamePhead, classNamePname) => {
    const divCardConten = document.createElement("div");
    divCardConten.className = classNameDiv;
    const pHeader = document.createElement("p");
    const pName = document.createElement("p");
    pHeader.className = classNamePhead;
    pName.className = classNamePname;
    pHeader.innerText = header;
    pName.innerText = name;
    divCardConten.appendChild(pHeader);
    divCardConten.appendChild(pName);
    return divCardConten;
}
const createMovieCard = (movie, classNamebackImange) => {
    const title = movie["title"];
    const director = movie["director"];
    const producer = movie["producer"];
    const realaseDate = movie["release_date"];
    const classNameDivDirector = "b-card__content card__content-director card__content-director--position";
    const classNameDivProducer = " b-card__content card__content-producer  card__content-producer--position"
    const classNameDivDate = "b-card__content card__content-date card__content-date--position";
    const directClassPheader = "card__subtitle card__directorHeader card__subtitle--red";
    const directClassPName = "card__subtitle__name card__directorName card__subtitle__name--white"
    const producerClassPheader = "card__subtitle card__producer card__subtitle--red";
    const producerClassPName = "card__subtitle__name card__producerName card__subtitle__name--white"
    const dateClassPheader = "card__subtitle card_date card__subtitle--red";
    const dateClassPName = "card__subtitle__name card_dateRealase card__subtitle__name--white"
    const card = document.createElement("div");
    card.className = "card  card--shadow card__backgroundFirst--image " + `${classNamebackImange}`;
    card.appendChild(createDivTransparency());
    card.appendChild(createCardTitle(title));
    card.appendChild(createCardContent("Director:", director, classNameDivDirector, directClassPheader, directClassPName));
    card.appendChild(createCardContent("Producer:", producer, classNameDivProducer, producerClassPheader, producerClassPName));
    card.appendChild(createCardContent("Realese Date:", realaseDate, classNameDivDate, dateClassPheader, dateClassPName));
    return card
};
// UI functions
let movies = [];
function render() {
    const classBackImage = ["card__background-first--image", "card__background-second--image", "card__background-third--image", "card__background-fourth--image", "card__background-fifth--image", "card__background-sixth--image"];
    const listCard = document.createElement("ul");
    listCard.className = "main-section__content-items__list__cards";
    let i = 0;
    movies.forEach(movie => {
        createMovieCard(movie);
        listCard.appendChild(createMovieCard(movie, classBackImage[i]));
        if (i == classBackImage.length - 1) {
            i = 0;
        } else {
            i++;
        };
    })
    $imageMainSect.setAttribute("style", "z-index: 1;");
    $moviesList.innerHTML = "";
    $nothingFinded.innerText = "";
    $moviesList.appendChild(listCard);
};
$searchButton.addEventListener("click", () => {
    SearchingMovies($movieInput.value).then(resolve => {
        if (resolve == "Nothing finded") {
            $imageMainSect.setAttribute("style", "z-index: -2;");
            $moviesList.innerHTML = "";
            $nothingFinded.innerText = "nothig Finded"
        } else {
            movies = resolve;
            render();
        }
    });
});

