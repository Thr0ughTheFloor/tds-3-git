function calcular(id1, id2, respId, operador){
    var num1 = parseFloat(document.getElementById(id1).value)
    var num2 = parseFloat(document.getElementById(id2).value)
    var resultado
    switch(operador){
        case '+':
            resultado = num1 + num2
            console.log(resultado)
            break
        case '-':
            resultado = num1 - num2
            console.log(resultado)
            break
        case 'x':
            resultado = num1 * num2
            console.log(resultado)
            break
        case '/':
            if(num2!=0){
                resultado = num1 / num2
                console.log(resultado)
            }else{
                resultado = "Erro: divisão por 0"
            }
            break
        default:"Operador invalido"
            break
    }
    document.getElementById("res").textContent = resultado
}