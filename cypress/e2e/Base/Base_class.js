/// <reference types="cypress" />

class Base 
{

// Open the URL 
    
Open_url()
{

beforeEach(() => 
{
cy.visit("https://practice.automationtesting.in/my-account/") 

}) 

}

// Refresh Page After Each iterantion 
    
Reload_Page()
{

afterEach(() => {

cy.reload()
}) 

}

// 1 time login

log_in()
{
 
before(() => {
cy.visit("https://practice.automationtesting.in/my-account/")
cy.get("[name='username']").type("lucifer007@mailinator.com")
cy.get("[id='password']").type("SShaheen!021")
cy.get("[name='login']").click()
 })   
             
} 

// URL Assetion 

URL_assertion(url)
{
cy.url().should('eq', url)

}

}


export default Base