function login(){
    var login = document.getElementById('login').value;
    var senha = document.getElementById('password').value;

    if (login == "admin" && senha == "123"){
        //vai liberar toda a página
        document.getElementById("message").innerHTML = "Bem-Vindo!!!";
        document.getElementById("pagina2").style.display = 'block';

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
  document.getElementById("pagina2").style.display = 'none';
  document.getElementById("pagina3_m01").style.display = 'block';
  document.getElementById("pagina3_m02").style.display = 'none';
  document.getElementById("pagina3_m03").style.display = 'none';
  document.getElementById("pagina3_m04").style.display = 'none';
  document.getElementById("pagina3_m05").style.display = 'none';
  document.getElementById("pagina3_m06").style.display = 'none';
  document.getElementById('nmmesa').innerText = "01"
  document.getElementById('resumo').innerText = "01"

}
function mesa02(){
    document.getElementById("pagina2").style.display = 'none';
    document.getElementById("pagina3_m02").style.display = 'block';
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'none';
    document.getElementById('nmmesa').innerText = "02"
    document.getElementById('resumo').innerText = "02"
}
function mesa03(){
    document.getElementById("pagina2").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'block';
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById("pagina3_m02").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'none';
    document.getElementById('nmmesa').innerText = "03"
    document.getElementById('resumo').innerText = "03"
}
function mesa04(){
    document.getElementById("pagina2").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'block';
    document.getElementById("pagina3_m02").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'none';
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'none';
    document.getElementById('nmmesa').innerText = "04"
    document.getElementById('resumo').innerText = "04"
  
}
function mesa05(){
    document.getElementById("pagina2").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'block';
    document.getElementById("pagina3_m02").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'none';
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'none';
    document.getElementById('nmmesa').innerText = "05"
    document.getElementById('resumo').innerText = "05"
  
}
function mesa06(){
    document.getElementById("pagina2").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'block';
    document.getElementById("pagina3_m02").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'none';
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById('nmmesa').innerText = "06"
    document.getElementById('resumo').innerText = "06"
  
}

function cardapio(){
    document.getElementById("cardp1").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
    
}
function cardapio02(){
    document.getElementById("cardp2").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
   }
function cardapio03(){
    document.getElementById("cardp3").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
}    
function cardapio04(){
    document.getElementById("cardp4").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
    }    
function cardapio05(){
    document.getElementById("cardp5").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
}

function cardapio06(){
    document.getElementById("cardp6").style.display = 'block'
    document.getElementById("pagina2").style.display = 'none';
}
function voltar(){
    document.getElementById("cardp1").style.display = 'none'
    document.getElementById("cardp2").style.display = 'none'
    document.getElementById("cardp3").style.display = 'none'
    document.getElementById("cardp4").style.display = 'none'
    document.getElementById("cardp5").style.display = 'none'
    document.getElementById("cardp6").style.display = 'none'
    document.getElementById("pagina2").style.display = 'block'
    document.getElementById("pagina3_m01").style.display = 'none';
    document.getElementById("pagina3_m02").style.display = 'none';
    document.getElementById("pagina3_m03").style.display = 'none';
    document.getElementById("pagina3_m04").style.display = 'none';
    document.getElementById("pagina3_m05").style.display = 'none';
    document.getElementById("pagina3_m06").style.display = 'none';

    
}
function salvarpedi(){
    document.querySelector('#v_mesa01').textContent = "OCUPADO";
    document.getElementById('v_mesa01').style.color = "red";  
}
function salvarpedi02(){
    document.querySelector('#v_mesa02').textContent = "OCUPADO";
    document.getElementById('v_mesa02').style.color = "red";  
}
function salvarpedi03(){
    document.querySelector('#v_mesa03').textContent = "OCUPADO";
    document.getElementById('v_mesa03').style.color = "red";  
}
function salvarpedi04(){
    document.querySelector('#v_mesa04').textContent = "OCUPADO";
    document.getElementById('v_mesa04').style.color = "red";  
}
function salvarpedi05(){
    document.querySelector('#v_mesa05').textContent = "OCUPADO";
    document.getElementById('v_mesa05').style.color = "red";  
}
function salvarpedi06(){
    document.querySelector('#v_mesa06').textContent = "OCUPADO";
    document.getElementById('v_mesa06').style.color = "red";  
}


function fecharpedi(){
    document.querySelector('#v_mesa01').textContent = "LIVRE";
    document.getElementById('v_mesa01').style.color = "green"; 

}
function fecharpedi02(){
    document.querySelector('#v_mesa02').textContent = "LIVRE";
    document.getElementById('v_mesa02').style.color = "green";  
}
function fecharpedi03(){
    document.querySelector('#v_mesa03').textContent = "LIVRE";
    document.getElementById('v_mesa03').style.color = "green";  
}
function fecharpedi04(){
    document.querySelector('#v_mesa04').textContent = "LIVRE";
    document.getElementById('v_mesa05').style.color = "green";  
}
function fecharpedi05(){
    document.querySelector('#v_mesa05').textContent = "LIVRE";
    document.getElementById('v_mesa05').style.color = "green";  
}
function fecharpedi06(){
    document.querySelector('#v_mesa06').textContent = "LIVRE";
    document.getElementById('v_mesa06').style.color = "green";  
}


// mesa




//  //variaveis produtos mesa 0
// Variaveis Café
 var expresso_mesa01 = 0;
 var expresso_mesa02 = 0;
 var expresso_mesa03 = 0;
 var expresso_mesa04 = 0;
 var expresso_mesa05 = 0;
 var expresso_mesa06 = 0;

 var valor_expresso = 6;

 var cappuccino_mesa01 = 0;
 var cappuccino_mesa02 = 0;
 var cappuccino_mesa03 = 0;
 var cappuccino_mesa04 = 0;
 var cappuccino_mesa05 = 0;
 var cappuccino_mesa06 = 0;

 var valor_cappuccino = 7.90;


 var  mocha_mesa01 = 0;
 var  mocha_mesa02 = 0;
 var  mocha_mesa03 = 0;
 var  mocha_mesa04 = 0;
 var  mocha_mesa05 = 0;
 var  mocha_mesa06 = 0;

 var valor_mocha = 6.50;

 var  duplo_mesa01 = 0;
 var  duplo_mesa02 = 0;
 var  duplo_mesa03 = 0;
 var  duplo_mesa04 = 0;
 var  duplo_mesa05 = 0;
 var  duplo_mesa06 = 0;
 var  duplo_mesa01 = 0;

 var valor_duplo = 8.90;



 // variaveis bebidas
 var  agua_mesa01 = 0;
 var  agua_mesa02 = 0;
 var  agua_mesa03 = 0;
 var  agua_mesa04 = 0;
 var  agua_mesa05 = 0;
 var  agua_mesa06 = 0;

 var valor_agua = 4;


 var  refri_mesa01 = 0;
 var  refri_mesa02 = 0;
 var  refri_mesa03 = 0;
 var  refri_mesa04 = 0;
 var  refri_mesa05 = 0;
 var  refri_mesa06 = 0;

 var valor_refri = 5.50;


 var cha_mesa01 = 0;
 var cha_mesa02 = 0;
 var cha_mesa03 = 0;
 var cha_mesa04 = 0;
 var cha_mesa05 = 0;
 var cha_mesa06 = 0;

 var valor_cha = 6;



 //variaveis bolos
 var  bchocolate_mesa01 = 0;
 var  bchocolate_mesa02 = 0;
 var  bchocolate_mesa03 = 0;
 var  bchocolate_mesa04 = 0;
 var  bchocolate_mesa05 = 0;
 var  bchocolate_mesa06 = 0;

 var valor_bchocolate = 14.50;


 var  cenoura_mesa01 = 0;
 var  cenoura_mesa02 = 0;
 var  cenoura_mesa03 = 0;
 var  cenoura_mesa04 = 0;
 var  cenoura_mesa05 = 0;
 var  cenoura_mesa06 = 0;

 var valor_cenoura = 15;


 var  limao_mesa01 = 0;
 var  limao_mesa02 = 0;
 var  limao_mesa03 = 0;
 var  limao_mesa04 = 0;
 var  limao_mesa05 = 0;
 var  limao_mesa06 = 0;

 var valor_limao = 13.90;


 var  sensacao_mesa01 = 0;
 var  sensacao_mesa02 = 0;
 var  sensacao_mesa03 = 0;
 var  sensacao_mesa04 = 0;
 var  sensacao_mesa05 = 0;
 var  sensacao_mesa06 = 0;

 var valor_sensacao = 17.95;

 //variaveis salgados
 var  coxinha_mesa01 = 0;
 var  coxinha_mesa02 = 0;
 var  coxinha_mesa03 = 0;
 var  coxinha_mesa04 = 0;
 var  coxinha_mesa05 = 0;
 var  coxinha_mesa06 = 0;

 var valor_coxinha = 5;


 var  cigarrete_mesa01 = 0;
 var  cigarrete_mesa02 = 0;
 var  cigarrete_mesa03 = 0;
 var  cigarrete_mesa04 = 0;
 var  cigarrete_mesa05 = 0;
 var  cigarrete_mesa06 = 0;

 var valor_cigarrete = 5.50;


 var  quibe_mesa01 = 0;
 var  quibe_mesa02 = 0;
 var  quibe_mesa03 = 0;
 var  quibe_mesa04 = 0;
 var  quibe_mesa05 = 0;
 var  quibe_mesa06 = 0;

 var valor_quibe = 6;
 
 
 var  enroladinho_mesa01 = 0;
 var  enroladinho_mesa02 = 0;
 var  enroladinho_mesa03 = 0;
 var  enroladinho_mesa04 = 0;
 var  enroladinho_mesa05 = 0;
 var  enroladinho_mesa06 = 0;

 var valor_enroladinho = 4.50;
 
 
 var  hamburguer_mesa01 = 0;
 var  hamburguer_mesa02 = 0;
 var  hamburguer_mesa03 = 0;
 var  hamburguer_mesa04 = 0;
 var  hamburguer_mesa05 = 0;
 var  hamburguer_mesa06 = 0;
 
 var valor_hamburguer = 6;



// funçoes mesa 01

function maisexpresso_01(){
    
    expresso_mesa01 +=1
    document.getElementById("qtd_expresso01").innerHTML = expresso_mesa01

}

function menosexpresso_01(){
    if (expresso_mesa01 >= 1){
        expresso_mesa01 -=1
        document.getElementById("qtd_expresso01").innerHTML = expresso_mesa01
        
    }
    
}

function maiscappuccino_01(){
    cappuccino_mesa01 +=1
    document.getElementById("qtd_cappuccino01").innerHTML = cappuccino_mesa01

}

function menoscappuccino_01(){
    if (cappuccino_mesa01 >= 1){
        cappuccino_mesa01 -=1
        document.getElementById("qtd_cappuccino01").innerHTML = cappuccino_mesa01
    }
}

function maismocha_01(){
    mocha_mesa01+=1
    document.getElementById("qtd_mocha01").innerHTML = mocha_mesa01
}

function  menosmocha_01(){
    if (mocha_mesa01 >= 1){
        mocha_mesa01-=1
        document.getElementById("qtd_mocha01").innerHTML = mocha_mesa01
    }
}

function maisduplo_01(){
    duplo_mesa01+=1
    document.getElementById("qtd_duplo01").innerHTML = duplo_mesa01
}

function menosduplo_01(){
    if (duplo_mesa01 >= 1){
        duplo_mesa01-=1
        document.getElementById("qtd_duplo01").innerHTML = duplo_mesa01
    }
}

function maisagua_01(){
    agua_mesa01+=1
       document.getElementById("qtd_agua01").innerHTML = agua_mesa01
}

function menosagua_01(){
    if (agua_mesa01>= 1){
        agua_mesa01-=1
        document.getElementById("qtd_agua01").innerHTML = agua_mesa01
    }
}

function maisrefri_01(){
    refri_mesa01+=1
       document.getElementById("qtd_refri01").innerHTML = refri_mesa01
}

function menosrefri_01(){
    if (refri_mesa01>= 1){
        refri_mesa01-=1
        document.getElementById("qtd_refri01").innerHTML = refri_mesa01
    }
}

function maischa_01(){
    cha_mesa01+=1
       document.getElementById("qtd_cha01").innerHTML = cha_mesa01
}

function menoscha_01(){
    if (cha_mesa01 >= 1){
        cha_mesa01-=1
        document.getElementById("qtd_cha01").innerHTML = cha_mesa01
    }
}

function maischocolate_01(){
    bchocolate_mesa01+=1
       document.getElementById("qtd_bchocolate01").innerHTML = bchocolate_mesa01
}

function menoschocolate_01(){
    if (bchocolate_mesa01>= 1){
        bchocolate_mesa01-=1
        document.getElementById("qtd_bchocolate01").innerHTML = bchocolate_mesa01
    }
}

function maiscenoura_01(){
    cenoura_mesa01+=1
       document.getElementById("qtd_cenoura01").innerHTML = cenoura_mesa01
}

function menoscenoura_01(){
    if (cenoura_mesa01>= 1){
        cenoura_mesa01-=1
        document.getElementById("qtd_cenoura01").innerHTML = cenoura_mesa01
    }
}

function maislimao_01(){
    limao_mesa01+=1
       document.getElementById("qtd_limao01").innerHTML = limao_mesa01
}

function menoslimao_01(){
    if (limao_mesa01>= 1){
        limao_mesa01-=1
        document.getElementById("qtd_limao01").innerHTML = limao_mesa01
    }
}

function maissensacao_01(){
    sensacao_mesa01+=1
       document.getElementById("qtd_sensacao01").innerHTML = sensacao_mesa01
}

function menossensacao_01(){
    if ( sensacao_mesa01>= 1){
        sensacao_mesa01-=1
        document.getElementById("qtd_sensacao01").innerHTML = sensacao_mesa01
    }
}

function maiscoxinha_01(){
    coxinha_mesa01+=1
       document.getElementById("qtd_coxinha01").innerHTML = coxinha_mesa01
}

function menoscoxinha_01(){
    if (coxinha_mesa01>= 1){
        coxinha_mesa01-=1
        document.getElementById("qtd_coxinha01").innerHTML = coxinha_mesa01
    }
}

function maiscigarrete_01(){
    cigarrete_mesa01+=1
       document.getElementById("qtd_cigarrete01").innerHTML = cigarrete_mesa01
}

function menoscigarrete_01(){
    if (cigarrete_mesa01>= 1){
        cigarrete_mesa01-=1
        document.getElementById("qtd_cigarrete01").innerHTML = cigarrete_mesa01
    }
}

function maisquibe_01(){
    quibe_mesa01+=1
       document.getElementById("qtd_quibe01").innerHTML = quibe_mesa01
}

function menosquibe_01(){
    if (quibe_mesa01>= 1){
        quibe_mesa01-=1
        document.getElementById("qtd_quibe01").innerHTML = quibe_mesa01
    }
}

function maisenroladinho_01(){
    enroladinho_mesa01+=1
       document.getElementById("qtd_enroladinho01").innerHTML = enroladinho_mesa01
}

function menosenroladinho_01(){
    if (enroladinho_mesa01>= 1){
        enroladinho_mesa01-=1
        document.getElementById("qtd_enroladinho01").innerHTML = enroladinho_mesa01
    }
}

function maishamburguer_01(){
    hamburguer_mesa01+=1
       document.getElementById("qtd_hamburguer01").innerHTML = hamburguer_mesa01
}

function menoshamburguer_01(){
    if (hamburguer_mesa01>= 1){
        hamburguer_mesa01-=1
        document.getElementById("qtd_hamburguer01").innerHTML = hamburguer_mesa01
    }
}

// funçoes mesa 02


function maisexpresso_02(){
    
    expresso_mesa02 +=1
    document.getElementById("qtd_expresso02").innerHTML = expresso_mesa02

}

function menosexpresso_02(){
    if (expresso_mesa02 >= 1){
        expresso_mesa02 -=1
        document.getElementById("qtd_expresso02").innerHTML = expresso_mesa02
        
    }
    
}

function maiscappuccino_02(){
    cappuccino_mesa02 +=1
    document.getElementById("qtd_cappuccino02").innerHTML = cappuccino_mesa02

}

function menoscappuccino_02(){
    if (cappuccino_mesa02 >= 1){
        cappuccino_mesa02 -=1
        document.getElementById("qtd_cappuccino02").innerHTML = cappuccino_mesa02
    }
}

function maismocha_02(){
    mocha_mesa02+=1
    document.getElementById("qtd_mocha02").innerHTML = mocha_mesa02
}

function  menosmocha_02(){
    if (mocha_mesa02 >= 1){
        mocha_mesa02-=1
        document.getElementById("qtd_mocha02").innerHTML = mocha_mesa02
    }
}

function maisduplo_02(){
    duplo_mesa02+=1
    document.getElementById("qtd_duplo02").innerHTML = duplo_mesa02
}

function menosduplo_02(){
    if (duplo_mesa02 >= 1){
        duplo_mesa02-=1
        document.getElementById("qtd_duplo02").innerHTML = duplo_mesa02
    }
}

function maisagua_02(){
    agua_mesa02+=1
       document.getElementById("qtd_agua02").innerHTML = agua_mesa02
}

function menosagua_02(){
    if (agua_mesa02>= 1){
        agua_mesa02-=1
        document.getElementById("qtd_agua02").innerHTML = agua_mesa02
    }
}

function maisrefri_02(){
    refri_mesa02+=1
       document.getElementById("qtd_refri02").innerHTML = refri_mesa02
}

function menosrefri_02(){
    if (refri_mesa02>= 1){
        refri_mesa02-=1
        document.getElementById("qtd_refri02").innerHTML = refri_mesa02
    }
}

function maischa_02(){
    cha_mesa02+=1
       document.getElementById("qtd_cha02").innerHTML = cha_mesa02
}

function menoscha_02(){
    if (cha_mesa02 >= 1){
        cha_mesa02-=1
        document.getElementById("qtd_cha02").innerHTML = cha_mesa02
    }
}

function maischocolate_02(){
    bchocolate_mesa02+=1
       document.getElementById("qtd_bchocolate02").innerHTML = bchocolate_mesa02
}

function menoschocolate_02(){
    if (bchocolate_mesa02>= 1){
        bchocolate_mesa02-=1
        document.getElementById("qtd_bchocolate02").innerHTML = bchocolate_mesa02
    }
}

function maiscenoura_02(){
    cenoura_mesa02+=1
       document.getElementById("qtd_cenoura02").innerHTML = cenoura_mesa02
}

function menocenouraa_02(){
    if (cenoura_mesa02>= 1){
        cenoura_mesa02-=1
        document.getElementById("qtd_cenoura02").innerHTML = cenoura_mesa02
    }
}

function maislimao_02(){
    limao_mesa02+=1
       document.getElementById("qtd_limao02").innerHTML = limao_mesa02
}

function menoslimao_02(){
    if (limao_mesa02>= 1){
        limao_mesa02-=1
        document.getElementById("qtd_limao02").innerHTML = limao_mesa02
    }
}

function maissensacao_02(){
    sensacao_mesa02+=1
       document.getElementById("qtd_sensacao02").innerHTML = sensacao_mesa02
}

function menossensacao_02(){
    if ( sensacao_mesa02>= 1){
        sensacao_mesa02-=1
        document.getElementById("qtd_sensacao02").innerHTML = sensacao_mesa02
    }
}

function maiscoxinha_02(){
    coxinha_mesa02+=1
       document.getElementById("qtd_coxinha02").innerHTML = coxinha_mesa02
}

function menoscoxinha_02(){
    if (coxinha_mesa02>= 1){
        coxinha_mesa02-=1
        document.getElementById("qtd_coxinha02").innerHTML = coxinha_mesa02
    }
}

function maiscigarrete_02(){
    cigarrete_mesa02+=1
       document.getElementById("qtd_cigarrete02").innerHTML = cigarrete_mesa02
}

function menoscigarrete_02(){
    if (cigarrete_mesa02>= 1){
        cigarrete_mesa02-=1
        document.getElementById("qtd_cigarrete02").innerHTML = cigarrete_mesa02
    }
}

function maisquibe_02(){
    quibe_mesa02+=1
       document.getElementById("qtd_quibe02").innerHTML = quibe_mesa02
}

function menosquibe_02(){
    if (quibe_mesa02>= 1){
        quibe_mesa02-=1
        document.getElementById("qtd_quibe02").innerHTML = quibe_mesa02
    }
}

function maisenroladinho_02(){
    enroladinho_mesa02+=1
       document.getElementById("qtd_enroladinho02").innerHTML = enroladinho_mesa02
}

function menosenroladinho_02(){
    if (enroladinho_mesa02>= 1){
        enroladinho_mesa02-=1
        document.getElementById("qtd_enroladinho02").innerHTML = enroladinho_mesa02
    }
}

function maishamburguer_02(){
    hamburguer_mesa02+=1
       document.getElementById("qtd_hamburguer02").innerHTML = hamburguer_mesa02
}

function menoshamburguer_02(){
    if (hamburguer_mesa02>= 1){
        hamburguer_mesa02-=1
        document.getElementById("qtd_hamburguer02").innerHTML = hamburguer_mesa02
    }
}

//funções mesa 03


function maisexpresso_03(){
    
    expresso_mesa03 +=1
    document.getElementById("qtd_expresso03").innerHTML = expresso_mesa03

}

function menosexpresso_03(){
    if (expresso_mesa03 >= 1){
        expresso_mesa03 -=1
        document.getElementById("qtd_expresso03").innerHTML = expresso_mesa03
        
    }
    
}

function maiscappuccino_03(){
    cappuccino_mesa03 +=1
    document.getElementById("qtd_cappuccino03").innerHTML = cappuccino_mesa03

}

function menoscappuccino_03(){
    if (cappuccino_mesa03 >= 1){
        cappuccino_mesa03 -=1
        document.getElementById("qtd_cappuccino03").innerHTML = cappuccino_mesa03
    }
}

function maismocha_03(){
    mocha_mesa03+=1
    document.getElementById("qtd_mocha03").innerHTML = mocha_mesa03
}

function  menosmocha_03(){
    if (mocha_mesa03 >= 1){
        mocha_mesa03-=1
        document.getElementById("qtd_mocha03").innerHTML = mocha_mesa03
    }
}

function maisduplo_03(){
    duplo_mesa03+=1
    document.getElementById("qtd_duplo03").innerHTML = duplo_mesa03
}

function menosduplo_03(){
    if (duplo_mesa03 >= 1){
        duplo_mesa03-=1
        document.getElementById("qtd_duplo03").innerHTML = duplo_mesa03
    }
}

function maisagua_03(){
    agua_mesa03+=1
       document.getElementById("qtd_agua03").innerHTML = agua_mesa03
}

function menosagua_03(){
    if (agua_mesa03>= 1){
        agua_mesa03-=1
        document.getElementById("qtd_agua03").innerHTML = agua_mesa03
    }
}

function maisrefri_03(){
    refri_mesa03+=1
       document.getElementById("qtd_refri03").innerHTML = refri_mesa03
}

function menosrefri_03(){
    if (refri_mesa03>= 1){
        refri_mesa03-=1
        document.getElementById("qtd_refri03").innerHTML = refri_mesa03
    }
}

function maischa_03(){
    cha_mesa03+=1
       document.getElementById("qtd_cha03").innerHTML = cha_mesa03
}

function menoscha_03(){
    if (cha_mesa03 >= 1){
        cha_mesa03-=1
        document.getElementById("qtd_cha03").innerHTML = cha_mesa03
    }
}

function maischocolate_03(){
    bchocolate_mesa03+=1
       document.getElementById("qtd_bchocolate03").innerHTML = bchocolate_mesa03
}

function menoschocolate_03(){
    if (bchocolate_mesa03>= 1){
        bchocolate_mesa03-=1
        document.getElementById("qtd_bchocolate03").innerHTML = bchocolate_mesa03
    }
}

function maiscenoura_03(){
    cenoura_mesa03+=1
       document.getElementById("qtd_cenoura03").innerHTML = cenoura_mesa03
}

function menoscenoura_03(){
    if (cenoura_mesa03>= 1){
        cenoura_mesa03-=1
        document.getElementById("qtd_cenoura03").innerHTML = cenoura_mesa03
    }
}

function maislimao_03(){
    limao_mesa03+=1
       document.getElementById("qtd_limao03").innerHTML = limao_mesa03
}

function menoslimao_03(){
    if (limao_mesa03>= 1){
        limao_mesa03-=1
        document.getElementById("qtd_limao03").innerHTML = limao_mesa03
    }
}

function maissensacao_03(){
    sensacao_mesa03+=1
       document.getElementById("qtd_sensacao03").innerHTML = sensacao_mesa03
}

function menossensacao_02(){
    if ( sensacao_mesa02>= 1){
        sensacao_mesa02-=1
        document.getElementById("qtd_sensacao02").innerHTML = sensacao_mesa03
    }
}

function maiscoxinha_03(){
    coxinha_mesa03+=1
       document.getElementById("qtd_coxinha03").innerHTML = coxinha_mesa03
}

function menoscoxinha_03(){
    if (coxinha_mesa03>= 1){
        coxinha_mesa03-=1
        document.getElementById("qtd_coxinha03").innerHTML = coxinha_mesa03
    }
}

function maiscigarrete_03(){
    cigarrete_mesa03+=1
       document.getElementById("qtd_cigarrete03").innerHTML = cigarrete_mesa03
}

function menoscigarrete_03(){
    if (cigarrete_mesa03>= 1){
        cigarrete_mesa03-=1
        document.getElementById("qtd_cigarrete03").innerHTML = cigarrete_mesa03
    }
}

function maisquibe_03(){
    quibe_mesa03+=1
       document.getElementById("qtd_quibe03").innerHTML = quibe_mesa03
}

function menosquibe_03(){
    if (quibe_mesa03>= 1){
        quibe_mesa03-=1
        document.getElementById("qtd_quibe03").innerHTML = quibe_mesa03
    }
}

function maisenroladinho_03(){
    enroladinho_mesa03+=1
       document.getElementById("qtd_enroladinho03").innerHTML = enroladinho_mesa03
}

function menosenroladinho_03(){
    if (enroladinho_mesa03>= 1){
        enroladinho_mesa03-=1
        document.getElementById("qtd_enroladinho03").innerHTML = enroladinho_mesa03
    }
}

function maishamburguer_03(){
    hamburguer_mesa03+=1
       document.getElementById("qtd_hamburguer03").innerHTML = hamburguer_mesa03
}

function menoshamburguer_03(){
    if (hamburguer_mesa03>= 1){
        hamburguer_mesa03-=1
        document.getElementById("qtd_hamburguer03").innerHTML = hamburguer_mesa03
    }
}




//funçoes mesa 04


function maisexpresso_04(){
    
    expresso_mesa04 +=1
    document.getElementById("qtd_expresso04").innerHTML = expresso_mesa04

}

function menosexpresso_04(){
    if (expresso_mesa04 >= 1){
        expresso_mesa04 -=1
        document.getElementById("qtd_expresso04").innerHTML = expresso_mesa04
        
    }
    
}

function maiscappuccino_04(){
    cappuccino_mesa04 +=1
    document.getElementById("qtd_cappuccino04").innerHTML = cappuccino_mesa04

}

function menoscappuccino_04(){
    if (cappuccino_mesa04 >= 1){
        cappuccino_mesa04 -=1
        document.getElementById("qtd_cappuccino04").innerHTML = cappuccino_mesa04
    }
}

function maismocha_04(){
    mocha_mesa04+=1
    document.getElementById("qtd_mocha04").innerHTML = mocha_mesa04
}

function  menosmocha_04(){
    if (mocha_mesa04 >= 1){
        mocha_mesa04-=1
        document.getElementById("qtd_mocha04").innerHTML = mocha_mesa04
    }
}

function maisduplo_04(){
    duplo_mesa04+=1
    document.getElementById("qtd_duplo04").innerHTML = duplo_mesa04
}

function menosduplo_04(){
    if (duplo_mesa04 >= 1){
        duplo_mesa04-=1
        document.getElementById("qtd_duplo04").innerHTML = duplo_mesa04
    }
}

function maisagua_04(){
    agua_mesa04+=1
       document.getElementById("qtd_agua04").innerHTML = agua_mesa04
}

function menosagua_04(){
    if (agua_mesa04>= 1){
        agua_mesa04-=1
        document.getElementById("qtd_agua04").innerHTML = agua_mesa04
    }
}

function maisrefri_04(){
    refri_mesa04+=1
       document.getElementById("qtd_refri04").innerHTML = refri_mesa04
}

function menosrefri_04(){
    if (refri_mesa04>= 1){
        refri_mesa04-=1
        document.getElementById("qtd_refri04").innerHTML = refri_mesa04
    }
}

function maischa_04(){
    cha_mesa04+=1
       document.getElementById("qtd_cha04").innerHTML = cha_mesa04
}

function menoscha_04(){
    if (cha_mesa04 >= 1){
        cha_mesa04-=1
        document.getElementById("qtd_cha04").innerHTML = cha_mesa04
    }
}

function maischocolate_04(){
    bchocolate_mesa04+=1
       document.getElementById("qtd_bchocolate04").innerHTML = bchocolate_mesa04
}

function menoschocolate_04(){
    if (bchocolate_mesa04>= 1){
        bchocolate_mesa04-=1
        document.getElementById("qtd_bchocolate04").innerHTML = bchocolate_mesa04
    }
}

function maiscenoura_04(){
    cenoura_mesa04+=1
       document.getElementById("qtd_cenoura04").innerHTML = cenoura_mesa04
}

function menoscenoura_04(){
    if (cenoura_mesa04>= 1){
        cenoura_mesa04-=1
        document.getElementById("qtd_cenoura04").innerHTML = cenoura_mesa04
    }
}

function maislimao_04(){
    limao_mesa04+=1
       document.getElementById("qtd_limao04").innerHTML = limao_mesa04
}

function menoslimao_04(){
    if (limao_mesa04>= 1){
        limao_mesa04-=1
        document.getElementById("qtd_limao04").innerHTML = limao_mesa04
    }
}

function maissensacao_04(){
    sensacao_mesa04+=1
       document.getElementById("qtd_sensacao04").innerHTML = sensacao_mesa04
}

function menossensacao_04(){
    if ( sensacao_mesa04>= 1){
        sensacao_mesa04-=1
        document.getElementById("qtd_sensacao04").innerHTML = sensacao_mesa04
    }
}

function maiscoxinha_04(){
    coxinha_mesa04+=1
       document.getElementById("qtd_coxinha04").innerHTML = coxinha_mesa04
}

function menoscoxinha_04(){
    if (coxinha_mesa04>= 1){
        coxinha_mesa04-=1
        document.getElementById("qtd_coxinha04").innerHTML = coxinha_mesa04
    }
}

function maiscigarrete_04(){
    cigarrete_mesa04+=1
       document.getElementById("qtd_cigarrete04").innerHTML = cigarrete_mesa04
}

function menoscigarrete_04(){
    if (cigarrete_mesa04>= 1){
        cigarrete_mesa04-=1
        document.getElementById("qtd_cigarrete04").innerHTML = cigarrete_mesa04
    }
}

function maisquibe_04(){
    quibe_mesa04+=1
       document.getElementById("qtd_quibe04").innerHTML = quibe_mesa04
}

function menosquibe_04(){
    if (quibe_mesa04>= 1){
        quibe_mesa04-=1
        document.getElementById("qtd_quibe04").innerHTML = quibe_mesa04
    }
}

function maisenroladinho_04(){
    enroladinho_mesa04+=1
       document.getElementById("qtd_enroladinho04").innerHTML = enroladinho_mesa04
}

function menosenroladinho_04(){
    if (enroladinho_mesa04>= 1){
        enroladinho_mesa04-=1
        document.getElementById("qtd_enroladinho04").innerHTML = enroladinho_mesa04
    }
}

function maishamburguer_04(){
    hamburguer_mesa04+=1
       document.getElementById("qtd_hamburguer04").innerHTML = hamburguer_mesa04
}

function menoshamburguer_04(){
    if (hamburguer_mesa04>= 1){
        hamburguer_mesa04-=1
        document.getElementById("qtd_hamburguer04").innerHTML = hamburguer_mesa04
    }
}


// funçoes mesa 05


function maisexpresso_05(){
    
    expresso_mesa05 +=1
    document.getElementById("qtd_expresso05").innerHTML = expresso_mesa05

}

function menosexpresso_05(){
    if (expresso_mesa05 >= 1){
        expresso_mesa05 -=1
        document.getElementById("qtd_expresso05").innerHTML = expresso_mesa05
        
    }
    
}

function maiscappuccino_05(){
    cappuccino_mesa05 +=1
    document.getElementById("qtd_cappuccino05").innerHTML = cappuccino_mesa05

}

function menoscappuccino_05(){
    if (cappuccino_mesa05 >= 1){
        cappuccino_mesa05 -=1
        document.getElementById("qtd_cappuccino05").innerHTML = cappuccino_mesa05
    }
}

function maismocha_05(){
    mocha_mesa05+=1
    document.getElementById("qtd_mocha05").innerHTML = mocha_mesa05
}

function  menosmocha_05(){
    if (mocha_mesa05 >= 1){
        mocha_mesa05-=1
        document.getElementById("qtd_mocha05").innerHTML = mocha_mesa05
    }
}

function maisduplo_05(){
    duplo_mesa05+=1
    document.getElementById("qtd_duplo05").innerHTML = duplo_mesa05
}

function menosduplo_05(){
    if (duplo_mesa05 >= 1){
        duplo_mesa05-=1
        document.getElementById("qtd_duplo05").innerHTML = duplo_mesa05
    }
}

function maisagua_05(){
    agua_mesa05+=1
       document.getElementById("qtd_agua05").innerHTML = agua_mesa05
}

function menosagua_05(){
    if (agua_mesa05>= 1){
        agua_mesa05-=1
        document.getElementById("qtd_agua05").innerHTML = agua_mesa05
    }
}

function maisrefri_05(){
    refri_mesa05+=1
       document.getElementById("qtd_refri05").innerHTML = refri_mesa05
}

function menosrefri_05(){
    if (refri_mesa05>= 1){
        refri_mesa05-=1
        document.getElementById("qtd_refri05").innerHTML = refri_mesa05
    }
}

function maischa_05(){
    cha_mesa05+=1
       document.getElementById("qtd_cha05").innerHTML = cha_mesa05
}

function menoscha_05(){
    if (cha_mesa05 >= 1){
        cha_mesa05-=1
        document.getElementById("qtd_cha05").innerHTML = cha_mesa05
    }
}

function maischocolate_05(){
    bchocolate_mesa05+=1
       document.getElementById("qtd_bchocolate05").innerHTML = bchocolate_mesa05
}

function menoschocolate_05(){
    if (bchocolate_mesa05>= 1){
        bchocolate_mesa05-=1
        document.getElementById("qtd_bchocolate05").innerHTML = bchocolate_mesa05
    }
}

function maiscenoura_05(){
    cenoura_mesa05+=1
       document.getElementById("qtd_cenoura05").innerHTML = cenoura_mesa05
}

function menoscenoura_05(){
    if (cenoura_mesa05>= 1){
        cenoura_mesa05-=1
        document.getElementById("qtd_cenoura05").innerHTML = cenoura_mesa05
    }
}

function maislimao_05(){
    limao_mesa05+=1
       document.getElementById("qtd_limao05").innerHTML = limao_mesa05
}

function menoslimao_05(){
    if (limao_mesa02>= 1){
        limao_mesa02-=1
        document.getElementById("qtd_limao05").innerHTML = limao_mesa05
    }
}

function maissensacao_05(){
    sensacao_mesa05+=1
       document.getElementById("qtd_sensacao05").innerHTML = sensacao_mesa05
}

function menossensacao_05(){
        if (sensacao_mesa05>= 1){
        sensacao_mesa05-=1
        document.getElementById("qtd_sensacao05").innerHTML = sensacao_mesa05
    }
}

function maiscoxinha_05(){
    coxinha_mesa05+=1
       document.getElementById("qtd_coxinha05").innerHTML = coxinha_mesa05
}

function menoscoxinha_05(){
    if (coxinha_mesa05>= 1){
        coxinha_mesa05-=1
        document.getElementById("qtd_coxinha05").innerHTML = coxinha_mesa05
    }
}

function maiscigarrete_05(){
    cigarrete_mesa05+=1
       document.getElementById("qtd_cigarrete05").innerHTML = cigarrete_mesa05
}

function menoscigarrete_05(){
    if (cigarrete_mesa05>= 1){
        cigarrete_mesa05-=1
        document.getElementById("qtd_cigarrete05").innerHTML = cigarrete_mesa05
    }
}

function maisquibe_05(){
    quibe_mesa05+=1
       document.getElementById("qtd_quibe02").innerHTML = quibe_mesa05
}

function menosquibe_05(){
    if (quibe_mesa05>= 1){
        quibe_mesa05-=1
        document.getElementById("qtd_quibe05").innerHTML = quibe_mesa05
    }
}

function maisenroladinho_05(){
    enroladinho_mesa05+=1
       document.getElementById("qtd_enroladinho05").innerHTML = enroladinho_mesa05
}

function menosenroladinho_05(){
    if (enroladinho_mesa05>= 1){
        enroladinho_mesa05-=1
        document.getElementById("qtd_enroladinho05").innerHTML = enroladinho_mesa02
    }
}

function maishamburguer_05(){
    hamburguer_mesa05+=1
       document.getElementById("qtd_hamburguer05").innerHTML = hamburguer_mesa05
}

function menoshamburguer_05(){
    if (hamburguer_mesa05>= 1){
        hamburguer_mesa05-=1
        document.getElementById("qtd_hamburguer05").innerHTML = hamburguer_mesa05
    }
}


// funcoes mesa 06


function maisexpresso_06(){
    
    expresso_mesa06 +=1
    document.getElementById("qtd_expresso06").innerHTML = expresso_mesa06

}

function menosexpresso_06(){
    if (expresso_mesa06 >= 1){
        expresso_mesa06 -=1
        document.getElementById("qtd_expresso06").innerHTML = expresso_mesa06
        
    }
    
}

function maiscappuccino_06(){
    cappuccino_mesa06 +=1
    document.getElementById("qtd_cappuccino06").innerHTML = cappuccino_mesa06

}

function menoscappuccino_02(){
    if (cappuccino_mesa06 >= 1){
        cappuccino_mesa06 -=1
        document.getElementById("qtd_cappuccino06").innerHTML = cappuccino_mesa06
    }
}

function maismocha_06(){
    mocha_mesa06+=1
    document.getElementById("qtd_mocha06").innerHTML = mocha_mesa06
}

function  menosmocha_06(){
    if (mocha_mesa06 >= 1){
        mocha_mesa06-=1
        document.getElementById("qtd_mocha06").innerHTML = mocha_mesa06
    }
}

function maisduplo_06(){
    duplo_mesa06+=1
    document.getElementById("qtd_duplo06").innerHTML = duplo_mesa06
}

function menosduplo_06(){
    if (duplo_mesa06 >= 1){
        duplo_mesa06-=1
        document.getElementById("qtd_duplo06").innerHTML = duplo_mesa06
    }
}

function maisagua_06(){
    agua_mesa06+=1
       document.getElementById("qtd_agua06").innerHTML = agua_mesa06
}

function menosagua_06(){
    if (agua_mesa06>= 1){
        agua_mesa06-=1
        document.getElementById("qtd_agua06").innerHTML = agua_mesa06
    }
}

function maisrefri_06(){
    refri_mesa06+=1
       document.getElementById("qtd_refri06").innerHTML = refri_mesa06
}

function menosrefri_06(){
    if (refri_mesa06>= 1){
        refri_mesa06-=1
        document.getElementById("qtd_refri06").innerHTML = refri_mesa06
    }
}

function maischa_06(){
    cha_mesa06+=1
       document.getElementById("qtd_cha06").innerHTML = cha_mesa06
}

function menoscha_06(){
    if (cha_mesa06 >= 1){
        cha_mesa06-=1
        document.getElementById("qtd_cha06").innerHTML = cha_mesa06
    }
}

function maischocolate_06(){
    bchocolate_mesa06+=1
       document.getElementById("qtd_bchocolate06").innerHTML = bchocolate_mesa06
}

function menoschocolate_06(){
    if (bchocolate_mesa06>= 1){
        bchocolate_mesa06-=1
        document.getElementById("qtd_bchocolate06").innerHTML = bchocolate_mesa06
    }
}

function maiscenoura_06(){
    cenoura_mesa06+=1
       document.getElementById("qtd_cenoura06").innerHTML = cenoura_mesa06
}

function menoscenoura_06(){
    if (cenoura_mesa06>= 1){
        cenoura_mesa06-=1
        document.getElementById("qtd_cenoura06").innerHTML = cenoura_mesa06
    }
}

function maislimao_06(){
    limao_mesa06+=1
       document.getElementById("qtd_limao06").innerHTML = limao_mesa06
}

function menoslimao_06(){
    if (limao_mesa06>= 1){
        limao_mesa06-=1
        document.getElementById("qtd_limao06").innerHTML = limao_mesa06
    }
}

function maissensacao_06(){
    sensacao_mesa06+=1
       document.getElementById("qtd_sensacao06").innerHTML = sensacao_mesa06
}

function menossensacao_06(){
    if ( sensacao_mesa06>= 1){
        sensacao_mesa06-=1
        document.getElementById("qtd_sensacao06").innerHTML = sensacao_mesa06
    }
}

function maiscoxinha_06(){
    coxinha_mesa06+=1
       document.getElementById("qtd_coxinha06").innerHTML = coxinha_mesa06
}
function menoscoxinha_06(){
    if (coxinha_mesa06>= 1){
        coxinha_mesa06-=1
        document.getElementById("qtd_coxinha06").innerHTML = coxinha_mesa06
    }
}

function maiscigarrete_06(){
    cigarrete_mesa06+=1
       document.getElementById("qtd_cigarrete06").innerHTML = cigarrete_mesa06
}

function menoscigarrete_06(){
    if (cigarrete_mesa06>= 1){
        cigarrete_mesa06-=1
        document.getElementById("qtd_cigarrete06").innerHTML = cigarrete_mesa06
    }
}

function maisquibe_06(){
    quibe_mesa06+=1
       document.getElementById("qtd_quibe06").innerHTML = quibe_mesa06
}

function menosquibe_06(){
    if (quibe_mesa06>= 1){
        quibe_mesa06-=1
        document.getElementById("qtd_quibe06").innerHTML = quibe_mesa06
    }
}

function maisenroladinho_06(){
    enroladinho_mesa06+=1
       document.getElementById("qtd_enroladinho06").innerHTML = enroladinho_mesa06
}

function menosenroladinho_06(){
    if (enroladinho_mesa06>= 1){
        enroladinho_mesa06-=1
        document.getElementById("qtd_enroladinho06").innerHTML = enroladinho_mesa06
    }
}

function maishamburguer_06(){
    hamburguer_mesa06+=1
       document.getElementById("qtd_hamburguer06").innerHTML = hamburguer_mesa06
}

function menoshamburguer_06(){
    if (hamburguer_mesa06>= 1){
        hamburguer_mesa06-=1
        document.getElementById("qtd_hamburguer06").innerHTML = hamburguer_mesa06
    }
}





// total da mesa




function resumo01(){
    var totalCafe01 =(expresso_mesa01*valor_expresso)+(cappuccino_mesa01*valor_cappuccino)+(mocha_mesa01*valor_mocha)+(duplo_mesa01*valor_duplo);
    document.getElementById("rescafe01").innerHTML = totalCafe01;
    
    var totalBebida01  = (agua_mesa01*valor_agua) + (refri_mesa01*valor_refri) + (cha_mesa01*valor_cha);
    document.getElementById("resbebi01").innerHTML = totalBebida01;

    var totalBolo01 = (bchocolate_mesa01*valor_bchocolate) + (cenoura_mesa01*valor_cenoura) + (limao_mesa01*valor_limao) + (sensacao_mesa01*valor_sensacao);
    document.getElementById("resbolo01").innerHTML = totalBolo01;

    var totalSalgado01 = (coxinha_mesa01*valor_coxinha) + (cigarrete_mesa01*valor_cigarrete) + (quibe_mesa01*valor_quibe) + (enroladinho_mesa01*valor_enroladinho) + (hamburguer_mesa01*valor_hamburguer);
    document.getElementById("ressalg01").innerHTML = totalSalgado01;

    var valortotal01 = totalCafe01+totalBebida01+totalBolo01+totalSalgado01 ;
    document.getElementById("restotal01").innerHTML = valortotal01;
    
    var final= final+valortotal01;
   
    
}
function resumo02(){
    document.getElementById("#res2").style.display = 'block';

    var totalCafe02 =(expresso_mesa02*valor_expresso)+(cappuccino_mesa02*valor_cappuccino)+(mocha_mesa02*valor_mocha)+(duplo_mesa02*valor_duplo);
    document.getElementById("rescafe02").innerHTML = totalCafe02;
    
    var totalBebida02  = (agua_mesa02*valor_agua) + (refri_mesa02*valor_refri) + (cha_mesa02*valor_cha);
    document.getElementById("resbebi02").innerHTML = totalBebida02;

    var totalBolo02 = (bchocolate_mesa02*valor_bchocolate) + (cenoura_mesa02*valor_cenoura) + (limao_mesa02*valor_limao) + (sensacao_mesa02*valor_sensacao);
    document.getElementById("resbolo02").innerHTML = totalBolo02;

    var totalSalgado02 = (coxinha_mesa02*valor_coxinha) + (cigarrete_mesa02*valor_cigarrete) + (quibe_mesa02*valor_quibe) + (enroladinho_mesa02*valor_enroladinho) + (hamburguer_mesa02*valor_hamburguer);
    document.getElementById("ressalg02").innerHTML = totalSalgado02;

    var valortotal02 = totalCafe02+totalBebida02+totalBolo02+totalSalgado02 ;
    document.getElementById("restotal02").innerHTML = valortotal02;
    
    var final= final+valortotal02;
2
    
}
function resumo03(){
    var totalCafe03 =(expresso_mesa03*valor_expresso)+(cappuccino_mesa03*valor_cappuccino)+(mocha_mesa03*valor_mocha)+(duplo_mesa03*valor_duplo);
    document.getElementById("rescafe03").innerHTML = totalCafe03;
    
    var totalBebida03  = (agua_mesa03*valor_agua) + (refri_mesa03*valor_refri) + (cha_mesa03*valor_cha);
    document.getElementById("resbebi03").innerHTML = totalBebida03;

    var totalBolo03 = (bchocolate_mesa03*valor_bchocolate) + (cenoura_mesa03*valor_cenoura) + (limao_mesa03*valor_limao) + (sensacao_mesa03*valor_sensacao);
    document.getElementById("resbolo03").innerHTML = totalBolo03;

    var totalSalgado03 = (coxinha_mesa03*valor_coxinha) + (cigarrete_mesa03*valor_cigarrete) + (quibe_mesa03*valor_quibe) + (enroladinho_mesa03*valor_enroladinho) + (hamburguer_mesa03*valor_hamburguer);
    document.getElementById("ressalg03").innerHTML = totalSalgado03;

    var valortotal03 = totalCafe03+totalBebida03+totalBolo03+totalSalgado03 ;
    document.getElementById("restotal03").innerHTML = valortotal03;
    
    var final= final+valortotal03;
    
}
function resumo04(){
    var totalCafe04 =(expresso_mesa04*valor_expresso)+(cappuccino_mesa04*valor_cappuccino)+(mocha_mesa04*valor_mocha)+(duplo_mesa04*valor_duplo);
    document.getElementById("rescafe04").innerHTML = totalCafe04;
    
    var totalBebida04  = (agua_mesa04*valor_agua) + (refri_mesa04*valor_refri) + (cha_mesa03*valor_cha);
    document.getElementById("resbebi04").innerHTML = totalBebida04;

    var totalBolo04 = (bchocolate_mesa04*valor_bchocolate) + (cenoura_mesa04*valor_cenoura) + (limao_mesa04*valor_limao) + (sensacao_mesa04*valor_sensacao);
    document.getElementById("resbolo04").innerHTML = totalBolo04;

    var totalSalgado04 = (coxinha_mesa04*valor_coxinha) + (cigarrete_mesa04*valor_cigarrete) + (quibe_mesa04*valor_quibe) + (enroladinho_mesa04*valor_enroladinho) + (hamburguer_mesa04*valor_hamburguer);
    document.getElementById("ressalg04").innerHTML = totalSalgado04;

    var valortotal04 = totalCafe04+totalBebida04+totalBolo04+totalSalgado04 ;
    document.getElementById("restotal04").innerHTML = valortotal04;
    
    var final= final+valortotal04;
    
}
function resumo05(){
    var totalCafe05 =(expresso_mesa05*valor_expresso)+(cappuccino_mesa05*valor_cappuccino)+(mocha_mesa05*valor_mocha)+(duplo_mesa05*valor_duplo);
    document.getElementById("rescafe05").innerHTML = totalCafe05;
    
    var totalBebida05  = (agua_mesa05*valor_agua) + (refri_mesa05*valor_refri) + (cha_mesa05*valor_cha);
    document.getElementById("resbebi05").innerHTML = totalBebida05;

    var totalBolo05 = (bchocolate_mesa05*valor_bchocolate) + (cenoura_mesa05*valor_cenoura) + (limao_mesa05*valor_limao) + (sensacao_mesa05*valor_sensacao);
    document.getElementById("resbolo05").innerHTML = totalBolo05;

    var totalSalgado05 = (coxinha_mesa05*valor_coxinha) + (cigarrete_mesa05*valor_cigarrete) + (quibe_mesa05*valor_quibe) + (enroladinho_mesa05*valor_enroladinho) + (hamburguer_mesa05*valor_hamburguer);
    document.getElementById("ressalg05").innerHTML = totalSalgado05;

    var valortotal05 = totalCafe05+totalBebida05+totalBolo05+totalSalgado05 ;
    document.getElementById("restotal05").innerHTML = valortotal05;
    
    var final= final+valortotal05;
    
    
}
function resumo06(){
    var totalCafe06 =(expresso_mesa06*valor_expresso)+(cappuccino_mesa06*valor_cappuccino)+(mocha_mesa06*valor_mocha)+(duplo_mesa06*valor_duplo);
    document.getElementById("rescafe06").innerHTML = totalCafe06;
    
    var totalBebida06  = (agua_mesa06*valor_agua) + (refri_mesa06*valor_refri) + (cha_mesa06*valor_cha);
    document.getElementById("resbebi06").innerHTML = totalBebida06;

    var totalBolo06 = (bchocolate_mesa06*valor_bchocolate) + (cenoura_mesa06*valor_cenoura) + (limao_mesa06*valor_limao) + (sensacao_mesa06*valor_sensacao);
    document.getElementById("resbolo06").innererHTML = totalBolo06;

    var totalSalgado06 = (coxinha_mesa06*valor_coxinha) + (cigarrete_mesa06*valor_cigarrete) + (quibe_mesa06*valor_quibe) + (enroladinho_mesa06*valor_enroladinho) + (hamburguer_mesa06*valor_hamburguer);
    document.getElementById("ressalg06").innerHTML = totalSalgado06;

    var valortotal06 = totalCafe06+totalBebida06+totalBolo06+totalSalgado06 ;
    document.getElementById("restotal06").innerHTML = valortotal06;
    
    var final= final+valortotal06;
    console.log(final);
    
}