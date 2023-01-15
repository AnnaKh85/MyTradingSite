/// <reference types="cypress" />

describe('Test suit: open the page, fill out the form', () => {
    it('Passed', () => {
        cy.visit('https://my-portfolio-site-self.vercel.app/contact');    
      }) 
    
    it('type the field name', () => {
        cy.visit('https://my-portfolio-site-self.vercel.app/contact');    
        cy.get('input[name="name"]').type('Anna');
        cy.get('input[name="email"]').type('Anna.khizhnyakova@gmail.com');
        cy.get('textarea.font-light').type('Hello! I would like to invite you in my birthday patry!');
        cy.get('form').submit();
    })
})