
let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []


function isNumero(n){

    if(Number(n) >= 1 && Number(n) <= 100){

        return true

    }else{

        return false

    }

}

function inLista(l, n){

    if(l.indexOf(Number(n)) != -1){

        return true

    }else{

        return false

    }

}




function adicionar (){

    //Se o valor de isNumero for realmente um numero e nao estiver na lista..
    if(isNumero(num.value) && !inLista(num.value)){

        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} foi adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    
    }else{

        window.alert('Valor inválido ou já encontrado na lista')

    }

    //Retirar valor já adicionado de "num" e voltar a piscar o cursor na lista para adicionar o proximo valor.
    num.value = ''
    num.focus()

}

function finalizar(){

    if(valores.length == 0){

        windows.alert('Adicione valores antes de finalizar')

    }else{

        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){

            //Se o valor de "pos", dentro da variavel valores, for maior que a variavel "maior", que tem valor zero por padrao, então a variavel "maior" recebe esse mesmo valor"
            if(valores[pos] > maior)
                maior = valores[pos]
               
            if(valores[pos] < menor)
                menor = valores [pos]

            soma += valores[pos]

        }

        media = soma/total

        res.innerHTML = ''
        res.innerHTML += `<p> Ao todo, temos ${total} números cadastrados.</p>`
        res.innerHTML += `<p> O maior valor é ${maior}.</p>`
        res.innerHTML += `<p> O menor valor é ${menor}.</p>`
        res.innerHTML += `<p> A soma é igual à ${soma}.</p>`
        res.innerHTML += `<p> A média é igual à ${media}.</p>`
    }

}