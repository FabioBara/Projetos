
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);


var pacientes = document.querySelectorAll(".paciente");

 
for(var i = 0; i < pacientes.length; i++){
    imcFun(i);
}

var botao = document.querySelector("#adicionar-paciente");

botao.addEventListener("click", mostraMensagem);

function mostraMensagem(){
    event.preventDefault();
    var form = document.querySelector("#formAdiciona");

    var nome = form.nome.value;
    var altura = form.altura.value;
    var peso = form.peso.value;
    var gordura = form.gordura.value;   

    var pacienteTr = document.createElement("tr");

    var nomeTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");

    nomeTd.textContent = nome;
    alturaTd.textContent = altura;
    pesoTd.textContent = peso;
    gorduraTd.textContent = gordura;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

}
 





