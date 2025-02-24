function calcular(){
    var num1 = parseFloat(document.getElementById("n1").value)
    var num2 = parseFloat(document.getElementById("n2").value)
    var operador = (document.getElementById("operador").value)
    var resultado

    switch(operador){
        case "+":
            resultado = num1 + num2
            break;
        case "-":
            resultado = num1 - num2
            break;
        case "*":
            resultado = num1 * num2
            break;
        case "/":
            if(num2 !== 0){
                resultado = num1 / num2 
            }else{
                resultado = "erro na conta por 0"
            }
            break;
        default: 
            resultado = "Operador invalido"
            break;
    }
    if(resultado !== "erro na conta por 0"){
        var a = document.getElementById("resultado")
        // a.textContent = format(resultado)
    }else{
        var a = document.getElementById("resultado")
        a.textContent = resultado
    }
    console.log(resultado)
    document.getElementById("res").textContent = resultado

}
// const format = (num) => Number.isInteger(num) ?  num : num.toFixed(2)
