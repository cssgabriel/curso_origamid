function Pessoa(nome, idade) {
    this.nome = nome;
    this.idade = idade;
    this.andar = function() {
        console.log(this.nome + " está andando!")
    };
}

const joao = new Pessoa("João", 20);
const maria = new Pessoa("Maria", 25);
const bruno = new Pessoa("Bruno", 15);

function Dom(element) {
    this.elemento = document.querySelectorAll(element);
    this.addClass = function(cls) {
        this.elemento.forEach((item) => {
            item.classList.add(cls);
        });
    };
    this.removeClass = function(cls){
        this.elemento.forEach((item) => {
            item.classList.remove(cls);
        });
    };
}