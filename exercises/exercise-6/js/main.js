const fetchMovies = async () => {
    const response = await fetch('https://api.airtable.com/v0/appUFWUBrV1fAWhaQ/Table%201?api_key=keyuozaLACi7qERJ6').then(data => data.json());

    console.log(response);

    const moviesContainer = document.getElementById('movies-container');

    response.records.forEach(movie => {
        console.log(movie.fields);
        const articleEl = document.createElement('article');
        const titleEl = document.createElement('div');
        const genreEl = document.createElement('div');
        const indbUrlEl = document.createElement('div');
        const releaseDateEl = document.createElement ('div');

        titleEl.innerHTML = movie.fields.Title;

        articleEl.appendChild(titleEl);

        moviesContainer.appendChild(articleEl);
    });
};

fetchMovies();

