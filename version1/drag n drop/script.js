const empties=document.querySelectorAll('.empty')
const fill=document.querySelector('.fill')

fill.addEventListener('dragstart',dragStart)
fill.addEventListener('drag',dragEnd)

for(const empty of empties){
empty.addEventListener('dragover',dragOver)
empty.addEventListener('dragenter',dragEnter)
empty.addEventListener('dragleave',dragLeave)
empty.addEventListener('dragdrop',dragDrop)

}
function dragStart() {
   this.className += ' hold'
   setTimeout(()=>this.className='invisible',0)
}
function dragEnd() {
    console.className='fill'
}
function dragOver(e) {
   e.preventDefault()

}

function dragEnter(e) {
    e.preventDefault()
    this.className+=' hovered'
}
function dragLeave() {
    console.log('drag leave')
    this.className+='empty'

}
function dragDrop() {
    this.className='empty'
    this.append(fill)
}





