function imcFun(i){
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var verificaAtributos = true;
    
    if(!validaPeso(peso)){
        
        pacientes[i].classList.add("paciente-invalido");
        pacientes[i].querySelector(".info-imc").textContent = "Peso invalido!";
        verificaAtributos = false;

    }
    
    if(!validaAltura(altura)){
        
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

function validaPeso(peso){
    if(peso > 0 && peso < 200){
        return true;
    }
    return false;
}

function validaAltura(altura){
    if(altura > 0 && altura < 2.5){
        return true
    }
    return false;
}