var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
    
    var xhr = new XMLHttpRequest();
    //configura a requisicao dos dados na outra pagina
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){

        var erro = document.querySelector("#erro-ajax");

        if(xhr.status == 200){
            erro.classList.add("invisivel");
            var pacientes = JSON.parse(xhr.responseText);
            pacientes.forEach(function(paciente){
                adicionaAlunoNaTabela(paciente);
            });
        }else{
            var erro = document.querySelector("#erro-ajax");
            erro.classList.remove("invisivel");
        }
    });
    //envia a requisicao... 
    //ele envia a requisicao depois do listener ter sido escrito, assim a pagina vai estar pronta 
    //para ouvir o retorno do send, pois o listener ja vai estar na memoria
    xhr.send();
});