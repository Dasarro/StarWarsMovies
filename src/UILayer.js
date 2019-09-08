import {SearchingMovies} from "./SWAPIService.js"
// ******* UI Layer *********

// DOM nodes
let $moviesList = document.querySelector(".article__second");
let $movieInput = document.querySelector("#movie-input");
let $searchButton = document.querySelector("#movie-search");
let $articleFirst = document.querySelector(".header__nothingFinded");

const createCardTitle=(title)=>{
    const divCardContent = document.createElement("div");
    divCardContent.className = "card__content card__titleContent card__titleContent--position card__titleContent--yelow";
    const h1=document.createElement("h1");
    h1.innerText = title;
    h1.className = "card__header card__headerName";
    divCardContent.appendChild(h1);
    return divCardContent;
};
const createDivTransparency=()=>{
    const divTransparency = document.createElement("div");
    divTransparency.className = "card__bacground--transparency"
    return divTransparency;
}
const createCardContent=(header,name,classNameDiv,classNamePhead,classNamePname)=>{
    const divCardConten=document.createElement("div");
    divCardConten.className= classNameDiv;
    const pHeader=document.createElement("p");
    const pName=document.createElement("p");
    pHeader.className = classNamePhead;
    pName.className = classNamePname;
    pHeader.innerText = header;
    pName.innerText=name;
    divCardConten.appendChild(pHeader);
      divCardConten.appendChild(pName);
    return divCardConten;
}
const createMovieCard=(movie,classNamebackImange)=>{
    const title=movie["title"];
    const director = movie["director"];
    const producer=movie["producer"];
    const realaseDate = movie["release_date"];
    const classNameDivDirector = "card__content card__directorContent card__directorContent--position";
    const classNameDivProducer = " card__content card__producerContent card__producerContent--position"
    const classNameDivDate = "card__content card__dateContent card__dateContent--position";
    const directClassPheader = "card__header card__directorHeader card__header--red";
    const directClassPName = "card__name card__directorName card__name--white"
    const producerClassPheader = "card__header card__producer card__header--red";
    const producerClassPName = "card__name card__producerName card__name--white"
    const dateClassPheader = "card__header card_date card__header--red";
    const dateClassPName = "card__name card_dateRealase card__name--white"
    const card= document.createElement("div");
    card.className = "card  card--shadow card__backgroundFirst--image " + `${classNamebackImange}`;

    card.appendChild(createDivTransparency());
    card.appendChild(createCardTitle(title));
    card.appendChild(createCardContent("Director:", director, classNameDivDirector, directClassPheader, directClassPName));
    card.appendChild(createCardContent("Producer:", producer, classNameDivProducer, producerClassPheader, producerClassPName));
    card.appendChild(createCardContent("Realese Date:", realaseDate, classNameDivDate, dateClassPheader, dateClassPName));
    // console.log(card, "card ")
    return  card
     
}
    

// UI functions
let movies = [];
function render() {
    if (movies[0] == "Nothing finded") {
        $moviesList.innerHTML = "";
        $articleFirst.innerText="nothig Finded"
    }else{
        const classBackImage = ["card__backgroundFirst--image", "card__backgroundSecond--image", "card__backgroundThird--image", "card__backgroundFourth--image", "card__backgroundFifth--image", "card__backgroundSixth--image"];

        const listCard = document.createElement("ul");
        listCard.className = "list__cards";
        let i = 0;
        movies.forEach(movie => {
            
            console.log(i)
            createMovieCard(movie);
            listCard.appendChild(createMovieCard(movie, classBackImage[i]));
            if (i == classBackImage.length-1) {
                i = 0;
                console.log("siema")
            } else {
                i++;
            };
            

        })
        // console.log(listCard,"listcard");
        $moviesList.innerHTML = "";
         $articleFirst.innerText = "";
        $moviesList.appendChild(listCard);

        

    };
   
}
$searchButton.addEventListener("click", () => {
    SearchingMovies($movieInput.value).then(resolve => {
        if (resolve =="Nothing finded") {
            movies[0] = resolve;
        }else{
              movies = resolve;
        }
        render();
    });
    
})
