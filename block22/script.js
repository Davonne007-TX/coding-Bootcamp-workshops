//Guided Practice Block 22

/*
    In this activity, you will be working to create a website that allows users
    to create, read, update, and delete data from a database.

*/

const songContainer = document.getElementById("song-container");
const newSongForm = document.getElementById("new-song-form");

const MY_MUSIC_API = "http://fsa-async-await.herokuapp.com/";

const fetchAllSongs = async () => {
    try {
        const response = await fetch(MY_MUSIC_API);
        const theData = await response.json();
        return theData;
    } catch (error) {
        console.log(error);
    }
}































const init = async () => {
    
}