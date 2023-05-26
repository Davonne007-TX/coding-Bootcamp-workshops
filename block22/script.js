//Guided Practice Block 22

/*
    In this activity, you will be working to create a website that allows users
    to create, read, update, and delete data from a database.

*/

function main() {
    const root = document.getElementById("root");
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "My Music";
    heading1.style.textAlign = "left";
    heading1.style.fontFamily = '"Lobster", cursive';

    root.appendChild(heading1);
}
 
main();

//
const fetchAllSongs = async () => {
    try {
        const response = await fetch('http://fsa-async-await.herokuapp.com/api/guided-practice/songs');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

function renderAllSongs(songs) {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = "";
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.textContent = `${song.title} - ${song.artist}`;
        songContainer.appendChild(songElement);
    });
}

async function addNewSong(song) {
    const response = await fetch("http://fsa-async-await.herokuapp.com/api/guided-practice/songs", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(song),
    });

    const newSong = await response.text();
    return newSong;
}

function renderNewSongForm() {
    const newSongForm = document.getElementById("new-song-form");
    newSongForm.innerHTML = `
    <form>
         <label for="title">Title</label>
         <input type="text" name="title" id="title" />
         <label for="artist">Artist</label>
         <input type="text" name="artist" id="artist" />
         <label for="genre">Genre</label>
         <input type="text" name="genre" id="genre" />
         <label for="release-date">Release Date</label>
         <input type="date" name="release-date" id="release-date" />
         <button type="submit">Submit</button>
    </form>
    `;  
    
    newSongForm.addEventListener('submit', async (event) => {
        event.preventDefault();
        const title = document.getElementById("title").value;
        const artist = document.getElementById("artist").value;
        const genre = document.getElementById("genre").value;
        const releaseDate = document.getElementById("release-date").value;
  
        const newSong = {
            title,
            artist,
            genre,
            releaseDate
        };
  
        const createdSong = await addNewSong(newSong);
        console.log('New song has been created:', createdSong);
        });
    }
  

async function init() {
    const songs = await fetchAllSongs();
    console.log('All songs:', songs);
    
    renderAllSongs(songs);
    renderNewSongForm();
}

init();

















