const moment = require("moment")

const users = [
  { name: "Derp", id: 1, susbscriptionId: 1 },
  { name: "Derp", id: 2, susbscriptionId: 2 },
  { name: "Derp", id: 3, susbscriptionId: 3 },
  { name: "Derp", id: 3, susbscriptionId: 4 }
]
const deliveries = [
  { id: 1, date: "January 21, 2021 18:53 MST", susbscriptionId: 1 },
  { id: 2, date: "January 14, 2021 18:53 MST", susbscriptionId: 1 },
  { id: 3, date: "January 7, 2021 18:53 MST", susbscriptionId: 1 },
  { id: 4, date: "February 28, 2021 18:53 MST", susbscriptionId: 1 }
]
const subscriptions = [
  { type: "Plan 1", id: 1 },
  { type: "Plan 1", id: 2 },
  { type: "Plan 3", id: 3 },
  { type: "Plan 4", id: 4 }
]

// Quality - Did they write any tests? Are their tests any good?
// - set up some unit testing framework
// How dry is their code?
// - Reusability
// How readable is their code?

/**
  - Find the last two deliveries for user with ID 3
  - Get all users who have a subscription type of "Plan 1"
  - Sort each dataset by id


  Express app with 3 routes
  - users, subscriptions, deliveries
  - routes to return
    - full dataset
    - filter by attribute name and/or values
      - can find delivery by id or date or subscriptionId
    - order dataset
*/

axios.get("/users", { id: 1 })
axios.get("/users", { name: "Derp" })
axios.get("/users", { subscriptionId: 1 })
axios.get("/deliveries", { date: moment("January 21, 2021 18:53 MST") })
