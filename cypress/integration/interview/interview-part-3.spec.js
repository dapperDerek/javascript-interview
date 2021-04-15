// Here's a usable zipcode for your test: 35125

// Here's a usable zipcode for your test: 35125

//www.freshly.com/subscriptions/new

describe('FreshlyInterview', function() {
    before(function () {
        cy.fixture('example.json').then(function (data) {
            this.data = data

        })

    })
    it('NewAccount', function () {
        cy.visit(this.data.url)
       

        cy.get('[data-test=email-field]')
        .should('have.attr', 'placeholder', 'Email') //assert placeholder text is present
        .clear()
        .type(emailId_Alpha())

        function emailId_Alpha() {
        var chars = 'abcdefghijklmnopqrstuvwxyz1234567890';
        var string = '';
        for(var ii=0; ii<15; ii++){
            string += chars[Math.floor(Math.random() * chars.length)];
        }
        return(string + '@domain.com');
                }

        cy.get('[data-test=zip-field]')
        .click({ force: true })
        .should('have.attr', 'placeholder', 'Zip')
        .clear()
        .type('35125')

        cy.get('[data-test=get-started-form-submit-button]').click({ force: true }) //clicking the continue button
        cy.get(':nth-child(1) > .card-body > form.d-lg-block > div > .btn').click()
        cy.wait(5000)
       
        cy.xpath('//*[@id="datePickerContainer"]/ul/li[4]').click()
        cy.get('[data-test=submit-date]').click()
        cy.wait(5000)

        cy.xpath('//*[@id="main"]/div/div/section/div/div[1]/div/section[1]/ul/li[3]/div/div[2]/div[3]/div[2]/div/div/span').click()
        cy.xpath('//*[@id="main"]/div/div/section/div/div[1]/div/section[1]/ul/li[11]/div/div[2]/div[3]/div[2]/div/div/span').click()
        cy.xpath('//*[@id="main"]/div/div/section/div/div[1]/div/section[1]/ul/li[20]/div/div[2]/div[3]/div[2]/div/div/span').click()
        cy.xpath('//*[@id="main"]/div/div/section/div/div[1]/div/section[1]/ul/li[24]/div/div[2]/div[3]/div[2]/div/div/span').click()
        cy.wait(2000)

        cy.get('.CartFooter-module__button___1MVr1').click()

        



    })
})
//*cy.visit(this.data.url)
