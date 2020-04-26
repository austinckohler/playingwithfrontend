fetch("https://rickandmortyapi.com/api/character") //get request
    .then(response => response.json()) //turn it into something js can read
    .then(data => makeCards(data.results)) // this is a promise

    function makeCards(charactersArray){ 
        const cardContainer = document.querySelector("#card-container")
        charactersArray.forEach(character => {
            cardContainer.innerHTML = cardContainer.innerHTML + `<h4>${character.name}</h4>
            <img src=${character.image}></img>
            <a href= ""<button>click me </button></a>
            `
        });
    }

    // "{key: value}" parses through response.json