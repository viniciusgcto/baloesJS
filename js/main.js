function inicia() {
  var tempo_segundos = 30;
  var qte_baloes = 40;

  criar_baloes(qte_baloes);

  document.getElementById('crono_visor').innerHTML = tempo_segundos;
  cronometro(tempo_segundos);
}

function criar_baloes(qte_baloes){
  for (var i = 0; i <= (qte_baloes-1); i++) {
          var balao = document.createElement("img");
          balao.src = 'img/balao.png';
          balao.style.margin = '9px';
          balao.id = 'b'+i;
          document.getElementById('add_balao').appendChild(balao);
          balao.onclick = function(){ estourar(this);}
   }
}

function estourar(e){
  var id_balao = e.id;
  document.getElementById(id_balao).setAttribute("onclick", "");
  document.getElementById(id_balao).src = 'img/estourado.png';
  pontuacao(-1);
}

function pontuacao(acao){
  var baloes_inteiros = document.getElementById('baloes_inteiros').innerHTML;
  var baloes_estourados = document.getElementById('baloes_estourados').innerHTML;

  baloes_inteiros = parseInt(baloes_inteiros);
  baloes_estourados = parseInt(baloes_estourados);

  baloes_inteiros = baloes_inteiros + acao;
  baloes_estourados = baloes_estourados - acao;

  document.getElementById('baloes_inteiros').innerHTML = baloes_inteiros;
  document.getElementById('baloes_estourados').innerHTML = baloes_estourados;

  if(baloes_inteiros  == 0 ){
    setTimeout(function(){
      alert("Parabéns, você conseguiu estourar todos os baloes a tempo!");
      location.reload();
    }, 100);
    //alert ('Parabéns, você conseguiu estourar todos os baloes a tempo!');
    //clearTimeout(timerId);
  }

}

function cronometro (segundos) {

  document.getElementById("crono_visor").innerHTML = segundos;
  timerId = setTimeout("cronometro("+ (segundos - 1) +")", 1000); // A cada 1 seg uma chamada recursiva é chamada, atualizando o valor do cronomêtro
  if (segundos  ==  -1){
    clearTimeout(timerId); // Parar o cronometro
    game_over();
    document.getElementById("crono_visor").innerHTML = 0;
    return false;
  }

}

function game_over(){
  alert('Fim de Jogo, você não conseguiu estourar todos os baloes a tempo!');
  location.reload();
}