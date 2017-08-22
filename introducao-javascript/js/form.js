
var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", function (){

    event.preventDefault();
    var form = document.querySelector("#formAdiciona");

    var paciente = obtemDadosForm(form);

    pacienteTr = montaTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    form.reset();

});

 function obtemDadosForm(form){

    var paciente = {
        nome: form.nome.value,
        altura: form.altura.value,
        peso: form.peso.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value).toFixed(2)
    }
    return paciente; 
 }

 function montaTr(paciente){

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    
        pacienteTr.appendChild(criaTd(paciente.nome, "nome"));
        pacienteTr.appendChild(criaTd(paciente.altura, "altura"));
        pacienteTr.appendChild(criaTd(paciente.peso, "peso"));
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