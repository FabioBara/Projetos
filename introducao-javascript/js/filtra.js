var filtrarTabela = document.querySelector("#filtrar-tabela");

filtrarTabela.addEventListener("input", function(){
    var pacientes = document.querySelectorAll(".paciente");

        pacientes.forEach(function(element){
            var nome = element.querySelector(".info-nome").textContent;

            if(nome.indexOf(filtrarTabela.value)> -1){
                element.querySelector(".info-nome").parentElement.classList.remove("invisivel");
            }else{
                element.querySelector(".info-nome").parentElement.classList.add("invisivel");
            }
        });
});

//var expReg = new RegExp(this.value, "i");
//expReg.test("teste")
