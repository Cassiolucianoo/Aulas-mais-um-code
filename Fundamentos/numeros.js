const peso1 = 1.0

const peso2 = Number('2.09292929292')

console.log(peso1, peso2)


console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avalicao1 = 9.871
const avalicao2 = 6.871

const total = avalicao1 * peso1 + avalicao2 * peso2
const media = total / (peso2 + peso1)

console.log(media)

console.log(media.toFixed(2))

console.log(typeof Number)
