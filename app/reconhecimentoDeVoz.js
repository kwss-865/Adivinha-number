const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const ElementChute = document.getElementById('chute')
const recognition = new SpeechRecognition();
recognition.lang = 'pt-br'
recognition.start()

recognition.addEventListener('result', onSpeak)

function onSpeak(e){
    chute = (e.results[0] [0].transcript)
    exibeChuteNaTela(chute)
    verificaValorChuteValido(chute)
}

function exibeChuteNaTela(chute){
  ElementChute.innerHTML = `
  <div>Você disse:</div>
    <span class="box"> ${chute} </span>
  `
}


  