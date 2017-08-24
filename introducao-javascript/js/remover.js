
//var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");
var cabecalho = document.querySelector("#cabecalho");

var clicouCabecalho = false;

cabecalho.addEventListener("dblclick", function(event){
    clicouCabecalho = true;
});


tabela.addEventListener("dblclick", function(event){

    if(!clicouCabecalho){
        
        event.target.parentNode.classList.add("fade-out");
        setTimeout(function(){
            event.target.parentNode.remove();
        }, 500);

    }else{
        clicouCabecalho = false;
    }
        
});


/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
       // paciente.innerHTML = "";
       this.remove();
    });
});
*/
