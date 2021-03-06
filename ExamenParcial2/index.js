
const maxResults = 1450;
let count = 1;
let offset = 0;

const results = () => {
    const url = `https://gateway.marvel.com:443/v1/public/characters?limit=30&offset=${offset}&ts=1&apikey=02f4bcadf5e462fa78574ba01280cebc&hash=52a1acd1fff4dc2b99f9189a760b31b5`;
    fetch(url)
    .then(response => response.json())
    .then(posts => {
        console.log(posts);
        const lista = posts['data']['results'].map(post =>
            `<div class="col-md-4 text-white">
            <div class="card special-card">
                <div class="card-body">
                    <a href="detalle.html?characterId=${post.id}&id=${count++}">
                        <img class="card-img-top img-thumbnail" src="${post['thumbnail']['path']}.${post['thumbnail']['extension']}">
                        <h3 class="card-title">${post.name}</h3>
                    </a>
                </div>  
            </div>   
            </div>`
            //`<a href="detalle.html?characterId=${post.id}&id=${count}" class="list-group-item list-group-item-action">${count++} ${post.name}</a>`
        ).join('');
        const listaHtml = document.getElementById('lista');
        listaHtml.innerHTML = lista;
    })
}

const incrementPageResults = () => {
    if(offset + 30 < maxResults) 
        offset += 30;
    results();
}

const decrementPageResults = () => {
    if(offset >= 30) 
        offset -= 30;
    results();
}

results();



