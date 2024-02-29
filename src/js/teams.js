
// for dropdown menu
const dropdown = document.getElementById('dropdown');
const dropdownDiv = document.getElementById('dropdown-div');

dropdown.addEventListener('click', ()=>{
    dropdownDiv.classList.toggle('hidden');
})

// default_url/parent_url
const defaultUrl = "https://api-football-standings.azharimm.dev/leagues";
const itemId = location.search.split("=")[1];

fetch(defaultUrl).then(response => response.json())
.then(details => leagueId = details.data.forEach(element => {
    gettingId(element.id)
}))

function gettingId(id){
    const leagueId = id;
    outputData(leagueId,itemId)
}
   
function outputData(leagueId,itemId){
    if(itemId == leagueId){
        fetch(`${defaultUrl}/${leagueId}/standings?season=2023&sort=asc`).then(response => response.json())
        .then(details => console.log(details))
    }
}

// now here i have all the data for showing it initially 
// next step is to show the inital data to frontend 
// after that we need to setup the season thingy so yeah