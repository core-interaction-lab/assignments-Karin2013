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
    const gallery = document.getElementById('gallery');
    const grid = document.getElementById('grid');

    response.records.forEach((videogame) => {
        console.log(videogame);
        if (videogame.fields.Photo) {
            console.log(videogame.fields.Photo[0].url);
            const photoImg = document.createElement('img');
            photoImg.src = videogame.fields.Photo[0].url;
            photoImg.classList.add('videogame-photo');
            gallery.append(photoImg);
        }
        if (videogame.fields.Name) {
            console.log(videogame.fields.Name);
        }

        if (videogame.fields.Name) {
            const NameEl = document.createElement('p');
            NameEl.innerHTML = videogame.fields.Name;
            NameEl.classList.add('videogame-name');
            gallery.append(NameEl);
    
        }
    
        if (videogame.fields.element) {
            const elementEl = document.createElement('p');
            elementEl.innerHTML = videogame.fields.element;
            elementEl.classList.add('videogame-description');
            gallery.append(NameEl);
        
        }
    });

    response.records.filter(videogame =>
        videogame.fields.Photo === "Fire").forEach();
    
};

fetchvideogame();


var btn1 = document.getElementById('btn1');

function changeImage() {
   document.getElementById('btn1').src = "image/icon1.png";
   document.getElementById('name').innerHTML = "Fire";
   document.getElementById('name').style.color ="#E94F86";
   document.getElementById('background').style.backgroundImage = "linear-gradient(to bottom, #3A2D86, #7F48A0, #C27BA6)";
   response.records.filter(videogame => videogame.fields.Photo === "Fire").forEach();
}

function changeImage2() {
    document.getElementById('btn1').src = "image/icon2.png";
    document.getElementById('name').innerHTML = "Air";
    document.getElementById('name').style.color ="#46754B";
    document.getElementById('background').style.backgroundImage = "linear-gradient(to bottom, #2D5B86, #8AC9BE, #BBC8B8)";
}

function changeImage3() {
    document.getElementById('btn1').src = "image/icon3.png";
    document.getElementById('name').innerHTML = "Water";
    document.getElementById('name').style.color ="#3A2D86";
    document.getElementById('background').style.backgroundImage = "linear-gradient(to bottom, #1A30A6, #8A97C5, #ADD7E4)";
}
function changeImage4() {
    document.getElementById('btn1').src = "image/icon4.png";
    document.getElementById('name').innerHTML = "Earth";
    document.getElementById('name').style.color ="#B6672D";
    document.getElementById('background').style.backgroundImage = "linear-gradient(to bottom, #653D20, #7E895E, #CAC297)";
}