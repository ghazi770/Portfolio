/// <reference types="cypress" />

import Registration from "../../PageObject/Registration_Page";
import Base from "../../e2e/Base/Base_class"


describe('Registeration', () => 
{ 
  
const randomEmail = `test${Math.floor(Math.random() * 100000)}@mailinator.com`;  
const base= new Base();
const reg=new Registration();

// contain Each block 

base.Open_url()
base.Reload_Page()



// Case: #001

it('Registeration -Sign In', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
data.Email=randomEmail  
reg.settxtuserEmail(randomEmail)
reg.set_Password()
cy.wait(5000)    
reg.set_Password2()
reg.regis_button_click()
cy.wait(50)
cy.contains('Sign out').should('be.visible').click()

                    
})  
 
            
})


// Case: #002

it('Registeration -Invalid email Id', () => {

reg.Invalid_email()
reg.set_Password()
cy.wait(5000)    
reg.set_Password2()
reg.regis_button_click()
cy.wait(50)
reg.Email_error()
                
  })
   
 // Case: #003

it('Registeration with Empty Email ', () => {
        

reg.set_Password()
cy.wait(5000)    
reg.set_Password2()
reg.regis_button_click()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: Please provide a valid email address.');
              
})
            

// Case: #004

it('Registeration with Empty Password ', () => {
        
cy.fixture("practiceautomationtesting").then((data)=>{
reg.settxtuserEmail(data.Incorrect_email)
reg.regis_button_click()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: Please enter an account password.');
                
})
              
})


 // Case: #005 

it ('Registeration with Empty Email_Id & Password ', () => {

reg.regis_button_click()
cy.wait(50)
cy.get('.woocommerce-error > li').
should('have.text','Error: Please provide a valid email address.');                

                  
})


})
