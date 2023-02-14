function tocaSom(seletorAudio){
   const elemento = document.querySelector(seletorAudio);
    
   if(elemento && elemento.localName === 'audio'){
        elemento.play();
    } else {
       console.log('Elemento nao encontrado')
    }
  
}

const ListaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;


for(let contador = 0; contador < ListaDeTeclas.length; contador++){

    const tecla = ListaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`

    tecla.addEventListener('click', function (){
        tocaSom(idAudio);
    })

    tecla.onkeydown = function(eventSpace){

      if(eventSpace.code === 'Space' || eventSpace.code === 'Enter'){
        tecla.classList.add('ativa');
      } 

     

    }

    tecla.onkeyup = function(){
        tecla.classList.remove('ativa');
    }

}



