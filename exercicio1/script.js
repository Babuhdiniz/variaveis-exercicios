let nome
let idade

console.log(typeof(nome) , typeof idade)

//Foi impresso ''undefined'' pois são variáveis sem valores, não declarei elas. Não possuem valor definido.


nome = prompt('Qual seu nome?')
idade = Number(prompt('Qual sua idade?'))

console.log(typeof(nome) , typeof idade)

//Os 2 foram string, as variáveis ''nome e idade''. Era pra ser uma string e outro número 

console.log('Olá pessoal, meu nome é', nome , 'você tem', idade)
console.log(`Olá ${nome} você tem  ${idade}`)

let refrigerante = 'Você gosta de refrigerante?'
let comida = 'Você gosta de doce?'
let ferias = 'Você vai viajar?'

console.log(refrigerante, comida, ferias)

let respostaA = prompt(refrigerante)
let respostaB = prompt(comida)
let respostaC = prompt(ferias)

console.log(respostaA, respostaB, respostaC)
console.log(`
${refrigerante} - ${respostaA}
${comida} - ${respostaB}
${ferias} - ${respostaC}
`)



