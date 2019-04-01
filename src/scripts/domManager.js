const planetEl = document.getElementById("planets")

planetEl.innerHTML += "<h1>Planets</h1>";


//creates html string from string template.
const planetString = (planet) => {
    return `<h2>${planet}</h2>`
}