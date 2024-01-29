// primeiro dia de desafio - operações booleanas.
let numeroUm = 1
let stringUm = '1'
let numeroTrinta = 30
let stringTrinta = '30'
let numeroDez = 10
let stringDez = '10'

if (numeroUm == stringUm) {
  console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroUm e stringUm não tem o mesmo valor')
}

if (numeroTrinta === stringTrinta) {
  console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
} else {
  console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
}

if (numeroDez == stringDez) {
  console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
} else {
  console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
}

// segundo dia de desafio - variáveis
const nome = prompt('Qual o seu nome ?')
const idade = prompt('Quantos anos você têm ?')
const linguagem = prompt('Qual a linguagem de programação você está estudando ?')
const msg = `'Olá ${nome}, você têm ${idade} anos e já está aprendendo ${linguagem}!'`

alert(msg)

const gosta = prompt(`Você gosta de estudar ${linguagem} ? Responda com o número 1 - SIM ou 2 - NÃO`)
if (gosta == 1){
    alert('Muito bom ! Continue estudando e você terá muito sucesso.')
}
if (gosta == 2){
    alert('Ahh que pena... Já tentou aprender outras linguagens ?')
}

// terceiro dia de desafio - fluxo de decisão
function fazerPergunta(pergunta) {
    return prompt(pergunta)
  }
  
  function exibirMensagem(mensagem) {
    console.log(mensagem)
  }
  
  function jogoDeDesenvolvimento() {
    exibirMensagem('Bem-vindo ao jogo de desenvolvimento !')
  
    let escolha1 = fazerPergunta('1. Quer seguir para a área de Front-End ou Back-End ?')
    
    if (escolha1.toLowerCase() === 'front-end') {
      
      let escolha2a = fazerPergunta('2. Quer aprender React ou Vue ?')
      exibirMensagem(`Você escolheu Front-End e vai aprender ${escolha2a}.`)
    } else if (escolha1.toLowerCase() === 'back-end') {
      
      let escolha2b = fazerPergunta('2. Quer aprender C# ou Java ?')
      exibirMensagem(`Você escolheu Back-End e vai aprender ${escolha2b}.`)
    } else {
      exibirMensagem('Opção inválida. Reinicie o jogo e escolha novamente.')
      return
    }
  
    let escolha3 = fazerPergunta('3. Quer se especializar na área escolhida ou se tornar Fullstack ?')
    exibirMensagem(`Você escolheu ${escolha3}.`)
  
    let continuar = true
    let tecnologiasAprendidas = []
  
    while (continuar) {
      let tecnologia = fazerPergunta('Digite uma tecnologia que você gostaria de aprender: ')
      tecnologiasAprendidas.push(tecnologia)
  
      continuar = fazerPergunta('Tem mais alguma tecnologia que você gostaria de aprender ? (Responda "sim" ou "não")').toLowerCase() === 'sim'
    }
  
    exibirMensagem('Ótimo ! Você escolheu aprender as seguintes tecnologias: ')
    for (let i = 0; i < tecnologiasAprendidas.length; i++) {
      exibirMensagem(`- ${tecnologiasAprendidas[i]}`)
    }
  
    exibirMensagem('Parabéns por jogar o jogo de desenvolvimento !')
  }
  
jogoDeDesenvolvimento()

// quarto dia de desafio - adivinhar o número
alert('Boas vindas ao jogo do número secreto !')

let numeroMaximo = 100
let numeroSecreto = parseInt(Math.random() * numeroMaximo + 1)
console.log(numeroSecreto)
let chute
let tentativas = 1

while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${numeroMaximo}`)
    
    if (chute == numeroSecreto) {
        break
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`)
        } else {
            alert(`O número secreto é maior que ${chute}`)
        }
        tentativas++
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`É isso aí ! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`)

// quinto dia de desafio - lista de compras
const listaDeCompras = []

