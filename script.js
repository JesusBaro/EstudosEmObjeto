// 01 - Crie um array que receba 5 itens e exiba no console.

let estilosMusicais = [`jazz`,`samba`,`funk`,`lo-fi`,`alternativo`,]

// 02 - Utilize um método para adicionar um nome ao inicio do array.

estilosMusicais.splice(0,0,`Disco`)

// 03 - Utilize um método para remover o último nome do array.

estilosMusicais.splice(4,1)

// 04 - Utilize um método para adicionar dois nomes ao fim do array.

estilosMusicais.splice(5,0,`R&B`)

// 05 - Utilize um método para remover o primeiro nome do array.

estilosMusicais.shift()

// 06 - Utilize um método para organizar em ordem crescente o seguinte array:

let numbers = [7,5,6,3,8,9,2,1,4]
numbers.sort((a,b) => a-b)

// 07 - Crie um objeto que receba ao menos três propriedades sobre você.

let humano={
    nome:`Jésus`,
    etnia:`negro`,
    naturalidade:`Rio de Janeiro`,
    idade:24,
}

// 08 - Adicione uma nova propriedade sem alterar seu objeto inicial.

humano.altura = 1.83

// 09 - Remova uma propriedade desse objeto.

// delete humano.naturalidade

// 10 - Mostre no console todas as propriedades desse objeto.

console.log(humano.nome)
console.log(humano.etnia)
console.log(humano.naturalidade)
console.log(humano.idade)

// 11- Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
// Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
// Na propriedade amigos, adicione ao menos 4 itens. 

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