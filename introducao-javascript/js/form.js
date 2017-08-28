
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (){

    event.preventDefault();
    var form = document.querySelector("#formAdiciona");

    var paciente = obtemDadosForm(form);
    if(validaPaciente(paciente)){
        
        
        adicionaAlunoNaTabela(paciente);
        
        form.reset(); 
    }
});

function adicionaAlunoNaTabela(paciente){


    pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}



 function obtemDadosForm(form){

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value).toFixed(2)
    }
    return paciente; 
 }

 function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

        pacienteTr.appendChild(criaTd(paciente.nome, "nome"));
        pacienteTr.appendChild(criaTd(paciente.peso, "peso"));
        pacienteTr.appendChild(criaTd(paciente.altura, "altura"));
        pacienteTr.appendChild(criaTd(paciente.gordura, "gordura"));
        pacienteTr.appendChild(criaTd(paciente.imc, "imc"));
        
        return pacienteTr;
    
 }

 function criaTd (dado, classe){
     var td = document.createElement("td");
     td.textContent = dado;
     td.classList.add("info-"+classe);
     return td;
 }

function validaPaciente(paciente){
    var retorno = true;
    var ul = document.querySelector("#mensagem-erro");
    ul.innerHTML = "";

    if(paciente.nome.length == 0){
        retorno = false;
        ul.appendChild(criaLi("* Paciente com nome invalido "));
    }
    if(paciente.gordura.length == 0){
        retorno = false;
        ul.appendChild(criaLi("* Paciente com gordura invalida "));
    }

    if(!validaAltura(paciente.altura)){
        retorno = false;
        ul.appendChild(criaLi("* Paciente com altura invalida "));
    }

    if(!validaPeso(paciente.peso)){
        retorno = false;
        ul.appendChild(criaLi("* Paciente com peso invalido "));
    }
    return retorno;
}

function criaLi(menssagem){
    var li = document.createElement("li");
    li.textContent = menssagem ;
    li.classList.add("mensagem-erro");
    return li;
}