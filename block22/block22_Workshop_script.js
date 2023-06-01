//Block 22 Workshop: Party Logs

/*

    Follow these instructions to get started and use the API above to complete the workshop

    *********

    1. Clone this repoLinks to an external site. repository to your local computer.

    2. Navigate into the project and open it in VScode.

    3. Launch the index.html file with Live Server.

    4. Uh oh! Our page is not rendering properly. Find the missing functions.

    5. Once you have the functions working, you should see a list of parties, but the
    details button is broken. Write code in the script.js file to fix it.

    6. After the details button is working, you should see details of the party,
    but some values are returning undefined. Debug the problem.

    7. Finally, write code that enables the "delete" button.

    8. Now that the application is working as expected, add color, size, shape,
    and position to elements using CSS. 

*/

//The ids from html 
const newPartyForm = document.querySelector('#new-party-form');
const partyContainer = document.querySelector('#party-container');

//APIS URLS, assigned to variables
const PARTIES_API_URL ='http://fsa-async-await.herokuapp.com/api/workshop/parties';
const GUESTS_API_URL ='http://fsa-async-await.herokuapp.com/api/workshop/guests';
const RSVPS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/rsvps';
const GIFTS_API_URL = 'http://fsa-async-await.herokuapp.com/api/workshop/gifts';

// get all parties
//this shows the parties in the console 
const getAllParties = async () => {
  try {
    const response = await fetch(PARTIES_API_URL);
    const parties = await response.json();
    console.log("Parties:", parties);
    return parties;
  } catch (error) {
    console.log("Error:", error);
  }
};

// get single party by id
//this shows a party by a single id in the console
const getPartyById = async (id) => {
  try {
    const response = await fetch(`${PARTIES_API_URL}/${id}`);
    const party = await response.json();
    console.log("Single Party:", party);
    return party;
  } catch (error) {
    console.log("Error:", error);
  }
};

// delete a party
const deleteParty = async (id) => {
    try {
        const response = await fetch(`${PARTIES_API_URL}/${id}`,{
            method: "DELETE",
        });

        const result = await response.text();
        console.log("Deleted:", result);

        const partyElement = document.querySelector(`[data-id="${id}"]`);
        if(partyElement) {
            partyElement.remove();
        }
    } catch (error) {
        console.log("Error: ", error);
    }
};
    

// render a single party by id
const renderSinglePartyById = async (id) => {
  try {
    const party = await getPartyById(id); // fetch party details from server

    const guestsResponse = await fetch(`${GUESTS_API_URL}/party/${id}`);
    const guests = await guestsResponse.json();

    const rsvpsResponse = await fetch(`${RSVPS_API_URL}/party/${id}`); 
    const rsvps = await rsvpsResponse.json(); 

    // create new HTML element to display party details
    const partyDetailsElement = document.createElement('div');
    partyDetailsElement.classList.add('party-details');
    partyDetailsElement.innerHTML = `
          <div id = "info">
            <h2>${party.name}</h2>
            <br>
            <p>Date: ${party.date}</p>
            <p>Description: ${party.description}</p>
            <p>ID: ${party.id}</p>
            <p>Location: ${party.location}</p>
            <p>Name: ${party.name}</p>
            <p>Time: ${party.time}</p>
            <h3>Guests: 200</h3>
            <ul>
                ${guests
                     .map(
                         (guest, index) => `
                          <li>
                             <div>${guest.name}</div>
                             <div>${rsvps[index].status}</div>
                         </li>
            `
                        )
                    .join('')}
             </ul>
          
            <button class="close-button">Close</button>
          </div>
        `;
    partyContainer.appendChild(partyDetailsElement);

    partyDetailsElement.style.color = "#B26265";
    partyDetailsElement.style.fontFamily = "Times New Roman"
    partyDetailsElement.style.fontSize = "14pt";
    
    // add event listener to close button
    const closeButton = partyDetailsElement.querySelector('.close-button');
    closeButton.addEventListener('click', () => {
      partyDetailsElement.remove();

      const parties =  getAllParties();
      renderParties(parties)
    });
  } catch (error) {
    console.log("Error:", error);
  }
};

// render all parties on the browser
const renderParties = async () => {
  try {
    const partyContainer = document.getElementById("party-container");
    const allParties = await getAllParties();

    allParties.forEach((party) => {
        const partyElement = document.createElement("div");
        partyElement.classList.add("party");
        partyElement.innerHTML = `
                  <h2>${party.name}</h2>
                  <p>${party.description}</p>
                  <p>${party.date}</p>
                  <p>${party.time}</p>
                  <p>${party.location}</p>
                  <button class="details-button" data-id="${party.id}">See Details</button>
                  <button class="delete-button" data-id="${party.id}">Delete</button>
              `;

        partyContainer.appendChild(partyElement);

        //styles     
        partyContainer.style.fontFamily = "sans-serif";
        partyContainer.style.fontSize = "16pt;"
        partyElement.style.color = "#B26265";
        partyElement.style.margin = "20px";
        partyElement.style.width = "100%";
        partyElement.style.maxWidth = "900px";
        partyElement.style.marginLeft = "auto";
        partyElement.style.marginRight = "auto";
        partyElement.style.display = "block";

    
        // see details
        const detailsButton = partyElement.querySelector('.details-button');
        detailsButton.addEventListener('click', async (event) => {
            const partyElements = document.getElementsByClassName("party");
            for(const partyElement of partyElements) {
                partyElement.style.display = "none";
            }
            
            const element = event.target;
            const dataset = element.dataset;
            const id = dataset.id;
            renderSinglePartyById(id);
      });
    
      // delete a party
      const deleteButton = partyElement.querySelector('.delete-button');
      deleteButton.addEventListener('click', async (event) => {
        const partyId = event.target.dataset.id;
        await deleteParty(partyId);
      });
    });
  } catch (error) {
        console.log("Error:", error);
  }
};

// initiate functions
const init = async () => {
    try {
        await getPartyById(1912);
        await renderParties();
    } catch (error) {
        console.log("Error:", error);
    }
};

init();


