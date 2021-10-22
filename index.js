const express = require('express')
const app = express()

app.use(express.static(__dirname + '/views'))
app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile('index.html')
})

app.listen(process.env.PORT || 3000, () => {
  console.log(`Rodando ${process.env.PORT || 3000}`)
})
