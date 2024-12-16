let countries =["india" , "Pakistan" , "Nepal" , "  Nagaland"]

let container =document.querySelector('.container');
let selectBtn =document.querySelector('.select-option');
let dropDownList =document.querySelector('.list-serch-container');
let searchInput = document.querySelector('#search');
let lists =dropDownList.querySelector('.list');
console.log(container);
console.log(selectBtn);

selectBtn.addEventListener('click', ()=>{
    container.classList.toggle('active');
})

function addCountry(){
    lists.innerHTML="";
    countries.forEach((country)=>{
        let listItem = '<li>' + country + '<li>';
        lists.insertAdjacentHTML('beforeend',listItem);

    })
}

addCountry();


lists.querySelectorAll('li').forEach(listitem =>{
    listitem.addEventListener('click', () =>{
        updateselectcountry(listitem)
    })
})

function updateselectcountry(listitem){
    searchInputvalue="";
    selectBtn.firstElementChild.innerHTML=listitem.innerHTML;
}