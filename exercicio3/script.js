const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}

const pokemon2 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água"
}

pokemon1.ataques = []
pokemon1.ataques.push({
    nome: "Investida",
    dano: 40,
    tipo: "Normal",
    precisao: 100
})

pokemon2.ataques = [pokemon1.ataques]

pokemon1.ataques.push({
    ataque: "Folha Navalha",
     dano: 45, 
     precisao: 100, 
     tipo: "Grama"})

pokemon2.ataques.push({
    ataque: "Jato de Água",
     dano: 40,
      precisao: 100,
       tipo: "Água"})


console.log(pokemon1)
console.log(pokemon2)

