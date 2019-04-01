const outPrac = document.querySelector("#practice-output")

outPrac.innerHTML += "<h2>Planets</h2>";

const planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"]

/*
    Use the forEach method to add the name of each planet
    to a section element in your HTML with an id of "planets".
    Use string templates to construct the DOM elements.
*/

const planetEl = document.getElementById("planets")
const planetFragment = document.createDocumentFragment()

console.log("planets array", planets);

planets.forEach(planet => {
    const planetName = document.createElement("h4");
    planetName.innerHTML = planet
    planetFragment.appendChild(planetName);
})

planetEl.appendChild(planetFragment);

/*
    Use the map method to create a new array where the
    first letter of each planet is capitalized. Use the
    `toUpperCase()` method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase
*/

const uppercasePlanets = planets.map(planet => {
    const planetLetters = planet.split("")
    console.log("array of letters", planetLetters)
    planetLetters[0] = planetLetters[0].toUpperCase();
    console.log("array of letters with capitals", planetLetters);
    return planetLetters.reduce(
        (wholeWord, nextLetter) => wholeWord += nextLetter
    )
})

console.log("letters reduced back to words, with uppercase", uppercasePlanets);

/*
    Use the filter method to create a new array that
    contains planets with the letter 'e'. Use the `includes()`
    method on strings.

    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes
*/

const planetsWithE = planets.filter(planet => {
    const planetLetters = planet.split("")
    //returns true or false. If true, the planet in planets will become part of the new array.
    return planetLetters.includes("e");
})

console.log("plenets that include the letter E", planetsWithE);
