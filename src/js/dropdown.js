// for dropdown menu
const dropdown = document.getElementById('dropdown');
const dropdownDiv = document.getElementById('dropdown-div');

dropdown.addEventListener('click', ()=>{
    dropdownDiv.classList.toggle('hidden');

    if(!dropdown.classList.contains('hidden')){
        dropdownDiv.classList.add('flex');
    }
})