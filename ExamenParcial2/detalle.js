const urlLocal = new URL(window.location.href);
const search_params = urlLocal.searchParams;
const characterId = search_params.get('characterId');
const id = search_params.get('id');
console.log(id);

//consumimos la API
const url = `https://gateway.marvel.com:443/v1/public/characters/${characterId}?ts=1&apikey=02f4bcadf5e462fa78574ba01280cebc&hash=52a1acd1fff4dc2b99f9189a760b31b5`;
const detalle = fetch(url)
    .then(response => response.json())
    .then(post => {
        post['data']['results'].map(postCharacter => {
            console.log(postCharacter);
            document.getElementById('id').innerHTML = id;
            document.getElementById('imageCharacter').src = `${postCharacter['thumbnail']['path']}.${postCharacter['thumbnail']['extension']}`;
            document.getElementById('characterName').innerHTML = postCharacter['name'];
            document.getElementById('characterDescription').innerHTML = postCharacter['description'] == '' ? 'Description not found' : postCharacter['description'];
            const listComics = postCharacter['comics']['items'].map(postCharacterComic => 
                `<li>${postCharacterComic.name}</li>`
            ).join('');
            const listHtml = document.getElementById('characterComics');
            listHtml.innerHTML = listComics == "" ? 'Comics not found' : listComics;
            const listSeries = postCharacter['series']['items'].map(postCharacterSerie => 
                `<li>${postCharacterSerie.name}</li>`
            ).join('');
            const listSeriesHtml = document.getElementById('characterSeries');
            listSeriesHtml.innerHTML = listSeries == "" ? 'Series not found' : listSeries;
        });
    })