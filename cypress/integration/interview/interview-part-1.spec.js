describe('Interview', () => {
  //  ----- Users API -----  \\
  it('When /users api is called with no params then it returns all users ordered by email ascending', () => {
    cy.request('http://localhost:3000/users')
      .then(res => {
        let users = [...res.body]
        users.sort((a,b) => (a.email > b.email) ? 1 : -1)

        expect(res.status).to.equal(200)
        expect(users).to.deep.equal(res.body)
      })
  })
  it('When /users api is called with id, email, or subscription_id param then it returns user', () => {
    cy.request('http://localhost:3000/users?id=1')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('id', 1)
        expect(res.body).to.have.property('email')
        expect(res.body).to.have.property('subscription_id')
      })

    cy.request('http://localhost:3000/users?email=cguerra1@answers.com')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('email', 'cguerra1@answers.com')
        expect(res.body).to.have.property('subscription_id')
      })

    cy.request('http://localhost:3000/users?subscription_id=3')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body).to.have.property('id')
        expect(res.body).to.have.property('email')
        expect(res.body).to.have.property('subscription_id', 3)
      })
  })


  //  ----- Subscriptions API  -----  \\
  it('When /subscriptions api is called with id param then it returns subscription, user, and deliveries', () => {
    cy.request('http://localhost:3000/subscriptions?id=1')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body.subscription.id).to.equal(1)
        expect(res.body.user.subscription_id).to.equal(1)
        expect(res.body.deliveries).to.be.a('Array')
      })
  })
  it('When /subscriptions api is called with type param then it returns all subscriptions for given type', () => {
    cy.request('http://localhost:3000/subscriptions?type=Plan 4')
      .then(res => {
        expect(res.status).to.equal(200)

        // Any random element should meet these requirements
        const randomIndex = Math.floor(Math.random() * res.body.length)
        const subscription = res.body[randomIndex]

        expect(subscription.id).to.not.be.null
        expect(subscription.type).to.equal('Plan 4')
        expect(subscription.price).to.exist
      })
  })


  //  ----- Deliveries API  -----  \\
  it('When /deliveries api is called with id param then it returns subscription, user, and deliveries', () => {
    cy.request('http://localhost:3000/deliveries?id=1')
      .then(res => {
        expect(res.status).to.equal(200)
        expect(res.body.subscription).to.exist
        expect(res.body.user).to.exist
        expect(res.body.deliveries).to.have.length(1)
        expect(res.body.deliveries[0].id).to.equal(1)
      })
  })
  it('When /deliveries api is called with subscription_id param then it returns all deliveries for given subscription_id', () => {
    cy.request('http://localhost:3000/deliveries?subscription_id=1')
      .then(res => {
        expect(res.status).to.equal(200)

        // Any random element should meet these requirements
        const randomIndex = Math.floor(Math.random() * res.body.length)
        const delivery = res.body[randomIndex]

        expect(delivery.id).to.not.be.null
        expect(delivery.subscription_id).to.equal(1)
        expect(delivery.date).to.exist
      })
  })
})
