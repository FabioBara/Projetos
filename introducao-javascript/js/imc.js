function imcFun(i){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var verificaAtributos = true;
    
    if(peso < 0 || peso > 200){
        
        pacientes[i].classList.add("paciente-invalido");
        pacientes[i].querySelector(".info-imc").textContent = "Peso invalido!";
        verificaAtributos = false;

    }
    
    if(altura< 0 || altura > 2.5){
        
        pacientes[i].classList.add("paciente-invalido");
        pacientes[i].querySelector(".info-imc").textContent = "Altura invalida!";
        verificaAtributos = false;

    }
    if(verificaAtributos){
        var imc = calculaIMC(peso, altura);
        pacientes[i].querySelector(".info-imc").textContent = imc.toFixed(2);
    }   
}
function calculaIMC(peso, altura){
    return  peso / (altura * altura);
}
