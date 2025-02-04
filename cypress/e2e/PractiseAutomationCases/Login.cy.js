/// <reference types="cypress" />

import Login from "../../PageObject/Login_Page"
import Base from "../../e2e/Base/Base_class"


describe('Login', () => 
{ 
  

  const base= new Base();
  const ln=new Login();

// contain Each block 

base.Open_url()
base.Reload_Page()

// Case: #001


it ('Correct username & Password ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
ln.setuserName(data.Email)
ln.setPassword(data.password)
ln.Login_button()
cy.wait(50)

cy.contains('Sign out').should('be.visible')
cy.wait(50)
ln.Sign_out()

                
})
              
})  

  // Case: #002

it('Incorrect username & Incorrect Password ', () => {
        
cy.fixture("practiceautomationtesting").then((data)=>{
ln.setuserName(data.Incorrect_email)
ln.setPassword(data.Incorrect_passwords)
ln.Login_button()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: A user could not be found with this email address.');
            
})
          
})
    

 // Case: #003

 it('Correct username & Empty Password ', () => {
        
  cy.fixture("practiceautomationtesting").then((data)=>{
  ln.setuserName(data.Incorrect_email)
  ln.Login_button()
  cy.wait(50)
  cy.get('.woocommerce-error > li').
  should('have.text','Error: Password is required.');
              
  })
            
  })

 // Case: #004

 it('Empty username & Correct Password ', () => {
        
  cy.fixture("practiceautomationtesting").then((data)=>{
  ln.setPassword(data.Incorrect_passwords)
  ln.Login_button()
  cy.wait(50)
  cy.get('.woocommerce-error > li').
  should('have.text','Error: Username is required.');
              
  })
            
  })



 // Case: #005

 it('Empty username & Empty Password ', () => {
        
  cy.fixture("practiceautomationtesting").then((data)=>{
  ln.Login_button()
  cy.wait(50)
  cy.get('.woocommerce-error > li').
  should('have.text','Error: Username is required.');
              
  })
            
  })

// Case: #007

it('Login handle case sensitive ', () => {
        
  cy.fixture("practiceautomationtesting").then((data)=>{
  ln.setuserName(data.Case_Sensitive_Email)
  ln.setPassword(data.Case_Sensitive_password)
  ln.Login_button()
  cy.wait(50)
  cy.get('.woocommerce-error > li').
  should('have.text','Error: The password you entered for the username LUCIFER007@mailinator.com is incorrect. Lost your password?');
              
  })
            
  })


  })
