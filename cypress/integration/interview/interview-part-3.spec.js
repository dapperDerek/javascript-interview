/// <reference types="cypress" />

// Here's a usable zipcode for your test: 35125

import {v4 as uuid4} from 'uuid';

describe('New Subscription', () => {
    it('New Subscription', () => {
        const email = uuid4() + '@gmail.com';
        const zip = '35125';
        cy.visit('www.freshly.com/subscriptions/new');
        cy.get('[data-test=email-field]').type(email)
        cy.get('[data-test=email-field]').should('have.value', email)
        cy.get('[data-test=zip-field]').type(zip)
        cy.get('[data-test=zip-field]').should('have.value',zip)
        cy.get('form').contains('Continue').click()
        cy.url().should('eq', 'https://www.freshly.com/join-now/plan?brand=core&zip=' + zip)
        cy.get('h2').contains('12').parent().parent().parent().click()
        cy.get('[data-test=earliest-delivery-date]').click()
        cy.get('form').contains('Next').click()
        cy.url().should('eq', 'https://www.freshly.com/join-now/meals?brand=core&delivery_dates=2021-03-31&plan_id=428&zip=35125')
        //Didn't have time to parameterize the above URL above
        cy.get('[data-test-meal-id=696807]').contains('Add').click()
        cy.get('[data-test-meal-id=696943]').contains('Add').click()
        cy.get('[data-test-meal-id=697398]').contains('Add').click()
        cy.get('[data-test-meal-id=697195]').contains('Add').click()
        cy.get('[data-test-meal-id=697245]').contains('Add').click()
        cy.get('[data-test-meal-id=697282]').contains('Add').click()
        cy.get('[data-test-meal-id=696808]').contains('Add').click()
        cy.get('[data-test-meal-id=697338]').contains('Add').click()
        cy.get('[data-test-meal-id=697387]').contains('Add').click()
        cy.get('[data-test-meal-id=696916]').contains('Add').click()
        cy.get('[data-test-meal-id=697153]').contains('Add').click()
        cy.get('[data-test-meal-id=697271]').contains('Add').click()
        cy.get('[data-test-type=cart__confirm-button]').click()
        cy.get('form').contains('First Name').type('John')
        cy.get('form').contains('Last Name').type('Doe')
    })
})