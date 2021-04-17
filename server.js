const express = require('express')
const app = express()
const port = 3000

let users = require('./data/users.json')
let subscriptions = require('./data/subscriptions.json')
let deliveries = require('./data/deliveries.json')

app.get('/users', (req, res) => {
  const user_id = req.query.id
  const user_email = req.query.email
  const user_subscription_id = req.query.subscription_id
  let user;

  // No query parameters
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
  const subscription_id = req.query.id;
  const subscription_type = req.query.type;

  // Query parameter is a subscription id
  if (subscription_id) {
    let response = {};

    response.subscription = subscriptions.find(s => s.id === parseInt(subscription_id))
    response.user = users.find(u => u.subscription_id === parseInt(subscription_id))
    response.deliveries = deliveries.filter(d => d.subscription_id === parseInt(subscription_id))

    if (response.subscription) {
      res.status(200).send(response)
    }
    else {
      res.status(404).send("Not Found")
    }
  }
  // Query parameter is a subscription type
  else if (subscription_type) {
    let response = subscriptions.filter(s => s.type === subscription_type)
    res.status(200).send(response)
  }
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
