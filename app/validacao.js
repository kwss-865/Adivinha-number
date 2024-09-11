function verificaValorChuteValido(chute){
    const numero = +chute 

    if(chuteForInvalido(numero)){
        console.log('valor inválido')
    }
    if (numeroForMaiorOuMenorQueOValorPermitido(numero)){
        console.log(`Valor inválido: O número secreto precisa estar entre ${menorValor} e ${maiorValor}`)
    }
}

function chuteForInvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor 
}
