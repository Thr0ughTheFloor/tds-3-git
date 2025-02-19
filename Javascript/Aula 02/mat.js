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

    