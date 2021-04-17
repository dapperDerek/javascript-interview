const express = require('express')
const app = express()
const port = 3000

let users = require('./data/users.json')

app.get('/users', (req, res) => {
  const user_id = req.query.id
  const user_email = req.query.email
  const user_subscription_id = req.query.subscription_id
  let user;

  if (Object.keys(req.query).length === 0) {
    users.sort((a,b) => (a.email > b.email) ? 1 : -1)
    res.status(200).send(users)
  }
  else {
    if (user_id) {
      user = users.find(element => element.id === parseInt(user_id))
    } 
    else if (user_email) {
      user = users.find(element => element.email === user_email)
    } 
    else if (user_subscription_id) {
      user = users.find(element => element.subscription_id === parseInt(user_subscription_id))
    }
  
    if (user == null) {
      res.status(404).send("Not Found")
    }
    else {
      res.status(200).send(user)
    }
  }
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
