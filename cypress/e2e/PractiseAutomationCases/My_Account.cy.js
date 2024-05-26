import { before } from "mocha";
import Account from "../../PageObject/Account_Page";


describe('Account Page', () => 
{ 
 
    
before(() => {

cy.visit("https://practice.automationtesting.in/my-account/")

cy.get("[name='username']").type("lucifer007@mailinator.com")
cy.get("[id='password']").type("SShaheen!021")
cy.get("[name='login']").click()
    

 })   



 afterEach(() => {
    cy.go('back') }) 

  
const acc=new Account();
  
// Case: #001

it.only('My Account- Dashboard ', () => {

acc.setlinkorder()
cy.wait(50)   
                                  
 }) 
 
// Case: #003

 it('My Account - Download', () => {

    acc.setlink_download()
    cy.wait(200)   
                                      
}) 

// Case: #004

it('My Account - Address Functionality ', () => {

acc.setlink_Address()
cy.wait(50)   
                                          
}) 

// Case: #005

it('My Account - Account Detail ', () => {

acc.setlink_AccDeatail()
cy.wait(50)   
                                              
}) 
                        
// Case: #006

it('My Account - LogOut ', () => {

acc.set_logOut()
cy.wait(50)   
                                                  
    }) 
    


  })
