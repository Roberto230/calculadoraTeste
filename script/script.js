function botao(num){
    var valor = document.getElementById("janelaResult").innerHTML += num;
}

function clean() {
    document.getElementById("janelaResult").innerHTML = "";
    console.log("clear");
}

function calcular(){
    var resultado = document.getElementById("janelaResult").innerHTML;
    if(resultado){
        document.getElementById("janelaResult").innerHTML = eval(resultado); 
    }else {
        document.getElementById("janelaResult").innerHTML = "Nada para calcular!";
    }
}