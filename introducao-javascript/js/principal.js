
var titulo = document.querySelector(".titulo");
console.log(titulo.textContent);


var pacientes = document.querySelectorAll(".paciente");

 
for(var i = 0; i < pacientes.length; i++){
    imcFun(i);
}





