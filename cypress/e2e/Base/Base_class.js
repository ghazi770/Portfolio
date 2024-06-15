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

// 

}


export default Base