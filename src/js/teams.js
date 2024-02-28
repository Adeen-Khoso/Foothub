
// for dropdown menu
const dropdown = document.getElementById('dropdown');
const dropdownDiv = document.getElementById('dropdown-div');

dropdown.addEventListener('click', ()=>{
    dropdownDiv.classList.toggle('hidden');
})


// fetching data from server
fetch('https://api-football-standings.azharimm.dev/leagues').then(response => response.json())
.then(details => leagueId = details.data.forEach(element => {
    gettingId(element.id)
}))

function gettingId(id){
    const leagueId = id;
    const itemId = location.search.split("=")[1];
    
    if(itemId == leagueId){
        fetch(`https://api-football-standings.azharimm.dev/leagues/${leagueId}`).then(response => response.json()).then(details => console.log(details))
    }
}
   
// it is all sorted, i just have to find a way to just go through and think about how to access the standings and show them !! thats it 