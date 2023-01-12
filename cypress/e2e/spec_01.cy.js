/// <reference types="cypress" />

describe('Test suit - open the site and check elements on the site', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8888/'); //for local dev
    //cy.visit('https://mytrading.netlify.app/')//for testing on server
  })

  it('Field with contact info', () => {
    cy.get('input[name="name"]', {timeout:1000})
    .should('be.visible')
    .and('have.value', "")
    //.and("have.attr", "maxlength", "50")
  })

  it('Clicking on elements', () =>{
    cy.get('input[name="name"]').click();
    cy.get('#contact-name').should("be.visible").contains("Anna Khizhnyakova");
    cy.get('#footer > .container').click();
  })

  it('Typing the name', () =>{
    cy.get('input[name="name"]').type("Anna Khizhnyakova");

    const searchDropdownList = "#contact-name"
  
  })


})