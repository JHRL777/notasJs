const modoDarck = document.querySelector('#modoDarck')
const crearNota = document.querySelector('.crearNota')
const addNota = document.querySelector('.addNota')
const buttonNote = document.querySelector('.buttonNote')
const inputNote = document.querySelector('#inputNote')
const complet = document.querySelector('.complet')
const deleate = document.querySelector('.deleate')
const nNote = document.querySelectorAll('.nNote')

 
modoDarck.addEventListener('click', tootleModoDarck);
buttonNote.addEventListener('click', creatNote);



function tootleModoDarck(){

{
    if(modoDarck.classList.contains('bi-brightness-low')){
        modoDarck.classList.replace('bi-brightness-low','bi-moon')
        document.body.classList.add('moddark')
        crearNota.classList.add('moddark')

        nNote.forEach(note => {
            note.classList.add('moddark');
            console.log(note)
        })
        

    } else{
        modoDarck.classList.replace('bi-moon','bi-brightness-low')
        document.body.classList.remove('moddark')
        crearNota.classList.remove('moddark')
        
        nNote.forEach(note =>{
            note.classList.remove('moddark')
        })

    }

}

}



function creatNote(){

    let note = inputNote.value;

    let div = document.createElement('div');
    div.classList.add('nNote','moddark');

    let p = document.createElement('p');
    p.classList.add('parrafo');
    div.appendChild(p)
    p.innerHTML = note

    let div1 = document.createElement('div');
    div1.classList.add('icons');
    div.appendChild(div1)


    let completar = document.createElement('i')
    completar.classList.add('bi', 'bi-check-circle-fill', 'complet');
    completar.addEventListener('click', completarTarea);

    let eliminar = document.createElement('i')
    eliminar.classList.add('bi', 'bi-trash', 'deleate');
    eliminar.addEventListener('click', eliminarTarea);

    div1.append(completar,eliminar)

  addNota.appendChild(div)
}

function completarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.classList.toggle('completada');
  }

  function eliminarTarea(e) {
    let tarea = e.target.parentNode.parentNode;
    tarea.remove();
  }