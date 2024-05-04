import { it } from "mocha";
import Shope_Page from "../../PageObject/Shop";

describe('Shope Page', () => 
{ 
  
before(() => {
cy.visit("https://practice.automationtesting.in/shop/")

}) 

const sp=new Shope_Page();
 
// Case: #002

it('Shop Product Categories only ', () => {

cy.fixture("practiceautomationtesting").then((data)=>{
    
sp.setcategory_link();
cy.wait(50)
sp.setBreadcrum(); 
    
})
                  
})  

// Case: #003

it('Shop-Default-Sorting by popularity Functionlaity ', () => {

sp.setsort_popularity();
cy.wait(50)
                              
})  
    

// Case: #004

it('Shop-Default-Sorting by Average-rating Functionlaity ', () => {

sp.setsort_avgrating();
cy.wait(50)                          
 })  
        

 // Case: #005

it('Shop-Default-Sorting by newness Functionlaity ', () => {

sp.setsort_newness();
cy.wait(50)                          
 })  
    

 // Case: #006
it('Shop-Default-Sorting by Price(Low to High) Functionlaity ', () => {

sp.setsort_low_High();
cy.wait(50)                     
})  
    
 
 // Case: #007
it ('Shop-Default-Sorting by Price(High to Low) Functionlaity ', () => {

sp.setsort_High_low();
cy.wait(50)
                          
 })  
    
 // Case: #008
it.only ('Add-Basket-view-basket Functionlaity ', () => {

cy.fixture("billingdetail").then((data)=>{

cy.get('.post-160 > .button').click()
cy.wait(50)
cy.get('.added_to_cart').click() 
cy.get('.checkout-button').click()

sp.set_firstName(data.Firstname)
sp.set_lastName(data.Last)
sp.set_companyName(data.Company)
sp.set_billingEmail(data.email)
sp.set_billingPhone(data.Phone)
sp.set_Billingaddress(data.Address)
sp.set_BillingCity(data.City)
sp.set_PostalCode(data.Zip)
sp.PlaceOrder_button()

})

})  


})
