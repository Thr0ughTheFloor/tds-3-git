function somar(){
    var numero1 = parseFloat(document.getElementById("n1").value)
    var numero2 = parseFloat(document.getElementById("n2").value)
     
    var res = document.getElementById("res1")
    res.innerHTML = numero1 + numero2
}
function subtrair(){
    var numero1 = parseFloat(document.getElementById("n3").value)
    var numero2 = parseFloat(document.getElementById("n4").value)
     
    var res = document.getElementById("res2")
    res.innerHTML = numero1 - numero2
    }

    function mult(){
    var numero1 = parseFloat(document.getElementById("n5").value)
    var numero2 = parseFloat(document.getElementById("n6").value)
     
    var res = document.getElementById("res3")
    res.innerHTML = numero1 * numero2
    }

    function dividir(){
    var numero1 = parseFloat(document.getElementById("n7").value)
    var numero2 = parseFloat(document.getElementById("n8").value)
     
    var res = document.getElementById("res4")
    if(numero2 !== 0){
        res.innerHTML = (numero1 / numero2).toFixed(1)
    }else{
        res.innerHTML = "ERRO"
    }
    
    }
    function media(){
        var numero1 = parseFloat(document.getElementById("m1").value)
        var numero2 = parseFloat(document.getElementById("m2").value)
        var numero3 = parseFloat(document.getElementById("m3").value)
        var numero4  = parseFloat(document.getElementById("m4").value)

        var res = document.getElementById("resMedia")
        var msg = document.getElementById("msg")
        res.innerHTML = (numero1 + numero2 + numero3 + numero4) / 4
        if(res.innerHTML >= 7){
            msg.textContent = "Aprovado"
            msg.style.color = "green"
        }else{
            msg.textContent = "Reprovado"
            msg.style.color = "red"
        }

        }

    