// Escrevendo as classes de um Jogo

class heroi{
	constructor(nomeHeroi, idadeHeroi, tipoHeroi, ataqueHeroi){
        this.nomeHeroi = nomeHeroi
        this.idadeHeroi = idadeHeroi
        this.tipoHeroi = tipoHeroi
    	this.ataqueHeroi = ataqueHeroi
    }

atacar(){
	console.log(`O ${this.tipoHeroi} atacou usando ${this.ataqueHeroi}`)
	}
}


let heroi01 = new heroi("MagoDeOx", "28", "Mago", "Magia")
let heroi02 = new heroi("WarriorFromHell", "30", "Guerreiro", "Espada")
let heroi03 = new heroi("Monk", "60", "Monge", "Artes Marciais")
let heroi04 = new heroi("JetLee", "20", "Ninja", "Shuriken")

heroi01.atacar()
heroi02.atacar()
heroi03.atacar()
heroi04.atacar()