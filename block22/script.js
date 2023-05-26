//Guided Practice Block 22


/*

    In this activity, you will be working to create a website that allows users,
    to create, read, update, and delete data from a database.

    **************

    1. Create an `index.html` file that contains a `div` with an id of "new-song-form" and another
    `div` with an id of "song-container".

    2. Create a `script.js` file with create an asynchronous `init` function that will contain
    your most important code. Call the `init` function at the bottom of your file.

    3. Write a function called `fetchAllSongs` that will fetch all songs from the server and return 
    them as JSON.

    4. Call the `fetchAllSongs` function inside your `init` function and console.log the result. 
    You should see an array of all songs in your browser console.

    5. Write a function called `renderAllSongs` that will take in an array of songs and render
    them to the DOM. You can use the `renderAllRecipes` function we wrote in the previous
    demonstration as a reference.

    6. Call the `renderSongs` function inside your `init` function and pass in the array of songs
    you got from the server.

    7. Write a function called `addNewSong` that will take in a song object and create a new song on the
    server. This function should return the newly created song.


    8. Write a new function called `renderNewSongForm` that will render a form to the DOM. The
    form should have inputs for the following fields: title, artist, genre, and release date.
    The form should also have a submit button.

    9. Call the `renderNewSongForm` function inside your `init` function.

    10. Inside your `renderNewSongForm` function, add an event listener to the form that will listen
    for the submit event. When the form is submitted, the event listener should prevent the default
    behavior of the form and call the `addNewSong` function. The `addNewSong` function should take
    in an object with the following keys: title, artist, genre, and releaseDate. The values for
    these keys should be the values from the form inputs.


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

//Fetch All Songs
const fetchAllSongs = async () => {
    try {
        const response = await fetch('http://fsa-async-await.herokuapp.com/api/guided-practice/songs');
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

//Render All Songs
function renderAllSongs(songs) {
    const songContainer = document.getElementById("song-container");
    songContainer.innerHTML = "";
    songs.forEach(song => {
        const songElement = document.createElement('div');
        songElement.textContent = `${song.title} - ${song.artist}`;
        songContainer.appendChild(songElement);
    });
}

//Add New Song
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

//Render New Song Form with Even Listener
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
  
//Initiate functions 
async function init() {
    const songs = await fetchAllSongs();
    console.log(songs);
    
    renderAllSongs(songs);
    renderNewSongForm();
}

init();


