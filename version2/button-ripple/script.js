const btnEl=document.querySelector(".btn")
btnEl.addEventListener("click",(event)=>{
//    console.log(event.pageX - btnEl.offsetLeft)
const x=(event.pageX-btnEl.offsetLeft)
const y=(event.pageX-btnEl.offsetTop)

btnEl.style.setProperty("--xPos",x+"px")
btnEl.style.setProperty("--yPos",y+"px")


})