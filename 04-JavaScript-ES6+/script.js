const pessoa = {
    nome: "Gabriel",
    sobrenome: "Silva",
    idade: "24",
    altura: "176",
    peso: 75,
    nomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`);
    },
}

pessoa.andar = function() {
    console.log("Funcionou!");
}

pessoa.altura = 3000;