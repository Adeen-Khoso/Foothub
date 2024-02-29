// for dropdown menu
const dropdown = document.getElementById('dropdown');
const dropdownDiv = document.getElementById('dropdown-div');

dropdown.addEventListener('click', ()=>{
    dropdownDiv.classList.toggle('hidden');
})

// initializing elements
const heading = document.getElementById('heading');
const itemContainer = document.getElementById('item-container');
// let width = screen.width;

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

let abbr;

function outputData(leagueId,itemId){
    if(itemId == leagueId){
        fetch(`${defaultUrl}/${leagueId}/standings?season=2023&sort=asc`).then(response => response.json())
        .then((details) => {
            
            setTableHeading(details.data.abbreviation, details.data.season)
            console.log(details.data)

            let teamName ;
            
            details.data.standings.forEach(element => {

                // for responsiveness
                let displayName = element.team.displayName;
                let abbr = element.team.abbreviation;

                function nameCheck(name,abbr){
                    if(screen.width > 700){
                        teamName = name;
                    }else{
                        teamName = abbr;
                    }
                }
                nameCheck(displayName,abbr)
                
                setItem(
                    element.stats[10].displayValue,
                    teamName,
                    element.stats[0].value,
                    element.stats[7].value,
                    element.stats[1].value,
                    element.stats[6].value,
                    element.stats[3].value,
                    element.team.logos[0].href
                );
            });
        })
    }
}

function setTableHeading(abbr,season){
    heading.innerHTML = abbr;
    dropdown.innerHTML = ` ${season}/${season+1} <span class="text-xs" id="dropdown-span">▼</span>`
}

function setItem(rank, name, gamesPlayed, wins, loss, draws, points,logo){
    let item = document.createElement("div");
    item.classList.add("flex", "gap-7", "justify-between", "border-b-2" ,"border-b-light", "py-2" ,"px-1" ,"sm:px-2" ,"sm:gap-12");
    item.innerHTML = `
        <div class="flex items-center justify-center gap-4 sm:gap-12">
        
            <h1 class="font-poppins font-semibold text-base sm:text-lg text-primary_light">${rank}</h1>

            <div class="flex flex-row justify-center items-center gap-2 sm:gap-4">
                <img src="${logo}" alt="" class="w-5 sm:w-7">
                <h1 class="font-poppins font-semibold capitalize text-base sm:text-2xl text-primary_dark ">${name}</h1>
            </div>
        
        </div>

        <div class="flex items-center gap-5 sm:gap-20 sm:flex-nowrap w-44 sm:w-auto">
            <div class="font-poppins text-primary_dark text-xs sm:text-base">
                GP <span class="font-poppins font-semibold text-primary_light">${gamesPlayed}</span> 
            </div>
            <div class="font-poppins text-primary_dark text-xs sm:text-base">
                W <span class="font-poppins font-semibold text-primary_light">${wins}</span> 
            </div>
            <div class="font-poppins text-primary_dark text-xs sm:text-base">
                L <span class="font-poppins font-semibold text-primary_light">${loss}</span> 
            </div>
            <div class="font-poppins text-primary_dark text-xs sm:text-base">
                D <span class="font-poppins font-semibold text-primary_light">${draws}</span> 
            </div>
            <div class="font-poppins text-primary_dark text-xs sm:text-base">
                P <span class="font-poppins font-semibold text-primary_light">${points}</span> 
            </div>
        </div>
    `;
    itemContainer.appendChild(item);
}


// now here i have all the data for showing it initially 
// next step is to show the inital data to frontend 
// after that we need to setup the season thingy so yeah