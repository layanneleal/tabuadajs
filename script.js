function mostrarTabuada() {
  //Cria referência aos elementos da página
  let inNumero = document.getElementById('inNumero')
  let outTabuada = document.getElementById('outTabuada')

  //Converte conteúdo do campo inNumero
  let numero = Number(inNumero.value)

  //Valida o número
  if (numero == 0 || isNaN(numero)) {
    alert('Informe um número válido!')
    inNumero.focus()
    return
  }
  //Cria uma variável do tipo String, que irá concatenar à resposta
  let resposta = ''

  //Cria um laço de repetição
  for (let i = 1; i <= 10; i++) {
    resposta = resposta + numero + 'x' + i + '=' + numero * i + '\n'
  }
  //O conteúdo da tag pre é alterado para exibir a tabuada
  outTabuada.textContent = resposta

}
//Cria referência ao botão e após associa function ao evento click
let btMostrar = document.getElementById('btMostrar')
btMostrar.addEventListener('click', mostrarTabuada)