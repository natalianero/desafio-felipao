// Calculadora de Partidas Rankeadas - Com If-Else

let saldoVitorias;
let nivel;

let dados = {
  vitorias: 90,
  derrotas: 20   
}

function calculaPartidasRankeadas() {
  saldoVitorias = dados.vitorias - dados.derrotas;

  if (saldoVitorias < 10) {
    nivel = "Ferro";
  } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
    nivel = "Bronze";
  } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
    nivel = "Prata";
  } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
    nivel = "Ouro";
  } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
    nivel = "Diamante";
  } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
    nivel = "Lendário";
  } else if (saldoVitorias >= 100) {
    nivel = "Imortal";
    }
}

let heroi = {
  escrever: function() {
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias e está no nível ${nivel}`);
  }
}

calculaPartidasRankeadas();
heroi.escrever();