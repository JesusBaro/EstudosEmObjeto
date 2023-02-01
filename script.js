// 01 - Crie um array que receba 5 itens e exiba no console.

// let estilosMusicais = [`jazz`,`samba`,`funk`,`lo-fi`,`alternativo`,]
// console.log(estilosMusicais)

// 02 - Utilize um método para adicionar um nome ao inicio do array.

// estilosMusicais.splice(0,0,`Disco`)
// console.log(estilosMusicais)

// 03 - Utilize um método para remover o último nome do array.

// estilosMusicais.splice(4,1)
// console.log(estilosMusicais)

// 04 - Utilize um método para adicionar dois nomes ao fim do array.

// estilosMusicais.splice(5,0,`R&B`)
// console.log(estilosMusicais)

// 05 - Utilize um método para remover o primeiro nome do array.

// estilosMusicais.shift()
// console.log(estilosMusicais)

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:

// let numbers = [7,5,6,3,8,9,2,1,4]
// numbers.sort((a,b) => a-b)
// console.log(numbers)

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

// let jesus={
//     etnia:`negro`,
//     naturalidade:`Rio de Janeiro`,
//     idade:24,
// }
// console.log(jesus)

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

// jesus.altura = 1.83
// console.log(jesus)

// 09 - Remova uma propriedade desse objeto.

// delete jesus.naturalidade
// console.log(jesus)

// 10 - Mostre no console todas as propriedades desse objeto.

// console.log(jesus.etnia)
// console.log(jesus.naturalidade)
// console.log(jesus.idade)


// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens. 

// - amigos é uma array dentro de um objeto //

let cadastro = [
    {
        nome:`Lara`,
        idade:20,
        telefone:9885285110,
        amigos:[`Dara`,
                 `Carla`, 
                 `Ana Paula`, 
                 `Ajay`
                ]
    },
    { 
        nome:`Miguel`,
        idade:27,
        telefone:947365739,
        amigos:[`Danilo`,
            `Fernanda`,
            `Josy`,
            `Rómulo`,
            ]
        },
    { 
        nome:`Alessandro`,
        idade:26,
        telefone:943838548,
        amigos:[`Gabriel`,
            `Regina`,
            `Kelly`,
            `Mônica`,
            ]
        },
    { 
        nome:`Jojo`,
        idade:22,
        telefone:null,
        amigos:[`Sarah`,
            `Gustavo`,
            `Silva`,
            `Douglas`,
            ]
        },
]

// 12 - Mostre no console o nome de um amigo de cada lista.

console.log(cadastro[0].nome)
console.log(cadastro[1].nome)
console.log(cadastro[2].nome)
console.log(cadastro[3].nome)