function adicionarItens() {
    let adicionar = prompt('Deseja adicionar um item à lista de compras ? (Sim/Não)')
    if(adicionar.toLowerCase() === 'sim') {
        let item = prompt('Qual item você deseja adicionar ?')
        let categoria = prompt('Em qual categoria essa comida se encaixa (Frutas, Laticínios, Congelados, Doces, Etc.) ?')

        if(!listaDeCompras[categoria]) {
            listaDeCompras[categoria] = [item]
        } else {
            listaDeCompras[categoria].push(item)
        }
        adicionarItens()
    } else {
        console.log('Lista de compras: ')
        for(const categoria in listaDeCompras) {
            console.log(`${categoria}: ${listaDeCompras[categoria].join(', ')}`)
        }
    }
}
adicionarItens()

// sexto dia de desafio - remoção de arrays
const listaDeCompras = []

function adicionarItem() {
  const item = prompt('Digite o nome do item que deseja adicionar:')
  listaDeCompras.push(item)
  console.log(`'${item}' foi adicionado à lista de compras.`)
}

function removerItem() {
  if (listaDeCompras.length === 0) {
    console.log('A lista de compras está vazia. Não há itens para remover.')
    return
  }

  console.log('Itens na lista de compras:')
  for (let i = 0; i < listaDeCompras.length; i++) {
    console.log(`${i + 1}. ${listaDeCompras[i]}`)
  }

  const indiceRemover = prompt('Digite o número do item que deseja remover:')
  const indice = parseInt(indiceRemover) - 1

  if (isNaN(indice) || indice < 0 || indice >= listaDeCompras.length) {
    console.log('Índice inválido. Não foi possível encontrar o item na lista.')
  } else {
    const itemRemovido = listaDeCompras.splice(indice, 1)[0]
    console.log(`'${itemRemovido}' foi removido da lista de compras.`)
  }
}

function exibirLista() {
  if (listaDeCompras.length === 0) {
    console.log('A lista de compras está vazia.')
  } else {
    console.log('Itens na lista de compras:')
    for (let i = 0; i < listaDeCompras.length; i++) {
      console.log(`${i + 1}. ${listaDeCompras[i]}`)
    }
  }
}

function iniciarPrograma() {
  while (true) {
    const opcao = prompt('Deseja adicionar (A) ou remover (R) um item? Ou exibir a lista (E)? Digite "S" para sair.')

    switch (opcao.toUpperCase()) {
      case 'A':
        adicionarItem();
        break;
      case 'R':
        removerItem();
        break;
      case 'E':
        exibirLista();
        break;
      case 'S':
        console.log('Programa encerrado.')
        return;
      default:
        console.log('Opção inválida. Tente novamente.')
    }
  }
}

iniciarPrograma()

// sétimo dia de desafio - funções
function soma(a, b) {
  return a + b;
}

function subtracao(a, b) {
  return a - b;
}

function multiplicacao(a, b) {
  return a * b;
}

function divisao(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    return "Erro: Divisão por zero!";
  }
}

while (true) {
  console.log("Escolha a operação:");
  console.log("1. Soma");
  console.log("2. Subtração");
  console.log("3. Multiplicação");
  console.log("4. Divisão");
  console.log("5. Sair");

  const opcao = prompt("Digite o número da operação desejada:");

  if (opcao === "5") {
    console.log("Até a próxima!");
    break;
  }

  const valor1 = parseFloat(prompt("Digite o primeiro valor:"));
  const valor2 = parseFloat(prompt("Digite o segundo valor:"));

  switch (opcao) {
    case "1":
      console.log(`Resultado: ${soma(valor1, valor2)}`);
      break;
    case "2":
      console.log(`Resultado: ${subtracao(valor1, valor2)}`);
      break;
    case "3":
      console.log(`Resultado: ${multiplicacao(valor1, valor2)}`);
      break;
    case "4":
      console.log(`Resultado: ${divisao(valor1, valor2)}`);
      break;
    default:
      console.log("Opção inválida. Tente novamente.");
  }
}