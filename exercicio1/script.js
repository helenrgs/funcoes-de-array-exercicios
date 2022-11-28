const obj = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

function upperCase (obj) {
    for (let i in obj) {
        obj[i] = obj[i].toUpperCase()
    }
    return obj;
}

function textoCorrido (obj) {
   let texto = "";
   for (i in obj) {
    texto = texto + ` ${obj[i]}`
   }
   return texto;
}

function imprimir (obj, funcao) {
    return console.log((funcao(obj)))
}

imprimir(obj, upperCase)
imprimir(obj, textoCorrido)

