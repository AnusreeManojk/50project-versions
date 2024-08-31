const nav = document.querySelector('.nav');
const bodyEl = document.querySelector('body');



window.addEventListener('scroll',()=>{
    const scrollPosition = window.scrollY; 
    if (scrollPosition > 130) {  
        nav.style.backgroundColor = "white";
        nav.style.color='black'
        
    } else {
    
        nav.style.backgroundColor = "black";
    }})