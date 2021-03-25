const express = require('express')
const app = express()
const port = 3000

let users = require('./data/users.json');
let deliveries = require('./data/deliveries.json');
let subscriptions = require('./data/subscriptions.json');

app.get('/users', (req, res) => {

  let id = req.query.id;
  let email = req.query.email;
  let subscriptionId = req.query.subscriptionId;

  let usersSorted = users.sort( function( a, b ) {
    return a.email < b.email ? -1 : a.email > b.email ? 1 : 0;
  });

  if (id == null && email == null && subscriptionId == null){
    res.send(usersSorted)
  } else if (id != null) {
    res.send(findId(users, id))
  } else if (email != null) {
    res.send(findEmail(users, email))
  } else if (subscriptionId != null) {
    res.send(findSubId(users, subscriptionId))
  }
})

app.get('/subscriptions', (req, res) => {

  let id = req.query.id;
  let type = req.query.type;

  if(id != null){
    res.send(userDetails({users, subscriptions, deliveries, id}));
  } else if(type != null){
    res.send(findSubsType(subscriptions, type))
  } else{
    res.send("No Subscriptions found, please enter Id or Type")
  }
})

app.get('/deliveries', (req, res) => {

  let id = req.query.id;
  let subscriptionId = req.query.subscriptionId;

  if(id != null){
    res.send(userDetails({users, subscriptions, deliveries, id}));
  } else if(subscriptionId != null) {
    res.send(findDeliveriesSubId(deliveries, subscriptionId))
  }
})

app.get('/', (req, res) => {
  res.send('Nothing here bud.')
})

app.listen(port, () => {
  console.log(`Interview app listening at http://localhost:${port}`)
})

function findId(data, idToLookFor) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].id == idToLookFor) {
      return(data[i]);
    }
  }
}

function findEmail(data, emailToLookFor) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].email == emailToLookFor) {
      return(data[i]);
    }
  }
}

function findSubId(data, subIdToLookFor) {
  for (var i = 0; i < data.length; i++) {
    if (data[i].subscription_id == subIdToLookFor) {
      return(data[i]);
    }
  }
}

function userDetails({users, subscriptions, deliveries, id}) {
  let userDetails = [];
  for (var i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      userDetails.push(users[i]);
    }
  }
  for (var i = 0; i < subscriptions.length; i++) {
    if (subscriptions[i].id == id) {
      userDetails.push(subscriptions[i]);
    }
  }
  for (var i = 0; i < deliveries.length; i++) {
    if (deliveries[i].id == id) {
      userDetails.push(deliveries[i]);
    }
  }
  return userDetails;
}

function findSubsType(data, type) {
  let subscriptionsWithType = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].type == type) {
      subscriptionsWithType.push(data[i]);
    }
  }
  return subscriptionsWithType;
}

function findDeliveriesSubId(data, subscriptionId) {
  let deliveriesWithSubId = [];
  for (var i = 0; i < data.length; i++) {
    if (data[i].subscription_id == subscriptionId) {
      deliveriesWithSubId.push(data[i]);
    }
  }
  return deliveriesWithSubId;
}

/* I didn't have enough time to add error messages for when id, email or Sub Id does not exist or is incorrect since I
 * don't usually develop. I would also put these base methods in a separate file.
 */