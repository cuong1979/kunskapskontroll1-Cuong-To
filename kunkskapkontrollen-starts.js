//   1  //återställsknappen
let btns = document.querySelectorAll('button');
let reset = btns[2];
reset.innerText = 'RESET';


// 2 //Sätt en event listner på reset-knappen
reset.addEventListener('click', resetAll);
   

// 3 // sätt event listener för första knappen
let knapp1 = btns[0];
knapp1.addEventListener('click', function(event){
    changeImg();
    changeButtonColor();
   
});

//  4 //ändra andra bilden på bakgrundfärg
let figure = document.querySelectorAll('figure');

figure[1].addEventListener('click', function(e){
    figure[1].style.backgroundColor = 'grey'
})

// 5 // 
function resetAll(){
    // 6 //reset art1 till vit  bakgrund
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    // 7 // reset tillbaka den ursprunglig bilden 
    let article = document.querySelector('figure')
    let articleChild = article.children;
    articleChild[0].setAttribute('src', 'img/hoodie-ash.png');

    // 8 //reset tillbaka den ursprunglig färgen
    let figure = document.querySelectorAll('figure');
    let colorChange = figure[1];
    colorChange.style.backgroundColor = 'rgb(244, 182, 10)';
    
    // 9 //reset tillbaka dom två knappar ursprunglig färg
    let button = document.querySelectorAll('button');
    button[1].style.color = 'white';
    button[2].style.color = 'white';
    
    // 10 // reset tillbaka dom texter ursprunglig text.
    let h2 = document.querySelectorAll('h2');
    h2[0].innerText = 'Sinus Hoodie';
    h2[1].innerText = 'Sinus Hoodie';
    h2[2].innerText = 'Sinus Hoodie';

    // 11 //reset knappen gör att man kan tar nav tar tillbaka nav element.
    let createAgainElement = document.querySelector('header');
    createAgainElement.appendChild(createNav);

    
    // 12 // reset knapp gör att li listan borta  
        let ulDel = document.querySelector('ul')     
        ulDel.style.display = 'none'
}       
 
    // 13 //clicka på texten contact då ändra alla texter Sinus Hoodie 
    let navElement = document.querySelector('#header-navigation');
    let navChildren = navElement.children;
    navChildren[2].addEventListener('click', function(e){
        let h2 = document.querySelectorAll('h2');
        h2[0].innerText = 'GREY';
        h2[1].innerText = 'RED';
        h2[2].innerText = 'BLUE';
})

    // 14 // mus lämma logo längst till vänster gör att nav elementer försvinner
    let createNav = document.querySelector ('nav')
    let delLogo = document.querySelector('img');
    delLogo.addEventListener('mouseleave', function(event){
        let logoNav = document.getElementById('header-navigation');
         if(logoNav != null){ 
            logoNav.remove();
        }
    })
    
    // 15 //ändra art-1 bakgrungfärg till hot pink med keydown h eller H
    let htmlElement = document.querySelector('html');
    htmlElement.addEventListener('keydown', function(event){
        let art1 = document.querySelector('.art-1');
        
        if(event.key == 'h' || event.key =='H'){
            art1.style.backgroundColor = 'hotpink'
        }
    })
        
    

// 16 //ändra första bilden på en den första knappen
function changeImg(){
let article = document.querySelector('figure')
let articleChild = article.children;
articleChild[0].setAttribute('src', 'img/hoodie-forrest.png');
}

// 17 //clicka första knapp  ändra färg på två sista  knappar
function changeButtonColor(){
    let button = document.querySelectorAll('button');
    button[1].style.color = 'red'
    button[2].style.color = 'orange'
    
}


// 18 // hämta body tagg så jag lägga in den ny ul som jag skapa
let body = document.querySelector('body')

// 19 //skapa en ny ul element 
let newUl = document.createElement('ul');

// 20 //lägga in i body 
body.appendChild(newUl);

// 21 // hämta ul
let ul = document.querySelector('ul');

// 22 //loopa genom dom så alla får en class 
for(let i=0; i<5; i++){
    let newLi = document.createElement('li');
    newLi.setAttribute('class', 'list-item');
    // sätta in li listan till ul 
    ul.appendChild(newLi);
    //console.log(newLi) 
} 
   // 23 // hämta alla li 
let li = document.querySelectorAll('li');

// 24 // loopa genom så alla li får border röd
for(let y=0; y<li.length; y++){
    li[y].style.border = 'solid 2px red'
   
}

// 25 // gör att ul elemnent ej synligt i webben 
ul.style.display = 'none'

//  26 //med en click på logo lägst upp sidan gör att ul elementet synligt.
let img = document.querySelectorAll('img');
img[0].addEventListener('click', function(){
    ul.style.display = 'block'
})











