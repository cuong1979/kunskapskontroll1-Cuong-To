//Test

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
    changeImg();
    changeButtonColor();
   
});

//ändra andra bilden på bakgrundfärg med den förta knappen
let figure = document.querySelectorAll('figure');
let colorChange = figure[1];
colorChange.addEventListener('click', function(e){
    colorChange.style.backgroundColor = 'grey'
})

function resetAll(){
    // reset art1 till white background
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    // reset tillbaka den ursprunglig bilden 
    let article = document.querySelector('figure')
    let articleChild = article.children;
    articleChild[0].setAttribute('src', 'img/hoodie-ash.png');

    // reset tillbaka den ursprunglig färgen
    let figure = document.querySelectorAll('figure');
    let colorChange = figure[1];
    colorChange.style.backgroundColor = 'rgb(244, 182, 10)';
    
    //reset tillbaka dom två knappar ursprunglig färg
    let button = document.querySelectorAll('button');
    button[1].style.color = 'white';
    button[2].style.color = 'white';
    
    // reset tillbaka dom texter ursprunglig text.
    let h2 = document.querySelectorAll('h2');
    h2[0].innerText = 'Sinus Hoodie';
    h2[1].innerText = 'Sinus Hoodie';
    h2[2].innerText = 'Sinus Hoodie';

    // reset knappen gör att man kan tar nav tar tillbaka nav element.
    let removeElement = document.querySelector('nav');
            removeElement.style.display = 'block';

    // reset knapp gör att li listan borta  
        let ulDel = document.querySelectorAll('ul')     
        ul.style.display = 'none'
}       
 
// clicka på texten contact då ändra alla texter Sinus Hoodie 
    let navElement = document.querySelector('#header-navigation');
    let navChildren = navElement.children;
    navChildren[2].addEventListener('click', function(e){
        let h2 = document.querySelectorAll('h2');
        h2[0].innerText = 'GREY';
        h2[1].innerText = 'RED';
        h2[2].innerText = 'BLUE';
})

    // clicka knappen på mitten gör att nav elementer försvinner
    
    let btn2 = document.querySelectorAll('button');
        btn2[1].addEventListener('click', function(){
            let removeElement = document.querySelector('nav');
            removeElement.style.display = 'none';
        });
        

        
    


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



// clicka första knapp  ändra färg på två sista  knappar
function changeButtonColor(){
    let button = document.querySelectorAll('button');
    button[1].style.color = 'red'
    button[2].style.color = 'red'
    
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
    // sätta in li listan till ul 
    ul.appendChild(newLi);
    console.log(newLi) 
} 
    
let li = document.querySelectorAll('li');
// loopa genom så alla li får border röd
for(let y=0; y<li.length; y++){
    li[y].style.border = 'solid 2px red'
   
}

// gör att ul elemnent ej synligt i webben 
ul.style.display = 'none'

// med en click på logo lägst upp sidan gör att ul elementet synligt.
let img = document.querySelectorAll('img');
img[0].addEventListener('click', function(){
    ul.style.display = 'block'
})











