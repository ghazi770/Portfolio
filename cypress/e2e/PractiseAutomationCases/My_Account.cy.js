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
 
const acc=new Account();
  
it.only('My Account- Test cases', () => {

// Case: #001 ['My Account- Dashboard ']
acc.setlinkorder()

// Case: #002 ['My Account- Orders ']

cy.wait(100)    
acc.setlink_download()

// Case: #004 ['My Account- Address ']

cy.wait(100)
acc.setlink_Address()

// Case: #005 ['My Account- Account Detail ']  

cy.wait(100)
acc.setlink_AccDeatail()

// Case: #006 ['My Account- LogOut ']

cy.wait(100)
acc.set_logOut()
 }) 
     


  })
