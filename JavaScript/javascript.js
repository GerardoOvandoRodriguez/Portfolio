const navbarText = document.querySelectorAll('.link');
const nave = [];

for(let i = 0; i < navbarText.length; i++){
    nave.push(navbarText[i]) ;
}

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

const cardArray = [];

for(let i=0;i < card.length;i++){
    cardArray.push(card[i]); 
};

cardArray.forEach(e =>{
    
    e.addEventListener('mouseenter',()=>{
       e.style.scale = "110%" 
    });
    e.addEventListener('mouseout',()=>{
        e.style.scale = "100%" 
     });
});

const button = document.querySelector('.Button');

console.log(button);

button.addEventListener('mouseenter',()=>{
    button.style.scale = "110%";
})
button.addEventListener('mouseout',()=>{
    button.style.scale = "100%";
})
















