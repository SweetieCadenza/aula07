var nome = 'Isabela';
console.log(nome);

var sobrenome = 'Juchem Clemens';
console.log(sobrenome);

let idade = 20;
console.log(idade);
const object2 = {
  nome: nome,
  sobrenome: sobrenome,
  idade: 20,
};
console.log('object2', object2);

//ou

const object3 = {
  nome: 'Isabela',
  sobrenome: 'Juchem Clemens',
  idade: 20,
};
console.log('object3', object3);

//somente se o nome da variavel
//e o nome da propriedade
//forem o mesmo
const usuario4 = { nome, sobrenome, idade };
console.log(usuario4);

console.log(object3.nome);
console.log(object3.sobrenome);
console.log(object3.idade);

function hello( ){
  console.log('hello');
}


function welcome(message) {
  console.log(
    `hello ${object3.nome} ${object3.sobrenome}, happy ${object3.idade} th bday`);
}

welcome(usuario4);



