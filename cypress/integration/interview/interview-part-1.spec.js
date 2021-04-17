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
    // Todo
  })
  it('When /subscriptions api is called with type param then it returns all subscriptions for given type', () => {
    // Todo
  })


  //  ----- Deliveries API  -----  \\
  it('When /deliveries api is called with id param then it returns subscription, user, and deliveries', () => {
    // Todo
  })
  it('When /deliveries api is called with subscription_id param then it returns all deliveries for given subscription_id', () => {
    // Todo
  })
})
