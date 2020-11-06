//återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


//Sätt en event listner på reset-knappen
reset.addEventListener('click', resetAll);
   

//sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', function(event){
    changeArt1toHotPink();
    changeH2inArt2();
    changeImg();
    changeBackground();
    changeH2();
    changeButtonColor();
    remove('art-2');
    
});

function resetAll(){
    // reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    // reset tillbaka den ursprunglig bilden 
    let article = document.querySelector('figure')
    let articleChild = article.children;
    articleChild[0].setAttribute('src', 'img/hoodie-ash.png');

    // reset tillbaka den ursprunglig färgen
    let figure = document.querySelector('figure');
    figure.style.backgroundColor = 'rgb(244, 182, 10)';
    
    //reset tillbaka den ursprunglig text
    let newH2 = document.querySelector('h2');
    newH2.innerText = 'Sinus Hoodie'
    
    //reset tillbaka den ursprunglig färg
    let button = document.querySelector('button');
    button.style.color = 'white';

    
}
 


function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//ändrar art-1 bakgrungfärg till hot pink
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}

// ändra första bilden på en den förta knappen
function changeImg(){
let article = document.querySelector('figure')
let articleChild = article.children;
articleChild[0].setAttribute('src', 'img/hoodie-forrest.png');
}

//ändra första bilden på bakgrundfärg med den förta knappen
function changeBackground(){
    let figure = document.querySelector('figure');
    figure.style.backgroundColor = 'grey'
}

// ändra första bilden på text med den första  knappen
function changeH2(){
    let newH2 = document.querySelector('h2');
    newH2.innerText = 'HELLO DOM'
}
// ändra första knappen text ändra färg med den första knappen
function changeButtonColor(){
    let button = document.querySelector('button');
    button.style.color = 'red'
}




// hämta body tagg så jag lägga in den ny ul som jag skapa
let body = document.querySelector('body')
// skapa en ny ul element 
let newUl = document.createElement('ul');
// lägga in i body 
body.appendChild(newUl);
// hämta ul

let ul = document.querySelector('ul');
// loopa genom dom så alla får en class 
for(let i=0; i<5; i++){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'list-item');
    ul.appendChild(newLi);
}

let li = document.querySelectorAll('li');

for(let y=0; y<li.length; y++){
    li[y].style.border = 'solid 2px red'
}










