
const listaPersonajes = document.querySelector("#lista-personajes");

async function consultarApi() {
    const url = "https://rickandmortyapi.com/api/character/";

    for (let i = 1; i <= 100; i++) {
        await fetch(url + i)
            .then((response) => response.json())
            .then(data => mostrarPersonajes(data))
            .catch( () => {
                if(i < 1){
                    alert("No se pudo obtener datos de la API");
                }
            })
    }
}

consultarApi();

function mostrarPersonajes(data) {

    const div = document.createElement("div");
    div.classList.add("personaje");
    div.innerHTML = `
    <div class="flip-card">
                    <div class="card-content">
                        <h3 class="name">${data.name}</h3>
                        <img class="img-personaje" src="https://rickandmortyapi.com/api/character/avatar/${data.id}.jpeg" alt="img">
                        <div class="info-results">
                            <h6 class="stat">${data.status}</h6>
                            <h6 class="stat">${data.species}</h6>
                        </div>
                        <div class="info-results">
                            <h6 class="stat">${data.gender}</h6>
                            <h6 class="stat">${data.origin.name}</h6>
                        </div>
                    </div>
    `;

    listaPersonajes.append(div);
}


