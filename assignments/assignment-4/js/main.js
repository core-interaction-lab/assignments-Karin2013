const albumContainer = document.getElementById('album-container');

const fetchContent = async (fetchUrl) => {
    return fetch(fetchUrl).then(data => data.json ());

};


const buildAlbums = albums => {
    albums.forEach(item => {
        console.log(item);
        const imgEl = document.createElement('img');
        imgEl.setAttribute('src', item.images[0].url);
        imgEl.classList.add("photo")

        const container = document.createElement('article');
        

        const nameEL = document.createElement('p');
        nameEL.innerHTML = item.name;
        nameEL.classList.add("name");

        const release_dateEl = document.createElement('p');
        release_dateEl.innerHTML = item.release_date;
        release_dateEl.classList.add("date");

        const total_tracksEl = document.createElement('p');
        total_tracksEl.innerHTML = item.total_tracks;
        total_tracksEl.classList.add("total_tracks");

        const urlEl = document.createElement('a');
        urlEl.innerHTML = item.href;
        urlEl.classList.add("url");
        
        container.append(imgEl);
        container.append(nameEL);
        container.append(release_dateEl);
        container.append(total_tracksEl);
        container.append(urlEl);
        albumContainer.append(container);
    });
}

const url1 = 'https://interactionlab.space/data/assignment-4-1.json';


const main = async () => {
    const response1 = await fetchContent(url1);
    buildAlbums(response1.items);
};

main();