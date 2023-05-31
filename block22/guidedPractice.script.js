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

//Assigning a variable to the API URL
const MY_MUSIC_API = "http://fsa-async-await.herokuapp.com/api/guided-practice/songs";  

//Function for my heading1
function main() {
    const root = document.getElementById("main");
    const heading1 = document.createElement("h1");
    heading1.innerHTML = "My Music";
    heading1.style.textAlign = "center";
    heading1.style.color = "white";
    heading1.style.fontSize = "30pt";
    heading1.style.textDecoration = "underline";
    heading1.style.fontFamily = '"Lobster", cursive'; 
    
    root.appendChild(heading1);
}
    
main();


//async function getAllSongs
async function getAllSongs () {
    try {
        const response = await fetch(MY_MUSIC_API); 
        const allSongsData = await response.json(); 

        console.log("Songs ", allSongsData); 
        return allSongsData;  
    } catch (error) {  
        console.log("error ", error);  
    }
}


//Render all songs
function renderAllSongs(songs) {
    const songContainer = document.getElementById("song-container"); 
    songContainer.innerHTML = "";  
    songs.forEach(song => {    
        const songElement = document.createElement("div");  
        songElement.textContent = `${song.title}`; 
        songContainer.appendChild(songElement);  
        
        songElement.style.fontFamily = '"Lobster", cursive';  
        songElement.style.fontSize = "18pt"; 
        songElement.style.color = "white";
        songElement.style.textAlign = "center";
    });
}


//Add a new song
async function addNewSong(song) {
    try {
        const response = await fetch ("http://fsa-async-await.herokuapp.com/api/guided-practice/songs", {
            method: "POST", 
            headers: {
                "Content-Type": "application/json",  
            },
            body: JSON.stringify(song),  

      });

        const newSong = await response.text(); 
        return newSong; 
    } catch (error) {
        console.log("Error:", error);
    }
}


//Render New Song Form w/ Event Listener 
const newSongForm = document.getElementById("new-song-form");  
newSongForm.innerHTML = `
   <form id="newFormEntry">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" />
        <label for="artist">Artist</label>
        <input type="text" name="artist" id="artist" />
        <label for="genre">Genre</label>
        <input type="text" name="genre" id="genre" />
        <label for="release-date">Release Date</label>
        <input type="date" name="release-date" id="release-date" />
        <button type="submit" id="submitButton">Submit</button>
    </form> 
    `; 

const newFormEntry = document.getElementById("newFormEntry");
newFormEntry.style.fontFamily = '"Lobster", cursive';
newFormEntry.style.fontSize = "16pt";
newSongForm.style.textAlign = "center";


newSongForm.addEventListener("submit", async (event) => { 
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

    // Update the form with the created song details
    const form = document.querySelector("form");
    form.innerHTML = ` 
        <p>New song has been created:</p> 
        <p>Title: ${newSong.title}</p>
        <p>Artist: ${newSong.artist}</p>
        <p>Genre: ${newSong.genre}</p>
        <p>Release Date: ${newSong.releaseDate}</p>
    `; 
});


//Initiate functions 
async function init() {
    try {
        const songs = await getAllSongs();
        renderAllSongs(songs);
    } catch (error) {
        console.log("Error:", error);
    }
}
    
init();




