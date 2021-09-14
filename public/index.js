// Usando a fetch para consumir a api
async function getContent() {
  // Usando try catch para capturar o erro se for retornado
  try {
    // Usando função async para esperar a resposta da fetch
    const response = await fetch('http://localhost:5500/api')
    const data = await response.json()
    document.querySelector('.todayCoin').innerHTML = 'R$ ' + data.USDBRL.bid

    //Pegando os elementos e adicionando em variáveis
    const dolarValue = document.querySelector('#dolarConverter')
    const realValue = document.querySelector('#realConverter')
    const coinDolar = document.querySelector('#converterCoinDolar')
    const coinReal = document.querySelector('#converterCoinReal')
    const divRes = document.querySelector('#res')

    // Adicionando eventos de cliques
    coinDolar.addEventListener('click', dolarConverter)
    coinReal.addEventListener('click', realConverter)

    function dolarConverter() {
      realValue.value = ''
      let total = dolarValue.value * data.USDBRL.bid
      if (divRes.classList) divRes.classList.add('res')
      else divRes.className += ' res'
      divRes.innerHTML = `Sua conversão resultou em R$${total.toFixed(4)}`
    }

    function realConverter() {
      dolarValue.value = ''
      let total = realValue.value / data.USDBRL.bid
      if (divRes.classList) divRes.classList.add('res')
      else divRes.className += ' res'
      divRes.innerHTML = `Sua conversão resultou em US$${total.toFixed(4)}`
    }
  } catch (error) {
    console.error(error)
  }
}
getContent()
