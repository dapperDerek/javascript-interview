# javascript-interview

## Welcome!

There are 4 parts to this assessment. All materials can be found found within the `cypress/integration/interview` directory.

---
### Part 1
Implement the following functionality in the `server.js` file:

#### Users API
  - When `/users` api is called with no params, then it returns all users ordered by email ascending
  - When `/users` api is called with `email` query param, then it returns user for `email`

#### Subscriptions API
  - When `/subscriptions` api is called with `id` query param, then it returns subscription, user, and deliveries for `subscription_id`
  - When `/subscriptions` api is called with `type` query param then it returns all subscriptions for `type`


 #### Deliveries API
  - When `/deliveries` api is called with `id` query param, then it returns delivery, subscription, and user for `id`
  - When `/deliveries` api is called with `subscription_id` param then it returns all deliveries for `subscription_id`


### Part 2
Implement integration tests for your APIs in the `interview-part-2.spec.js` file. Don't forget to test for negative scenarios!


### Part 3
Complete the exercise found in `interview-part-3.spec.js`


### Part 4
Finally, complete the exercise found in `interview-part-4`


---

Please DO NOT spend more than 2 hours working on this take-home assessment. We value your time as much as you do. It's OK if you don't finish - there are no points for completion.

---
