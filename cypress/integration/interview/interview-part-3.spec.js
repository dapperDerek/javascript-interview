
// Here's a usable zipcode for your test: 35125
describe('Interview - Part 3', () => {
    it('Visit \'www.freshly.com/subscriptions/new\'', () => {
        cy.visit('www.freshly.com/subscriptions/new')
    })
    it('Should see form with email and zipcode fields', () => {
        cy.contains('Email').should('be.visible')
        cy.get('form input[name="join_now_data[zip]"]').should('be.visible')
    })
    it('Enter email and zipcode (35125 is a usable zipcode)', () => {
        cy.get('form input[name="join_now_data[email]"]')
          .click()
          .clear()
          .type('user@email.com')

        cy.get('form input[name="join_now_data[zip]"]')
          .click()
          .clear()
          .type('35125{enter}')
    })
    it('Should see \'choose a plan\' section', () => {
        
    })
    it('Select a meal plan', () => {
        
    })
    it('Should see \'choose a delivery day\' section', () => {
        
    })
    it('Select a delivery day from available options', () => {
        
    })
    it('Click \'Next\'', () => {
        
    })
    it('Should see \'meal selection\' section', () => {
        
    })
    it('Select number of meals to match selected plan', () => {
        
    })
    it('Click \'Next\'', () => {
        
    })
    it('Should see \'checkout\' section', () => {
        
    })
    it('Should see \'Order Summary\' panel with accurate info', () => {
        
    })
    it('Should see \'My Meals\' panel with accurate info', () => {
        
    })
    it('Should see 3 steps: Create Account, Delivery Address, Payment Info', () => {
        
    })
    it('Should start on Create Account step', () => {
        
    })
    it('Complete \'create account\' form', () => {
        
    })
    it('Click \'Next\'', () => {
        
    })
    it('Should be on Delivery Address step', () => {
        
    })
    it('Complete the \'delivery address\' form', () => {
        
    })
    it('Click \'Next\'', () => {
        
    })
    it('Should be on \'Payment Info\' step', () => {
        
    })
    it('Complete \'payment info form\'', () => {
        
    })
})  
