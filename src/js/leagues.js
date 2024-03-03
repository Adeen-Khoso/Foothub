// initializing variables
let leaguesTable = document.getElementById('leagues-table');
let itemContainer = document.getElementById('item-container');
const defaultUrl = "https://api-football-standings.azharimm.dev/leagues";

// fetching details from the api
fetch(defaultUrl)
.then(response => response.json())
.then(details => details.data.forEach(element => {
    createItem(element.logos.light,element.name,element.abbr,element.id)
})).catch(err => {
    console.log(`${err} couldnt create and item here`)
})

// create item in league table
function createItem(logoSrc,leagueName,leagueAbbr,leagueId){
    let item = document.createElement('div');
    item.innerHTML = `

        <img src="${logoSrc}" alt="img" class="w-12"> 

        <div class="flex flex-col justify-center items-start">
            <h1 class="font-poppins font-semibold text-primary_dark text-sm sm:text-2xl">${leagueName}</h1>
            <p class="font-poppins font-normal text-primary_light text-xs sm:text-base">Abbr : ${leagueAbbr}</p>
        </div>

    `
    item.classList.add("border-b-2", "border-b-light", "w-full","flex","justify-start", "items-center", "gap-2", "sm:gap-4", "py-2" , "hover:bg-primary_bg" ,"hover:rounded-2xl","cursor-pointer")
    leaguesTable.appendChild(item);

    // url parameter
    item.href = `teams.html?id=${leagueId}`
    let itemsURL = item.href;

    item.addEventListener("click", ()=>{
        window.location.href = itemsURL;
    });
};

