const starWarsContainer = document.getElementById("starwars-container");

// //Starwars API
const STARWARS_API = 'http://swapi.dev/api/planets';

//Get all Planets
async function getAllPlanets() {
    try {
        const response = await fetch(STARWARS_API);  
        const planets = await response.json(); 
        console.log("Planets: ", planets);  
        return planets;
    } catch (err) {
        console.log("err ", err);
    }
}

//Get single planet by id
const getPlanetById = async (id) => {
    try {
        const singlePlanet = "https://swapi.dev/api/planets/8/";
        const response = await fetch(singlePlanet);
        const onePlanet = await response.json();
        console.log("Single Planet:", onePlanet);
    } catch (error) {
        console.log(error);
    }
}

//Render all planets 
const renderPlanets = async () => {
    const starWarsContainer = document.getElementById("starwars-container");
    const planets = await getAllPlanets(); //is this how the getAllPlanets function shows up on console.log???
    const results = planets.results;
    const planetList = document.createElement("ul");
    starWarsContainer.appendChild(planetList);
    for (const planet of results) {
        const planetElement = document.createElement("li");
        planetElement.innerHTML = planet.name;
        planetList.appendChild(planetElement);
        planetList.style.fontFamily = "Space Grotesk, sans-serif";
        planetList.style.listStyleType = "none";
        planetList.style.textAlign = "center";
        planetList.style.fontSize = "18pt";
    }
};
   
//initiate functions
 const init = async () => {
    await renderPlanets();
    await getPlanetById();
 }

 init();

 


 

