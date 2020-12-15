const express = require('express')
const app = express()
const port = 3000

app.get('/users', (req, res) => {
  res.send('Users!')
})
app.get('/subscriptions', (req, res) => {
  res.send('Subscriptions!')
})
app.get('/deliveries', (req, res) => {
  res.send('Deliveries!')
})
app.get('/', (req, res) => {
  res.send('Nothing here bud.')
})

app.listen(port, () => {
  console.log(`Interview app listening at http://localhost:${port}`)
})
