// Calculadora de Vitórias - Derrotas

let saldoVitorias;

let dados = {
  vitorias: 90,
  derrotas: 20   
}

function calculaPartidasRankeadas(){
  saldoVitorias = dados.vitorias - dados.derrotas;
  console.log(`O herói tem ${dados.vitorias} vitórias`);
  console.log(`O herói tem ${dados.derrotas} derrotas`);
}

let heroi = {
  escrever: function() {
    console.log(`O Herói tem um saldo de ${saldoVitorias} vitórias`);
  }
}

calculaPartidasRankeadas();
heroi.escrever();