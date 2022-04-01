const fetchVideogame_characters = async () => {
    const response = await fetch('https://api.airtable.com/v0/appNi3MB1m3UHlrcy/Table%201?api_key=keyuozaLACi7qERJ6').then(data => data.json());

    console.log(response);

    const characterContainer = document.getElementById('character-container');

    response.records.forEach(Videogame_characters  => {
        console.log(Videogame_characters.fields);
        const nameEl = document.createElement('article');
        const elementEl = document.createElement('div');
        const gameEl = document.createElement('div');
        const imageEl = document.createElement('img');

        nameEl.innerHTML = Videogame_characters.fields.name;
        elementEl.innerHTML = Videogame_characters.fields.element;

        gameEl.innerHTML = Videogame_characters.fields.game;
        imageEl.innerHTML = Videogame_characters.fields.image;

        nameEl.append(elementEl, gameEl, imageEl);

        characterContainer.appendChild(nameEl);
    });

    const linkTags = document.querySelectorAll('.imdb-link');
    console.log(linkTags);
    linkTags.forEach((link, index) => {
        const linkColor = link.style.color;
        link.id = `my-link-${index + 1}`;
        link.addEventListener('mouseover', (evt) => {
            link.style.color = "green";
        });

        link.addEventListener('mouseout', evt => {
            link.style.color = linkColor;
        });
    });
};

fetchVideogame_characters();