function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if (login == "admin" && senha == "123"){
        //vai liberar toda a página
        document.getElementById("message").innerHTML = "Bem-Vindo!!!";
        document.getElementById("mesas").style.display = 'block';

    }else{
        document.getElementById("message").innerHTML = "*dados incorretos* Tente novamente";
    }
}


//desabilita o botão no cardapio
document.getElementById("cardapio").disabled = true;

//cria um event listener que escuta mudanças no input
document.getElementById("nome01").addEventListener("input", function(event){

  //busca conteúdo do input
    var conteudo = document.getElementById("nome01").value;

    //valida conteudo do input 
    if (conteudo !== null && conteudo !== '') {
      document.getElementById("cardapio").disabled = false;
    } else {
      document.getElementById("cardapio").disabled = true;
    }
});

var m = 00;

var pedido = false

function mesa01(){
  document.getElementById("mesas").style.display = 'none';
  document.getElementById("clientes").style.display = 'block';
  document.getElementById('nmmesa').innerText = "01"
  document.getElementById('resumo').innerText = "01"

}

function cardapio(){
  document.getElementById("cardapio").style.display = 'block'
    
}
