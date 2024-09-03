const addBtn=document.querySelector('.add')
const bodyEl=document.querySelector('body')

addBtn.addEventListener('click',()=>{
    const note=document.createElement('div')
    note.className="note-area"
    bodyEl.appendChild(note)
    const header=document.createElement("div")
    header.className="header";
    const writeBtn=document.createElement('div')
    writeBtn.className='write-btn'
    header.appendChild(writeBtn)

    writeBtn.innerHTML=`<i class="fas fa-edit"></i> `
    const deleteBtn =document.createElement('div')
    deleteBtn.className="delete-btn"
      deleteBtn.innerHTML=`<i class="fas fa-trash-alt"></i>`
      header.appendChild(deleteBtn)
    note.appendChild(header)

    const texarea=document.createElement('textarea')
    texarea.className='text-area'
    texarea.cols="40"
    texarea.rows="20"
    note.appendChild(texarea)
    
})

