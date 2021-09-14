const cors = require('cors')
const express = require('express')
const app = express()
const axios = require('axios')

app.use(cors())
app.use('/public', express.static('./public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// rota para servir a API
app.get('/api', async (req, res) => {
  try {
    //response é a resposta do axios, Mas eu consigo extrair o data de dentro
    const { data } = await axios(
      'https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL'
    )
    return res.json(data)
  } catch (error) {
    console.error(error)
  }
})

app.listen('5500')
