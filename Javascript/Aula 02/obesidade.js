function calculo(){
    var altura = parseFloat(document.getElementById("i1").value)
    var peso = parseFloat(document.getElementById("i2").value)
    var res = document.getElementById("res1")
    var msg = document.getElementById("msg")
    res.innerHTML = (peso / (altura*altura)).toFixed(2)
    if(res.innerHTML < 19.1){
        msg.textContent = "Abaixo do peso"
        msg.style.color = "blue"
    }else if(res.innerHTML >= 19.1 && res.innerHTML < 25.8){
        msg.textContent = "Peso normal"
        msg.style.color = "green"
    }else if(res.innerHTML >= 25.9 && res.innerHTML < 27.3){
        msg.textContent = "Pouco acima do peso"
        msg.style.color = "yellow"
    }else if(res.innerHTML >= 27.3 && res.innerHTML < 32.3 ){
        msg.textContent = "Acima do peso"
        msg.style.color = "orange"
    }else{
        msg.textContent = "Obesidade"
        msg.style.color = "red"
    }
}