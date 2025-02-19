function calculo(){
    var ano = parseInt(document.getElementById("ano").value)
    var idade, idadereal;
    idade = ano - 2025
    idadereal = idade * (-1)
    console.log(idadereal)
    var resultado = document.getElementById("res")
    resultado.innerHTML = idadereal
    var msg = document.getElementById("msg")
    if(idadereal<18){
        msg.textContent = "Você não pode entrar"
        msg.style.color = "red"
    }else{
        msg.textContent = "Seja bem-vindo"
        msg.style.color = "green"
    }
}