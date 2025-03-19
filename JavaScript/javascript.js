const navbarText = document.querySelectorAll('.link');
const nave = [];

for(let i = 0; i < navbarText.length; i++){
    nave.push(navbarText[i]) ;
}

console.log(navbarText[1]);
console.log(nave);

nave.forEach(e =>{

    e.addEventListener('mouseenter',()=>{
        e.style.color = "white";
        e.style.fontSize = "1.1em"
    })
    e.addEventListener('mouseout',()=>{
        e.style.color = "lightgrey";
        e.style.fontSize = "1em"
    })

}) 
// Cards animation

const card = document.querySelectorAll('.Card');
console.log(card);

const cardArray = [];

for(let i=0;i < card.length;i++){
    cardArray.push(card[i]); 
};
console.log(cardArray);

cardArray.forEach(e =>{
    
    e.addEventListener('mouseenter',()=>{
       e.style.height = "380px" 
    });
    e.addEventListener('mouseout',()=>{
        e.style.height = "350px" 
     });
    e.addEventListener('mouseenter',()=>{
        e.style.width = "31%" 
    });
    e.addEventListener('mouseout',()=>{
        e.style.width = "30%" 
    });
    
});

//Words animation
const words = document.querySelector('.NameAnimation');
console.log(words.textContent.split("", words.textContent.length));

const nameAnimation = words.textContent;



console.log(nameAnimation.length);

const wordsArray = words.textContent.split("",words.textContent.length);
const wordsArray2 = [words.textContent.split("",words.textContent.length)]

console.log(wordsArray2)

for(let i=0;i < nameAnimation.length;i++){
    
}


function animation(){
    
    wordsArray.pop();
    words.textContent = wordsArray;
}



setInterval(animation,150);










