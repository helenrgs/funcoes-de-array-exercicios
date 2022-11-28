// # Exercício 2
// Crie um array de números que contenha 8 números.
// Depois disso, utilize este array para criar duas funcões de array `map()`:

// 1. A primeira deve retornar um novo array contendo os números múltiplicados por 3, 
// Crie uma `const triplos`, e guarde o valor do array nesta const;
// 2. A segunda deve retornar um novo array contendo os números divididos por 2
//. Crie uma `const metades`, e guarde o valor do array nesta const;

let arr = [1,2,3,4,5,6,7,8]; 

const triplos = arr.map(function(triplo) {
    return (3*triplo)
})

const metades = arr.map(function(metade) {
    return(metade/2)
})


function imprimir (funcao) {
    return console.log((funcao))
}

imprimir(triplos)
imprimir(metades)
