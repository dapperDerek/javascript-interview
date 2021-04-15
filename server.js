const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');


//Read JSON from the file and create an object
let users = fs.readFileSync('./data/users.json');
let users_list = JSON.parse(users);


function emailSort( a, b ) {
  if ( a.email < b.email ){
    return -1;
  }
  if ( a.email > b.email ){
    return 1;
  }
  return 0;
}


//Get sorted Users data on Email
app.get('/users', (req, res) => {
  res.send(users_list.sort(emailSort));
})

//Search by only ID
app.get('/users/:id', (req, res) => {
  console.log(req.params);
  const searchUser = users_list.find(c => c.id === parseInt(req.params.id));
  if(!searchUser) res.send ('Given ID doesnt exist!');
  res.send(searchUser);
})

//multiple parameters
app.get('/users/:id/:email/:subid', (req, res) => {
  console.log(req.params);
  const searchUsers = users_list.filter(c => c.id === parseInt(req.params.id)
      || c.email === req.params.email
      || c.id === parseInt(req.params.subid))

  if(!searchUsers) res.send ('Given ID doesnt exist!');
  res.send(searchUsers);
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
