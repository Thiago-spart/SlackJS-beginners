//váriaveis
/*
	Na primeira parte é pedido para declarar as váriaveis 
*/
const EXPLORADOR = 'Thiago' 
let bolsaDeItens = [],
	moedas = 0,
	energia = 5,
	recompensas = [
		'Chave',
		'Duck, o Pato de Borracha',
		'Moeda',
		'Moeda',
		'Moeda',
		'Moeda',
		'Moeda'
	]

function taverna() {
	console.log(EXPLORADOR + ' entrou na Taverna')

	if (energia < 5) {
		console.log(EXPLORADOR + ' está descansando')
		while (energia < 5) {
			energia++
		}
	}
	if (energia == 5){
		console.log(EXPLORADOR + ' está revitalizado')
	}
}

function pegarItem(item) {
	if (item == 'Moeda') {
		console.log(EXPLORADOR +' ganhou uma moeda')
		moedas ++
	} else {
		console.log(EXPLORADOR +' ganhou um item')
		bolsaDeItens.push(item)
	}
}

//exploração
function batalha() {
	console.log(EXPLORADOR + ' encontrou um monstro')
	let v = false
	if (energia < 1) {
		console.log(EXPLORADOR + ' fugiu para a Taverna')
	} else {
		console.log(EXPLORADOR + ' derrotou o monstro')
		energia--
		if (energia < 1) {
			console.log(EXPLORADOR + ' fugiu para a Taverna') 
		} else {
			v = true 
		}
	}
	return v
}

function explorar() {
	console.log(EXPLORADOR + ' saiu para explorar')
	let r = false
	if (energia < 1) {
		console.log(EXPLORADOR + ' não pode explorar')
		taverna()
	} else {
		r = batalha()
		if (r == true) {
			roletarRecompensas() //função externa
		} else {
			taverna()
			r = false
		}
	} 
	return r
}

function abrirBau() {
	let pesquisa = bolsaDeItens.indexOf('Chave')
	if (!(pesquisa == -1)) {
		console.log("Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!")
		return true
	} else {
		return false
	}
}
/*

Passo 5 - Fim da jornada

Criar uma função chamada abrirBau
SE houver uma "Chave" no array Bolsa de Itens:
Use um console.log() com a mensagem "Parabéns, você finalmente abriu o baú, é perigoso lá fora, leve seu certificado!"
Deverá retornar true;
SENÃO:
Retorne false;
*/