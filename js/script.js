const dino = document.querySelector('.dino')
const background = document.querySelector('.background')
let estaPulando = false
let posicao = 0

function apertarTecla() {
  if(event.keyCode === 32 || event.keyCode === 38) {
    if(!estaPulando) {
    pular()
    }
  }
}

function pular() {
  estaPulando = true
  
  let upInterval = setInterval(()=> {
    if(posicao >= 150){
      clearInterval(upInterval)
      //Descendo
      let downInterval = setInterval(() => {
        if(posicao <= 0){
          clearInterval(downInterval)
          estaPulando = false
        } else { 
          posicao -= 20
          dino.style.bottom = posicao + 'px'
        }
      },20)
      //Subindo
    }   else {
      posicao = posicao + 20
      dino.style.bottom = posicao + 'px'
      , 20
    }
  } )
}

function criaCactos() {
  let posicaoCacto = 1000
  let cactoAleatorio = Math.random() * 5000 //Pegando número aleatório e multiplica por 6mil

  const cacto = document.createElement('div')
    cacto.classList.add('cactos')
    cacto.style.left = 1000 + 'px'
    background.appendChild(cacto)

  let leftInterval = setInterval (() => {
  if(posicaoCacto < -60) {
    clearInterval(leftInterval)
    background.removeChild(cacto)
    } else if (posicaoCacto > 0 && posicaoCacto < 60 && posicao < 60){
      //Fim de Jogo
      clearInterval(leftInterval)
      document.body.innerHTML = '<h1 class="game-over">Fim de Jogo!!!</h1>'
    } else {
      posicaoCacto -= 15
      cacto.style.left = posicaoCacto + 'px'
    }
  },20)                                  //recursividade uma função invoca ela mesma como um espelho
  setTimeout(criaCactos, cactoAleatorio) //setTimeout executa uma função depois do determinado tempo passado como parametro
}


criaCactos()
document.addEventListener('keyup',apertarTecla)
