// Calculadora de Partidas Rankeadas - Com Switch

let saldoVitorias;
let nivel;

let dados = {
  vitorias: 200,
  derrotas: 20   
}

function calculaPartidasRankeadas(){
  saldoVitorias = dados.vitorias - dados.derrotas;
  
  switch(true){
  	case saldoVitorias < 10:
    nivel = "Ferro";
    break;
    
    case saldoVitorias >= 11 && saldoVitorias <=20:
    nivel = "Bronze";
    break;
    
    case saldoVitorias >= 21 && saldoVitorias <=50:
    nivel = "Prata";
    break;
    
    case saldoVitorias >= 51 && saldoVitorias <=80:
    nivel = "Ouro";
    break;
    
    case saldoVitorias >= 81 && saldoVitorias <=90:
    nivel = "Diamante";
    break;
    
    case saldoVitorias >= 91 && saldoVitorias <=100:
    nivel = "Lendário";
    break;
    
    case saldoVitorias >= 101:
    nivel = "Imortal";
    break;
  }
}

let heroi = {
  escrever: function() {
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);
  }
}

calculaPartidasRankeadas();
heroi.escrever();
