const db = {
    id: 'appNi3MB1m3UHlrcy',
    table: 'Videogame_characters',
    apiKey: 'keyuozaLACi7qERJ6'
};

const airtableUrl = `https://api.airtable.com/v0/appNi3MB1m3UHlrcy/videogame?api_key=keyuozaLACi7qERJ6`

const fetchvideogame = async () => {
    const response = await fetch(airtableUrl).then(data => data.json());
    console.log(response);

    const myObject = {
        title: 'videogame',
        release_date: '334824',
    }

    const myArray = ['movie', 348927, 'fdiosj'];

    const isReleased = true;

    console.log( myObject.release_date )
    console.log(myArray[2]);

    const container = document.getElementById('videogame-container');

    response.records.forEach((videogame) => {
        console.log(videogame);
        if (videogame.fields.Photo) {
            console.log(videogame.fields.Photo[0].url);
            const photoImg = document.createElement('img');
            photoImg.src = videogame.fields.Photo[0].url;
            //posterImg.setAttribute('src', movie.fields.poster[0].url);
            container.append(photoImg);
        }
        if (videogame.fields.Name) {
            console.log(videogame.fields.Name);
        }

        if (videogame.fields.Name) {
            const NameEl = document.createElement('p');
            NameEl.innerHTML = videogame.fields.Name;
            NameEl.classList.add('videogame-name');
            container.append( NameEl);
        }
    

        if (videogame.fields.element) {
            const elementEl = document.createElement('p');
            elementEl.innerHTML = videogame.fields.element;
            elementEl.classList.add('videogame-description');
            container.append(elementEl);
        }
    });
};

fetchvideogame();